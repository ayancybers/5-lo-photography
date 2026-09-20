
export default async function handler(req, res) {
    res.setHeader(
        'Cache-Control',
        'no-store, no-cache, must-revalidate, proxy-revalidate'
    );

    if (req.method !== 'POST') {
        if (req.method === 'GET') {
            return res.status(200).json({
                success: true,
                service: '5lo Photographer visitor logger'
            });
        }

        return res.status(405).json({
            success: false,
            error: 'Method not allowed'
        });
    }

    try {
        const body = req.body || {};

        const userAgent =
            String(body.userAgent || req.headers['user-agent'] || 'Unknown')
                .replace(/[\u0000-\u001F\u007F]/g, ' ')
                .slice(0, 500);

        const page =
            String(body.page || '/')
                .replace(/[\u0000-\u001F\u007F]/g, ' ')
                .slice(0, 200);

        const language =
            String(body.language || 'ar')
                .replace(/[\u0000-\u001F\u007F]/g, ' ')
                .slice(0, 30);

        const forwardedFor = req.headers['x-forwarded-for'];

        const ip =
            (Array.isArray(forwardedFor)
                ? forwardedFor[0]
                : String(forwardedFor || '').split(',')[0]) ||
            req.socket?.remoteAddress ||
            'Unknown';

        const webhookUrl =
            process.env.webhook ||
            process.env.DISCORD_WEBHOOK_URL;

        if (webhookUrl) {
            const discordPayload = {
                username: '5lo Photographer',
                embeds: [
                    {
                        title: '👀 New Visitor',
                        description: 'تم تسجيل زيارة جديدة للموقع.',
                        color: 3718648,
                        fields: [
                            {
                                name: '🌐 IP',
                                value: `\`${String(ip).slice(0, 200)}\``,
                                inline: false
                            },
                            {
                                name: '📄 الصفحة',
                                value: `\`${page}\``,
                                inline: true
                            },
                            {
                                name: '🌍 اللغة',
                                value: `\`${language}\``,
                                inline: true
                            },
                            {
                                name: '💻 المتصفح والجهاز',
                                value: `\`${userAgent}\``,
                                inline: false
                            }
                        ],
                        footer: {
                            text: '5lo Photographer • Relax Theme'
                        },
                        timestamp: new Date().toISOString()
                    }
                ]
            };

            await fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(discordPayload)
            }).catch((error) => {
                console.warn(
                    '5lo Photographer visitor webhook failed:',
                    error?.message || error
                );
            });
        }

        return res.status(200).json({
            success: true
        });

    } catch (error) {
        console.error('5lo Photographer visitor logger error:', error);

        return res.status(200).json({
            success: true
        });
    }
}
