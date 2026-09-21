export default async function handler(req, res) {

    if (req.method !== 'POST') {
        return res.status(405).json({
            success: false,
            error: 'Method not allowed'
        });
    }

    try {
        const {
            name,
            packageType,
            carType,
            shootRegion,
            phone,
            bookingDay,
            notes
        } = req.body || {};

        const webhookUrl =
            process.env.bookingweb ||
            process.env.BOOKING_WEB;

        if (!webhookUrl) {
            console.error('5lo Photographer booking webhook is not configured.');
            return res.status(500).json({
                success: false,
                error: 'Server configuration error'
            });
        }

        const clean = (value, max = 1000) =>
            String(value ?? '')
                .replace(/[\u0000-\u001F\u007F]/g, ' ')
                .replace(/\s+/g, ' ')
                .trim()
                .slice(0, max);

        const bookingName = clean(name, 80) || 'غير محدد';
        const bookingPhone = clean(phone, 30) || 'غير محدد';
        const bookingPackage = clean(packageType, 120) || 'غير محدد';
        const bookingCar = clean(carType, 140) || 'غير محدد';
        const bookingRegion = clean(shootRegion, 80) || 'غير محدد';
        const bookingDayValue = clean(bookingDay, 40) || 'غير محدد';
        const bookingNotes = clean(notes, 1000) || 'لا توجد ملاحظات';

        const normalizedPhone = bookingPhone.replace(/\D/g, '');
        const whatsappNumber = normalizedPhone.startsWith('0')
            ? normalizedPhone.slice(1)
            : normalizedPhone;

        const whatsappUrl = /^5\d{8}$/.test(whatsappNumber)
            ? `https://wa.me/966${whatsappNumber}`
            : null;

        const discordPayload = {
            username: '5lo Photographer',
            embeds: [
                {
                    title: 'New Ordering',
                    description: 'تم استقبال طلب حجز جديد من الموقع.',
                    color: 3718648,
                    fields: [
                        {
                            name: '👤 الاسم',
                            value: bookingName,
                            inline: true
                        },
                        {
                            name: '📱 رقم التواصل',
                            value: bookingPhone,
                            inline: true
                        },
                        {
                            name: '📦 الباقة',
                            value: bookingPackage,
                            inline: true
                        },
                        {
                            name: '🚗 السيارة',
                            value: bookingCar,
                            inline: true
                        },
                        {
                            name: '📍 منطقة التصوير',
                            value: bookingRegion,
                            inline: true
                        },
                        {
                            name: '📅 يوم الحجز',
                            value: bookingDayValue,
                            inline: true
                        },
                        {
                            name: '💬 التفاصيل',
                            value: bookingNotes,
                            inline: false
                        },
                        ...(whatsappUrl
                            ? [{
                                name: '🟢 التواصل المباشر',
                                value: `[فتح محادثة واتساب](${whatsappUrl})`,
                                inline: false
                            }]
                            : [])
                    ],
                    footer: {
                        text: '5lo Photographer • Relax Theme'
                    },
                    timestamp: new Date().toISOString()
                }
            ]
        };

        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(discordPayload)
        });

        if (!response.ok) {
            const errorText = await response.text().catch(() => '');
            console.error(
                '5lo Photographer Discord booking error:',
                response.status,
                errorText
            );

            return res.status(502).json({
                success: false,
                error: 'Failed to send booking notification'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Booking notification sent'
        });

    } catch (error) {
        console.error('5lo Photographer booking handler error:', error);

        return res.status(500).json({
            success: false,
            error: 'Internal Server Error'
        });
    }
}
