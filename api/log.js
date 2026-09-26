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
  return String(value ?? '')
    .replace(/[\u0000-\u001F\u007F]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, max);
}

function getIp(req) {
  const realIp = String(req.headers?.['x-real-ip'] || '').trim();
  if (realIp) return realIp;
  const forwarded = req.headers?.['x-forwarded-for'];
  if (Array.isArray(forwarded)) return String(forwarded[0] || 'unknown').trim();
  return String(forwarded || req.socket?.remoteAddress || 'unknown').split(',')[0].trim();
}

function sameOrigin(req) {
  const origin = String(req.headers?.origin || '').trim();
  if (!origin) return true;
  try {
    return new URL(origin).host === String(req.headers?.host || '').trim();
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
    const timestamp = typeof value === 'number' ? value : value.start;
    if (timestamp < cutoff) map.delete(key);
  }
}

function referrerOrigin(value) {
  const raw = clean(value, 600);
  if (!raw) return 'Direct';
  try {
    return new URL(raw).origin.slice(0, 200);
  } catch {
    return 'Unknown';
  }
}

function detectDevice(ua) {
  if (/ipad|tablet|playbook|silk/i.test(ua)) return 'Tablet';
  if (/mobi|android|iphone|ipod/i.test(ua)) return 'Mobile';
  return 'Desktop';
}

function detectBrowser(ua) {
  if (/edg\//i.test(ua)) return 'Microsoft Edge';
  if (/opr\//i.test(ua)) return 'Opera';
  if (/firefox\//i.test(ua)) return 'Firefox';
  if (/chrome\//i.test(ua)) return 'Chrome';
  if (/safari\//i.test(ua) && !/chrome\//i.test(ua)) return 'Safari';
  return 'Other';
}

function detectOs(ua) {
  if (/windows nt/i.test(ua)) return 'Windows';
  if (/android/i.test(ua)) return 'Android';
  if (/iphone|ipad|ipod/i.test(ua)) return 'iOS';
  if (/mac os x/i.test(ua)) return 'macOS';
  if (/linux/i.test(ua)) return 'Linux';
  return 'Other';
}

function webhookField(value, max = 900) {
  return clean(value, max) || 'غير محدد';
}

async function postWebhook(url, payload) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), WEBHOOK_TIMEOUT_MS);
  try {
    return await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal
    });
  } finally {
    clearTimeout(timer);
  }
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('X-Robots-Tag', 'noindex, nofollow, noarchive');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  if (!sameOrigin(req)) {
    return res.status(403).json({ success: false, error: 'Origin not allowed' });
  }

  const contentType = String(req.headers?.['content-type'] || '').toLowerCase();
  if (contentType && !contentType.includes('application/json')) {
    return res.status(415).json({ success: false, error: 'Unsupported media type' });
  }

  const contentLength = Number(req.headers?.['content-length'] || 0);
  if (contentLength > MAX_BODY_BYTES) {
    return res.status(413).json({ success: false, error: 'Payload too large' });
  }

  const requestIp = getIp(req);
  cleanup(hits);
  cleanup(recent);

  if (hitLimit(hits, requestIp)) {
    return res.status(429).json({ success: false, error: 'Too many requests' });
  }

  try {
    const body = req.body && typeof req.body === 'object' ? req.body : {};
    const ua = clean(req.headers?.['user-agent'] || 'Unknown', 500);
    const page = clean(body.page || '/', 200);
    const title = clean(body.title || '5lo Photography', 160);
    const language = clean(body.language || 'ar', 30);
    const theme = clean(body.theme || 'relax', 30);
    const visitorId = clean(body.visitorId || '', 80);
    const sessionId = clean(body.sessionId || '', 80);
    const viewport = clean(body.viewport || '', 40);
    const screen = clean(body.screen || '', 40);
    const timezone = clean(body.timezone || '', 80);
    const platform = clean(body.platform || '', 100);
    const connection = clean(body.connection || '', 40);
    const navigation = clean(body.navigation || '', 40);
    const event = clean(body.event || 'page_view', 40);
    const referrer = referrerOrigin(body.referrer);
    const webhookUrl = process.env.webhook || process.env.DISCORD_WEBHOOK_URL;

    if (!/^\/(?!\/)/.test(page)) {
      return res.status(400).json({ success: false, error: 'Invalid page' });
    }

    if (!['ar', 'en'].includes(language)) {
      return res.status(400).json({ success: false, error: 'Invalid language' });
    }

    if (!['relax', 'dark', 'light'].includes(theme)) {
      return res.status(400).json({ success: false, error: 'Invalid theme' });
    }

    const dedupeKey = `${requestIp}|${visitorId}|${page}|${event}`;
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
    const visitType = clean(body.newSession ? 'New session' : 'Page view', 30);

    const payload = {
      username: '5lo Visitor Monitor',
      allowed_mentions: { parse: [] },
      embeds: [
        {
          title: isBot ? 'Bot / Automated Visit' : 'New Site Visit',
          description: isBot ? 'تم رصد طلب آلي للموقع.' : 'تم تسجيل دخول زائر جديد للموقع.',
          color: 52298,
          fields: [
            { name: 'الحالة', value: webhookField(visitType, 60), inline: true },
            { name: 'الصفحة', value: `\`${webhookField(page, 180)}\``, inline: true },
            { name: 'الحدث', value: `\`${webhookField(event, 50)}\``, inline: true },
            { name: 'الوقت', value: `<t:${Math.floor(now / 1000)}:F>`, inline: false },
            { name: 'IP', value: `\`${webhookField(requestIp, 120)}\``, inline: true },
            { name: 'الزائر', value: visitorId ? `\`${webhookField(visitorId, 80)}\`` : 'غير متوفر', inline: true },
            { name: 'الجلسة', value: sessionId ? `\`${webhookField(sessionId, 80)}\`` : 'غير متوفر', inline: true },
            { name: 'الجهاز', value: webhookField(device, 50), inline: true },
            { name: 'المتصفح', value: webhookField(browser, 80), inline: true },
            { name: 'النظام', value: webhookField(os, 50), inline: true },
            { name: 'اللغة', value: webhookField(language, 30), inline: true },
            { name: 'المود', value: webhookField(theme, 30), inline: true },
            { name: 'الشاشة', value: webhookField(screen, 40), inline: true },
            { name: 'نافذة المتصفح', value: webhookField(viewport, 40), inline: true },
            { name: 'المنطقة الزمنية', value: webhookField(timezone, 80), inline: true },
            { name: 'المنصة', value: webhookField(platform, 100), inline: true },
            { name: 'الاتصال', value: webhookField(connection, 40), inline: true },
            { name: 'التنقل', value: webhookField(navigation, 40), inline: true },
            { name: 'المصدر', value: webhookField(referrer, 200), inline: false },
            { name: 'عنوان الصفحة', value: webhookField(title, 180), inline: false },
            { name: 'User-Agent', value: `\`${webhookField(ua, 900)}\``, inline: false }
          ],
          footer: { text: '5lo Photography • Visitor Monitor' },
          timestamp: new Date(now).toISOString()
        }
      ]
    };

    const response = await postWebhook(webhookUrl, payload);
    if (!response.ok) {
      return res.status(502).json({ success: false, error: 'Visitor notification failed' });
    }

    return res.status(200).json({ success: true });
  } catch {
    return res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}
