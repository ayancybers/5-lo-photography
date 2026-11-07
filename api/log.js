const hits = globalThis.__fiveLoVisitorLogHits || new Map();
const recent = globalThis.__fiveLoVisitorRecent || new Map();
globalThis.__fiveLoVisitorLogHits = hits;
globalThis.__fiveLoVisitorRecent = recent;

const WINDOW_MS = 60 * 60 * 1000;
const MAX_HITS = 30;
const DEDUPE_MS = 20 * 1000;
const MAX_BODY_BYTES = 7000;
const WEBHOOK_TIMEOUT_MS = 8000;

function clean(value, max = 500) {
  return String(value ?? "")
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

function getIp(req) {
  const vercelIp = String(
    req.headers?.["x-vercel-forwarded-for"] || req.headers?.["x-real-ip"] || "",
  ).trim();
  if (vercelIp) return vercelIp.split(",")[0].trim();
  const forwarded = req.headers?.["x-forwarded-for"];
  if (Array.isArray(forwarded)) return String(forwarded[0] || "unknown").trim();
  return String(forwarded || req.socket?.remoteAddress || "unknown").split(",")[0].trim();
}

function sameOrigin(req) {
  const origin = String(req.headers?.origin || "").trim();
  if (!origin) return false;
  try {
    return new URL(origin).host === String(req.headers?.host || "").trim();
  } catch {
    return false;
  }
}

function hitLimit(map, key) {
  const now = Date.now();
  const current = map.get(key);
  if (!current || now - current.start >= WINDOW_MS) {
    map.set(key, { start: now, count: 1 });
    return false;
  }
  current.count += 1;
  return current.count > MAX_HITS;
}

function cleanup(map) {
  if (map.size < 1000) return;
  const cutoff = Date.now() - WINDOW_MS;
  for (const [key, value] of map) {
    const timestamp = typeof value === "number" ? value : value.start;
    if (timestamp < cutoff) map.delete(key);
  }
}

function detectDevice(ua) {
  if (/ipad|tablet|playbook|silk/i.test(ua)) return "Tablet";
  if (/mobi|android|iphone|ipod/i.test(ua)) return "Mobile";
  return "Desktop";
}

function detectBrowser(ua) {
  if (/edg\//i.test(ua)) return "Microsoft Edge";
  if (/opr\//i.test(ua)) return "Opera";
  if (/firefox\//i.test(ua)) return "Firefox";
  if (/chrome\//i.test(ua)) return "Chrome";
  if (/safari\//i.test(ua) && !/chrome\//i.test(ua)) return "Safari";
  return "Other";
}

function detectOs(ua) {
  if (/windows nt/i.test(ua)) return "Windows";
  if (/android/i.test(ua)) return "Android";
  if (/iphone|ipad|ipod/i.test(ua)) return "iOS";
  if (/mac os x/i.test(ua)) return "macOS";
  if (/linux/i.test(ua)) return "Linux";
  return "Other";
}

function webhookField(value, max = 900) {
  return clean(value, max) || "غير محدد";
}

function locationFrom(req) {
  const cityHeader = String(req.headers?.["x-vercel-ip-city"] || "").trim();
  let city = "";
  try {
    city = decodeURIComponent(cityHeader).slice(0, 100);
  } catch {
    city = clean(cityHeader, 100);
  }
  const countryCode = clean(req.headers?.["x-vercel-ip-country"] || "", 5).toUpperCase();
  const regionCode = clean(req.headers?.["x-vercel-ip-country-region"] || "", 40);
  const countryNames = { SA: "Saudi Arabia", KW: "Kuwait", BH: "Bahrain", QA: "Qatar", AE: "United Arab Emirates", OM: "Oman" };
  const regionNames = {
    "02": "Makkah", "03": "Madinah", "04": "Eastern Province", "05": "Al-Qassim",
    "06": "Ha'il", "07": "Tabuk", "08": "Northern Borders", "09": "Jazan",
    "10": "Najran", "11": "Al-Bahah", "12": "Al-Jawf", "01": "Riyadh"
  };
  const country = countryNames[countryCode] || countryCode;
  const region = regionNames[regionCode] || regionCode;
  return [city, region, country].filter(Boolean).join(", ") || "Unavailable";
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
  cleanup(hits);
  cleanup(recent);

  if (hitLimit(hits, requestIp)) {
    return res.status(429).json({ success: false, error: "Too many requests" });
  }

  try {
    const body = req.body && typeof req.body === "object" ? req.body : {};
    const ua = clean(req.headers?.["user-agent"] || "Unknown", 500);
    const page = clean(body.page || "/", 200);
    const event = clean(body.event || "page_view", 40);
    const language = clean(body.language || "en", 5);
    const theme = clean(body.theme || "dark", 10);
    const acceptLanguage = clean(req.headers?.["accept-language"] || "Unavailable", 180);
    const requestId = typeof globalThis.crypto?.randomUUID === "function"
      ? globalThis.crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    let referrer = "Direct / unavailable";
    try {
      const parsedReferrer = new URL(String(body.referrer || ""));
      referrer = `${parsedReferrer.hostname}${parsedReferrer.pathname}`.slice(0, 180);
    } catch {}
    if (!["page_view", "developer_tools_attempt", "booking_whatsapp_redirect_failure"].includes(event)) {
      return res.status(400).json({ success: false, error: "Invalid event" });
    }
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

    if (!/^\/(?!\/)/.test(page)) {
      return res.status(400).json({ success: false, error: "Invalid page" });
    }

    if (!["ar", "en"].includes(language)) {
      return res.status(400).json({ success: false, error: "Invalid language" });
    }

    if (!["relax", "dark", "light"].includes(theme)) {
      return res.status(400).json({ success: false, error: "Invalid theme" });
    }

    const dedupeKey = `${requestIp}|${page}|${event}`;
    const now = Date.now();
    const recentHit = recent.get(dedupeKey);
    if (recentHit && now - recentHit < DEDUPE_MS) {
      return res.status(202).json({ success: true, duplicate: true });
    }
    recent.set(dedupeKey, now);

    if (!webhookUrl) {
      return res.status(204).end();
    }

    const isBot = /bot|crawler|spider|slurp|headless|preview/i.test(ua);
    const device = detectDevice(ua);
    const browser = detectBrowser(ua);
    const os = detectOs(ua);
    const isSecurityEvent = event === "developer_tools_attempt";
    const isBookingRedirectFailure = event === "booking_whatsapp_redirect_failure";
    const source = referrer === "Direct / unavailable"
      ? "Direct"
      : (() => {
        try {
          const originHost = new URL(String(body.referrer)).host;
          return originHost === String(req.headers?.host || "") ? "Internal page" : `External · ${originHost}`;
        } catch { return "Direct"; }
      })();

    const payload = {
      username: "5lo Visitor Monitor",
      allowed_mentions: { parse: [] },
      embeds: [
        {
          title: isBookingRedirectFailure
            ? "BOOKING / WHATSAPP REDIRECT FAILED"
            : isSecurityEvent
            ? "SECURITY / POSSIBLE DEVELOPER TOOLS ATTEMPT"
            : isBot ? "AUTOMATED VISIT" : "NEW VISITOR / SITE ENTRY",
          description: isBookingRedirectFailure
            ? "The browser stayed on the booking page after a WhatsApp redirect was requested. A fallback link was shown."
            : isSecurityEvent
            ? "A developer tools shortcut was detected. This is a heuristic signal and does not confirm the tools were opened."
            : `A visitor opened the website. Approximate location: **${webhookField(locationFrom(req), 120)}**.`,
          color: isBookingRedirectFailure || isSecurityEvent ? 0xA84F4F : isBot ? 0x7C8794 : 0xC6A15B,
          fields: [
            {
              name: "01 / VISITOR",
              value: `**Location**\n${webhookField(locationFrom(req), 120)}\n**IP**\n\`${webhookField(requestIp, 120)}\`\n**Time**\n<t:${Math.floor(now / 1000)}:F>`,
              inline: false,
            },
            {
              name: "02 / SESSION",
              value: `**Page**\n\`${webhookField(page, 180)}\`\n**Event**\n\`${webhookField(event, 50)}\`\n**Language / theme**\n${webhookField(language, 10)} / ${webhookField(theme, 10)}\n**Request ID**\n\`${requestId}\``,
              inline: false,
            },
            {
              name: "03 / DEVICE & BROWSER",
              value: `**Device** · ${webhookField(device, 50)}\n**Browser** · ${webhookField(browser, 80)}\n**Operating system** · ${webhookField(os, 50)}`,
              inline: false,
            },
            {
              name: "04 / VISIT SOURCE",
              value: `**Source** · ${webhookField(source, 100)}\n**Referrer**\n\`${webhookField(referrer, 180)}\`\n**Accept-Language**\n\`${webhookField(acceptLanguage, 180)}\``,
              inline: false,
            },
            {
              name: "05 / REQUEST DETAILS",
              value: `**Method** · ${webhookField(req.method, 10)}\n**Host** · ${webhookField(req.headers?.host || "Unavailable", 100)}\n**User-Agent**\n\`${webhookField(ua, 700)}\``,
              inline: false,
            },
          ],
          footer: { text: "5lo Photography | Visitor Monitor" },
          timestamp: new Date(now).toISOString(),
        },
      ],
    };

    const response = await postWebhook(webhookUrl, payload);
    if (!response.ok) {
      return res.status(502).json({ success: false, error: "Visitor notification failed" });
    }

    return res.status(200).json({ success: true });
  } catch {
    return res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}
