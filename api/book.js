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
  rolling_static: {
    ar: "رولينق + ثابتة (250 ر.س)",
    en: "Rolling + Static (250 SAR)",
    price: 250,
  },
  cinematic: {
    ar: "التصوير السينمائي (450 ر.س)",
    en: "Cinematic Production (450 SAR)",
    price: 450,
  },
});

const CITIES = Object.freeze({
  dammam: "Dammam, Saudi Arabia",
  khobar: "Al Khobar, Saudi Arabia",
  qatif: "Qatif, Saudi Arabia",
  jubail: "Jubail, Saudi Arabia",
});

const DAYS = Object.freeze({
  sunday: "Sunday",
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
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

const BUSINESS_WHATSAPP = "966597561765";
const WINDOW_MS = 15 * 60 * 1000;
const MAX_IP_HITS = 5;
const MAX_PHONE_HITS = 3;
const MAX_BODY_BYTES = 12000;
const WEBHOOK_TIMEOUT_MS = 5000;
const ERROR_WEBHOOK_TIMEOUT_MS = 2500;

function clean(value, max = 1000) {
  return String(value ?? "")
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

function webhookField(value, max = 900) {
  return clean(value, max) || "Not provided";
}

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

async function postWebhook(url, payload, timeoutMs = WEBHOOK_TIMEOUT_MS) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
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

async function reportBookingIssue(reason, requestId, status, extra = "") {
  const timestamp = new Date().toISOString();
  console.error("[5LO | webhook_error]", {
    site: "5lo.store",
    reason,
    requestId,
    status,
    extra,
  });

  // A dedicated diagnostics webhook is preferred. If it is not configured,
  // the booking webhook is used so failures are still visible in Discord.
  const errorWebhook = process.env.DISCORD_WEBHOOK_URL || process.env.BOOKING_WEB;
  if (!errorWebhook) {
    console.error("[5LO | webhook_error] No DISCORD_WEBHOOK_URL or BOOKING_WEB is configured.");
    return false;
  }

  try {
    const response = await postWebhook(errorWebhook, {
      username: "5LO Site Monitor",
      allowed_mentions: { parse: [] },
      embeds: [{
        title: "5LO | webhook_error",
        description: "A booking request failed while processing on 5lo.store.",
        color: 0xD64545,
        fields: [
          { name: "Website", value: "5lo.store", inline: true },
          { name: "Stage / Reason", value: webhookField(reason, 900), inline: false },
          { name: "Request ID", value: webhookField(requestId, 100), inline: true },
          { name: "HTTP Status", value: webhookField(status, 80), inline: true },
          ...(extra ? [{ name: "Details", value: webhookField(extra, 900), inline: false }] : []),
          { name: "Time", value: timestamp, inline: false },
        ],
        footer: { text: "5LO Photography | webhook_error" },
        timestamp,
      }],
    }, ERROR_WEBHOOK_TIMEOUT_MS);
    if (!response.ok) {
      console.error("[5LO | webhook_error] Discord returned", response.status);
      return false;
    }
    return true;
  } catch (error) {
    console.error("[5LO | webhook_error] Could not send Discord report", error?.message || error);
    return false;
  }
}

async function fail(res, status, errorCode, reason, requestId, extra = "") {
  await reportBookingIssue(reason, requestId, status, extra);
  return res.status(status).json({
    success: false,
    error: errorCode,
    requestId,
  });
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

  const requestId = typeof globalThis.crypto?.randomUUID === "function"
    ? globalThis.crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;

  if (!sameOrigin(req)) {
    return fail(res, 403, "Origin not allowed", "Origin validation failed", requestId);
  }

  const contentType = String(req.headers?.["content-type"] || "").toLowerCase();
  if (contentType && !contentType.includes("application/json")) {
    return fail(res, 415, "Unsupported media type", "Request content type was not JSON", requestId);
  }

  const contentLength = Number(req.headers?.["content-length"] || 0);
  if (contentLength > MAX_BODY_BYTES) {
    return fail(res, 413, "Payload too large", "Booking payload exceeded size limit", requestId);
  }

  const requestIp = getIp(req);
  cleanup(ipHits);
  cleanup(phoneHits);

  if (hitLimit(ipHits, requestIp, MAX_IP_HITS)) {
    return fail(res, 429, "Too many requests", "IP rate limit exceeded", requestId);
  }

  try {
    const body = req.body && typeof req.body === "object" ? req.body : {};
    if (clean(body.honeypot, 100)) {
      // Do not send Discord alerts for the hidden spam-trap field.
      return res.status(400).json({ success: false, error: "Invalid request", requestId });
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

    if (body.acceptedTerms !== true || termsVersion !== "1.0") {
      return fail(res, 400, "Terms acceptance required", "Customer did not accept the current terms", requestId);
    }

    const selectedPackage = PACKAGES[packageKey];
    const selectedCity = CITIES[shootRegionKey];
    const selectedDay = DAYS[bookingDayKey];
    const selectedVehicle = VEHICLES[carTypeKey];
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
    const todayInSaudi = new Date(Date.now() + 3 * 60 * 60 * 1000).toISOString().slice(0, 10);
    const validBookingDate = parsedBookingDate && !Number.isNaN(parsedBookingDate.valueOf()) &&
      parsedBookingDate.toISOString().slice(0, 10) === bookingDate &&
      bookingDate > todayInSaudi &&
      weekdayKeys[parsedBookingDate.getUTCDay()] === bookingDayKey;

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
      return fail(res, 400, "Invalid booking data", "Booking fields failed server-side validation", requestId);
    }

    if (hitLimit(phoneHits, phone, MAX_PHONE_HITS)) {
      return fail(res, 429, "Too many requests", "Phone number rate limit exceeded", requestId);
    }

    const bookingWebhook = process.env.BOOKING_WEB;
    if (!bookingWebhook) {
      return fail(res, 500, "Server configuration error", "BOOKING_WEB is not configured", requestId);
    }

    const termsAcceptedAt = new Date().toISOString();
    const carLabel = vehicleModel ? `${selectedVehicle} - ${vehicleModel}` : selectedVehicle;
    const displayPhone = `+${phone}`;
    const displayBookingDate = new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      timeZone: "Asia/Riyadh",
    }).format(parsedBookingDate);
    const payload = {
      username: "5LO Photography",
      allowed_mentions: { parse: [] },
      embeds: [{
        title: "NEW BOOKING | 5LO",
        description: "A new booking request has been received from **5lo.store**.",
        color: 0xC6A15B,
        fields: [
          { name: "Customer Name", value: webhookField(name, 200), inline: true },
          { name: "Contact Number", value: webhookField(displayPhone, 50), inline: true },
          { name: "Selected Package", value: webhookField(selectedPackage.en, 200), inline: true },
          { name: "Vehicle", value: webhookField(carLabel, 200), inline: true },
          { name: "City", value: webhookField(selectedCity, 100), inline: true },
          { name: "Booking Day", value: webhookField(selectedDay, 100), inline: true },
          { name: "Booking Date", value: webhookField(displayBookingDate, 40), inline: true },
          {
            name: "Terms & Conditions",
            value: `Accepted • Version ${termsVersion} • ${webhookField(termsAcceptedAt, 40)}`,
            inline: false,
          },
          { name: "Request ID", value: `\`${requestId}\``, inline: false },
          { name: "IP Address", value: `\`${webhookField(requestIp, 120)}\``, inline: false },
          { name: "Additional Details", value: webhookField(notes || "No additional details provided", 900), inline: false },
          { name: "Business WhatsApp", value: `[Open 5LO WhatsApp](https://wa.me/${BUSINESS_WHATSAPP})`, inline: false },
        ],
        footer: { text: "5LO Photography | Booking Notification" },
        timestamp: new Date().toISOString(),
      }],
    };

    let response;
    try {
      response = await postWebhook(bookingWebhook, payload);
    } catch (error) {
      return fail(
        res,
        502,
        "Booking notification unavailable",
        "Could not reach BOOKING_WEB",
        requestId,
        error?.message || "Discord webhook request failed",
      );
    }

    if (!response.ok) {
      return fail(
        res,
        502,
        "Failed to send booking notification",
        "BOOKING_WEB rejected the booking notification",
        requestId,
        `Discord HTTP ${response.status}`,
      );
    }

    console.info("[5LO booking] Discord notification sent", { requestId });
    return res.status(200).json({
      success: true,
      requestId,
      package: selectedPackage.price,
      whatsapp: BUSINESS_WHATSAPP,
    });
  } catch (error) {
    return fail(
      res,
      500,
      "Internal Server Error",
      "Unhandled booking API exception",
      requestId,
      error?.message || "Unknown server error",
    );
  }
}
