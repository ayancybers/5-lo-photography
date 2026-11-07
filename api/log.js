const hits = globalThis.__fiveLoVisitorLogHits || new Map();
const recent = globalThis.__fiveLoVisitorRecent || new Map();
globalThis.__fiveLoVisitorLogHits = hits;
globalThis.__fiveLoVisitorRecent = recent;

const WINDOW_MS = 60 * 60 * 1000;
const MAX_HITS = 30;
const DEDUPE_MS = 20 * 1000;
const MAX_BODY_BYTES = 7000;
const WEBHOOK_TIMEOUT_MS = 5000;

function clean(value, max = 500) {
  return String(value ?? "")
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

function webhookField(value, max = 900) {
  return clean(value, max) || "Unavailable";
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
  const countryNames = {
    SA: "Saudi Arabia",
    KW: "Kuwait",
    BH: "Bahrain",
    QA: "Qatar",
    AE: "United Arab Emirates",
    OM: "Oman",
  };
  const regionNames = {
    "02": "Makkah", "03": "Madinah", "04": "Eastern Province", "05": "Al-Qassim",
    "06": "Ha'il", "07": "Tabuk", "08": "Northern Borders", "09": "Jazan",
    "10": "Najran", "11": "Al-Bahah", "12": "Al-Jawf", "01": "Riyadh",
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
    const requestId = clean(body.requestId || `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`, 100);

    const allowedEvents = [
      "page_view",
      "developer_tools_attempt",
      "booking_whatsapp_redirect_failure",
      "webhook_error",
    ];
    if (!allowedEvents.includes(event)) {
      return res.status(400).json({ success: false, error: "Invalid event" });
    }
    if (!/^\/(?!\/)/.test(page)) {
      return res.status(400).json({ success: false, error: "Invalid page" });
    }
    if (!["ar", "en"].includes(language)) {
      return res.status(400).json({ success: false, error: "Invalid language" });
    }
    if (!["relax", "dark", "light"].includes(theme)) {
      return res.status(400).json({ success: false, error: "Invalid theme" });
    }

    const isWebhookError = event === "webhook_error";
    const isRedirectFailure = event === "booking_whatsapp_redirect_failure";
    const dedupeKey = isWebhookError
      ? `${requestIp}|${event}|${requestId}`
      : `${requestIp}|${page}|${event}`;
    const now = Date.now();
    const recentHit = recent.get(dedupeKey);
    if (recentHit && now - recentHit < DEDUPE_MS) {
      return res.status(202).json({ success: true, duplicate: true });
    }
    recent.set(dedupeKey, now);

    const webhookUrl = isWebhookError || isRedirectFailure
      ? (process.env.DISCORD_WEBHOOK_URL || process.env.BOOKING_WEB)
      : process.env.DISCORD_WEBHOOK_URL;

    if (!webhookUrl) {
      if (isWebhookError) {
        console.error("[5LO | webhook_error] No DISCORD_WEBHOOK_URL or BOOKING_WEB is configured.");
        return res.status(503).json({ success: false, error: "Error webhook not configured" });
      }
      return res.status(204).end();
    }

    const isBot = /bot|crawler|spider|slurp|headless|preview/i.test(ua);
    const isSecurityEvent = event === "developer_tools_attempt";
    const details = clean(body.details || body.reason || "", 900) || "Not provided";
    const httpStatus = clean(body.httpStatus || body.status || "Unknown", 80);
    const source = clean(body.source || "Browser booking flow", 100);
    let referrer = "Direct / unavailable";
    try {
      const parsedReferrer = new URL(String(body.referrer || ""));
      referrer = `${parsedReferrer.hostname}${parsedReferrer.pathname}`.slice(0, 180);
    } catch {}

    let title = "NEW VISITOR / SITE ENTRY";
    let description = `A visitor opened the website. Approximate location: **${webhookField(locationFrom(req), 120)}**.`;
    let color = isBot ? 0x7C8794 : 0xC6A15B;
    let fields;
    let username = "5LO Visitor Monitor";

    if (isWebhookError) {
      username = "5LO Site Monitor";
      title = "5LO | webhook_error";
      description = "The 5LO booking flow could not complete a server or webhook request.";
      color = 0xD64545;
      fields = [
        { name: "Website", value: "5lo.store", inline: true },
        { name: "Stage / Details", value: webhookField(details, 900), inline: false },
        { name: "HTTP Status", value: webhookField(httpStatus, 80), inline: true },
        { name: "Request ID", value: webhookField(requestId, 100), inline: true },
        { name: "Source", value: webhookField(source, 100), inline: true },
        { name: "Page", value: webhookField(page, 180), inline: true },
        { name: "Time", value: `<t:${Math.floor(now / 1000)}:F>`, inline: false },
      ];
    } else if (isRedirectFailure) {
      username = "5LO Site Monitor";
      title = "5LO | WhatsApp redirect failure";
      description = "The booking notification was processed, but the browser could not open WhatsApp automatically.";
      color = 0xD68A32;
      fields = [
        { name: "Website", value: "5lo.store", inline: true },
        { name: "Page", value: webhookField(page, 180), inline: true },
        { name: "Device", value: detectDevice(ua), inline: true },
        { name: "Browser", value: detectBrowser(ua), inline: true },
        { name: "Request ID", value: webhookField(requestId, 100), inline: true },
        { name: "Reason", value: webhookField(details, 900), inline: false },
        { name: "Time", value: `<t:${Math.floor(now / 1000)}:F>`, inline: false },
      ];
    } else {
      if (isSecurityEvent) {
        title = "SECURITY / POSSIBLE DEVELOPER TOOLS ATTEMPT";
        description = "A developer tools shortcut was detected. This is a heuristic signal and does not confirm the tools were opened.";
        color = 0xA84F4F;
      } else if (isBot) {
        title = "AUTOMATED VISIT";
      }
      fields = [
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
          value: `**Device** · ${webhookField(detectDevice(ua), 50)}\n**Browser** · ${webhookField(detectBrowser(ua), 80)}\n**Operating system** · ${webhookField(detectOs(ua), 50)}`,
          inline: false,
        },
        {
          name: "04 / VISIT SOURCE",
          value: `**Referrer**\n\`${webhookField(referrer, 180)}\`\n**Accept-Language**\n\`${webhookField(acceptLanguage, 180)}\``,
          inline: false,
        },
        {
          name: "05 / REQUEST DETAILS",
          value: `**Method** · ${webhookField(req.method, 10)}\n**Host** · ${webhookField(req.headers?.host || "Unavailable", 100)}\n**User-Agent**\n\`${webhookField(ua, 700)}\``,
          inline: false,
        },
      ];
    }

    const payload = {
      username,
      allowed_mentions: { parse: [] },
      embeds: [{
        title,
        description,
        color,
        fields,
        footer: { text: "5LO Photography | 5lo.store" },
        timestamp: new Date(now).toISOString(),
      }],
    };

    const response = await postWebhook(webhookUrl, payload);
    if (!response.ok) {
      console.error(`[5LO ${event}] Discord webhook failed`, response.status);
      return res.status(502).json({ success: false, error: "Discord notification failed" });
    }
    return res.status(200).json({ success: true, requestId });
  } catch (error) {
    console.error("[5LO log API] Error", error?.message || error);
    return res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}
