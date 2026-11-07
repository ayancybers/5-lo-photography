const ipHits = globalThis.__fiveLoBookingIpHits || new Map();
const phoneHits = globalThis.__fiveLoBookingPhoneHits || new Map();
globalThis.__fiveLoBookingIpHits = ipHits;
globalThis.__fiveLoBookingPhoneHits = phoneHits;

const PACKAGES = Object.freeze({
  rolling_no_edit: {
    ar: "رولينق بدون مونتاج (100 ر.س)",
    en: "Rolling without editing (100 SAR)",
    price: 100,
  },
  rolling_edit: {
    ar: "رولينق + مونتاج (120 ر.س، بدل 150)",
    en: "Rolling + Editing (120 SAR, was 150)",
    price: 120,
  },
  rolling_static: { ar: "رولينق + ثابتة (250 ر.س)", en: "Rolling + Static (250 SAR)", price: 250 },
  cinematic: {
    ar: "التصوير السينمائي (450 ر.س)",
    en: "Cinematic Production (450 SAR)",
    price: 450,
  },
});

const CITIES = Object.freeze({
  dammam: "الدمام",
  khobar: "الخبر",
  qatif: "القطيف",
  jubail: "الجبيل",
});

const DAYS = Object.freeze({
  sunday: "الأحد",
  monday: "الإثنين",
  tuesday: "الثلاثاء",
  wednesday: "الأربعاء",
  thursday: "الخميس",
  friday: "الجمعة",
  saturday: "السبت",
});

const VEHICLES = Object.freeze({
  sedan: "Sedan",
  suv: "SUV",
  luxury: "Luxury",
  sports: "Sports",
  coupe: "Coupe",
  pickup: "Pickup",
  classic: "Classic",
  other: "Other",
});

function normalizeGccPhone(input) {
  let digits = String(input || "").replace(/\D/g, "");
  if (digits.startsWith("00")) digits = digits.slice(2);
  if (/^9665\d{8}$/.test(digits)) return digits;
  if (/^971(?:2|4|5|6|7|9)\d{7,8}$/.test(digits)) return digits;
  if (/^9733\d{7}$/.test(digits)) return digits;
  if (/^974[3567]\d{7}$/.test(digits)) return digits;
  if (/^965[4569]\d{7}$/.test(digits)) return digits;
  if (/^968[279]\d{7}$/.test(digits)) return digits;
  if (/^05\d{8}$/.test(digits)) return `966${digits.slice(1)}`;
  if (/^5\d{8}$/.test(digits)) return `966${digits}`;
  return "";
}

const WINDOW_MS = 15 * 60 * 1000;
const MAX_IP_HITS = 5;
const MAX_PHONE_HITS = 3;
const MAX_BODY_BYTES = 12000;
const WEBHOOK_TIMEOUT_MS = 8000;

function clean(value, max = 1000) {
  return String(value ?? "")
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

function getIp(req) {
  const realIp = String(req.headers?.["x-real-ip"] || "").trim();
  if (realIp) return realIp;
  const forwarded = req.headers?.["x-forwarded-for"];
  if (Array.isArray(forwarded)) return String(forwarded[0] || "unknown").trim();
  return String(forwarded || req.socket?.remoteAddress || "unknown").split(",")[0].trim();
}

function sameOrigin(req) {
  const origin = String(req.headers?.origin || "").trim();
  if (!origin) return true;
  try {
    return new URL(origin).host === String(req.headers?.host || "").trim();
  } catch {
    return false;
  }
}

function hitLimit(map, key, limit) {
  const now = Date.now();
  const current = map.get(key);
  if (!current || now - current.start >= WINDOW_MS) {
    map.set(key, { start: now, count: 1 });
    return false;
  }
  current.count += 1;
  return current.count > limit;
}

function cleanup(map) {
  if (map.size < 1000) return;
  const cutoff = Date.now() - WINDOW_MS;
  for (const [key, value] of map) {
    if (value.start < cutoff) map.delete(key);
  }
}

function webhookField(value, max = 900) {
  const result = clean(value, max);
  return result || "غير محدد";
}

async function postWebhook(url, payload) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), WEBHOOK_TIMEOUT_MS);
  try {
    return await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timer);
  }
}

async function reportBookingIssue(reason, requestId = "not-created", status = "unknown") {
  console.error("[booking] Failure", { reason, requestId, status });
  const logWebhook = process.env.DISCORD_WEBHOOK_URL;
  if (!logWebhook) return;
  try {
    const response = await postWebhook(logWebhook, {
      username: "5lo Booking Monitor",
      allowed_mentions: { parse: [] },
      embeds: [{
        title: "BOOKING / DELIVERY ISSUE",
        description: "A booking request could not be fully processed.",
        color: 0xA84F4F,
        fields: [
          { name: "Reason", value: String(reason).slice(0, 200), inline: true },
          { name: "Request ID", value: String(requestId).slice(0, 100), inline: true },
          { name: "Status", value: String(status).slice(0, 100), inline: true },
          { name: "Time", value: new Date().toISOString(), inline: false },
        ],
        footer: { text: "5lo Photography | Booking diagnostics" },
        timestamp: new Date().toISOString(),
      }],
    });
    if (!response.ok) console.error("[booking] Discord diagnostics webhook failed", response.status);
  } catch (error) {
    console.error("[booking] Could not deliver diagnostics to Discord", error?.message || error);
  }
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("X-Robots-Tag", "noindex, nofollow, noarchive");
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  if (!sameOrigin(req)) {
    return res.status(403).json({ success: false, error: "Origin not allowed" });
  }

  const contentType = String(req.headers?.["content-type"] || "").toLowerCase();
  if (contentType && !contentType.includes("application/json")) {
    return res.status(415).json({ success: false, error: "Unsupported media type" });
  }

  const contentLength = Number(req.headers?.["content-length"] || 0);
  if (contentLength > MAX_BODY_BYTES) {
    return res.status(413).json({ success: false, error: "Payload too large" });
  }

  const requestIp = getIp(req);
  cleanup(ipHits);
  cleanup(phoneHits);

  if (hitLimit(ipHits, requestIp, MAX_IP_HITS)) {
    return res.status(429).json({ success: false, error: "Too many requests" });
  }

  try {
    const body = req.body && typeof req.body === "object" ? req.body : {};
    const honeypot = clean(body.honeypot, 100);
    if (honeypot) {
      return res.status(400).json({ success: false, error: "Invalid request" });
    }

    const name = clean(body.name, 60);
    const phone = normalizeGccPhone(body.phone);
    const packageKey = clean(body.packageKey, 40);
    const carTypeKey = clean(body.carTypeKey, 40);
    const vehicleModel = clean(body.vehicleModel, 80);
    const shootRegionKey = clean(body.shootRegionKey, 40);
    const bookingDayKey = clean(body.bookingDayKey, 40);
    const bookingDate = clean(body.bookingDate, 10);
    const notes = clean(body.notes, 500);
    const termsVersion = clean(body.termsVersion, 20);
    const termsAcceptedAt = new Date().toISOString();
    if (body.acceptedTerms !== true || termsVersion !== "1.0") {
      return res.status(400).json({ success: false, error: "Terms acceptance required" });
    }
    const webhookUrl = process.env.BOOKING_WEB;

    const selectedPackage = PACKAGES[packageKey];
    const selectedCity = CITIES[shootRegionKey];
    const selectedDay = DAYS[bookingDayKey];
    const parsedBookingDate = /^\d{4}-\d{2}-\d{2}$/.test(bookingDate)
      ? new Date(`${bookingDate}T12:00:00Z`)
      : null;
    const weekdayKeys = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];
    const validBookingDate = parsedBookingDate && !Number.isNaN(parsedBookingDate.valueOf()) &&
      parsedBookingDate.toISOString().slice(0, 10) === bookingDate &&
      weekdayKeys[parsedBookingDate.getUTCDay()] === bookingDayKey;
    const selectedVehicle = VEHICLES[carTypeKey];

    if (
      name.length < 2 ||
      !phone ||
      !selectedPackage ||
      !selectedCity ||
      !selectedDay ||
      !validBookingDate ||
      !selectedVehicle ||
      (notes.length > 0 && notes.length < 3)
    ) {
      return res.status(400).json({ success: false, error: "Invalid booking data" });
    }

    if (hitLimit(phoneHits, phone, MAX_PHONE_HITS)) {
      return res.status(429).json({ success: false, error: "Too many requests" });
    }

    if (!webhookUrl) {
      await reportBookingIssue("BOOKING_WEB is not configured", "not-created", 500);
      return res.status(500).json({ success: false, error: "Server configuration error" });
    }

    const requestId = typeof globalThis.crypto?.randomUUID === "function"
      ? globalThis.crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;

    const whatsappUrl = `https://wa.me/${phone}`;
    const carLabel = vehicleModel ? `${selectedVehicle} - ${vehicleModel}` : selectedVehicle;

    const payload = {
      username: "5lo Photography",
      allowed_mentions: { parse: [] },
      embeds: [
        {
          title: "New Booking",
          description: "تم استقبال طلب حجز جديد من الموقع.",
          color: 52298,
          fields: [
            { name: "الاسم", value: webhookField(name, 200), inline: true },
            { name: "رقم التواصل", value: webhookField(phone, 50), inline: true },
            { name: "الباقة", value: webhookField(selectedPackage.ar, 200), inline: true },
            { name: "السيارة", value: webhookField(carLabel, 200), inline: true },
            { name: "المدينة", value: webhookField(selectedCity, 100), inline: true },
            { name: "يوم الحجز", value: webhookField(selectedDay, 100), inline: true },
            { name: "تاريخ الحجز", value: webhookField(bookingDate, 30), inline: true },
            {
              name: "موافقة الشروط",
              value: `موافق • إصدار ${termsVersion} • ${webhookField(termsAcceptedAt, 40)}`,
              inline: false,
            },
            { name: "رقم الطلب", value: `\`${requestId}\``, inline: false },
            { name: "IP", value: `\`${webhookField(requestIp, 120)}\``, inline: false },
            { name: "التفاصيل", value: webhookField(notes, 900), inline: false },
            { name: "واتساب", value: `[فتح المحادثة](${whatsappUrl})`, inline: false },
          ],
          footer: { text: "5lo Photography • Booking API" },
          timestamp: new Date().toISOString(),
        },
      ],
    };

    const response = await postWebhook(webhookUrl, payload);

    if (!response.ok) {
      await reportBookingIssue("BOOKING_WEB rejected the booking", requestId, response.status);
      return res.status(502).json({ success: false, error: "Failed to send booking notification" });
    }

    console.info("[booking] Discord notification sent", { requestId });
    return res.status(200).json({
      success: true,
      requestId,
      package: selectedPackage.price,
    });
  } catch (error) {
    await reportBookingIssue(error?.message || "Booking handler failed", "not-created", 500);
    return res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}
