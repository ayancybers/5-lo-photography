const SITE = Object.freeze({
  brand: "5lo Photography",
  logo: "assets/gallery/logo.jpeg",
  whatsapp: "966597561765",
  instagram: "5lo.63",
  tiktok: "xzlav.1",
  version: "15.25.0",
});

const translations = {
  "ar": {
    "nav_home": "الرئيسية",
    "nav_works": "المعرض",
    "nav_services": "الخدمات",
    "nav_packages": "الباقات والحجز",
    "nav_terms": "الشروط والأحكام",
    "menu_btn": "القائمة",
    "quick_booking": "حجز سريع",
    "dev_credit": "صُنع بواسطة",
    "social_whatsapp": "واتساب",
    "social_instagram": "انستقرام",
    "social_tiktok": "تيك توك",
    "announcement_text": "متاح للحجز الآن — الدمام / الخبر / القطيف",
    "theme_relax": "الوضع الهادئ",
    "theme_dark": "الوضع الداكن",
    "theme_light": "الوضع الفاتح",
    "hero_badge": "تصوير سيارات سينمائي — الدمام، الخبر، والقطيف",
    "hero_kicker": "5LO / AUTOMOTIVE VISUALS",
    "hero_title": 'خلِّ سيارتك <span class="accent-text">تتحرك</span> حتى وهي ثابتة.',
    "hero_desc": "رولينق، تصوير ثابت، وفيديو سينمائي بإحساس نظيف يركز على تفاصيل السيارة وحضورها.",
    "btn_start": "ابدأ الحجز",
    "btn_works": "شاهد الأعمال",
    "hero_meta_1": "رولينق",
    "hero_meta_2": "فيديو سينمائي",
    "hero_meta_3": "محتوى جاهز للنشر",
    "hero_side_label": "SIGNATURE LOOK",
    "hero_side_title": "صورة فيها حضور.",
    "hero_side_desc": "نعتمد على الحركة، الزوايا، والإيقاع البصري عشان تطلع سيارتك بشكل يليق فيها.",
    "hero_side_link": "اكتشف الخدمات ←",
    "scroll_down": "انزل",
    "studio_badge": "الاستوديو",
    "studio_t1": "مو مجرد صورة.",
    "studio_t2": "مشهد كامل.",
    "studio_desc": "كل لقطة تبدأ من شكل السيارة وتنتهي بمادة بصرية تقدر تعرضها، تنشرها، أو تحفظها.",
    "feature1_label": "ROLLING",
    "feature1_title": "حركة محسوبة.",
    "feature1_desc": "رولينق يبرز خطوط السيارة، الوقفة، والإحساس أثناء الحركة.",
    "feature2_label": "STATIC",
    "feature2_title": "تفاصيل أقرب.",
    "feature2_desc": "لقطات ثابتة تركز على التصميم، التفاصيل، واللمعة.",
    "feature3_label": "EDIT",
    "feature3_title": "إيقاع على ذوقك.",
    "feature3_desc": "مونتاج مرتب ومناسب للنشر على المنصات العمودية.",
    "feature4_label": "SOCIAL",
    "feature4_title": "جاهز للنشر.",
    "feature4_desc": "محتوى قصير بإيقاع سريع يناسب الريلز والقصص.",
    "selected_badge": "مختارات",
    "selected_t1": "لقطات",
    "selected_t2": "تتكلم.",
    "showcase_1": "Shooting Cinematic",
    "showcase_2": "Static Story",
    "showcase_3": "Detail Frame",
    "rail_hint": "اسحب يمين أو يسار لاستكشاف اللقطات",
    "view_all": "استعرض المعرض كامل",
    "process_badge": "طريقة العمل",
    "process_t1": "من الفكرة",
    "process_t2": "إلى التسليم.",
    "process_1_title": "اختيار الباقة",
    "process_1_desc": "حدد نوع التصوير والمحتوى الذي يناسبك.",
    "process_2_title": "تأكيد الموعد",
    "process_2_desc": "ترسل تفاصيل سيارتك وموقع التصوير واليوم المناسب.",
    "process_3_title": "التصوير",
    "process_3_desc": "تنفيذ الرولينق أو التصوير الثابت حسب الباقة.",
    "process_4_title": "التسليم",
    "process_4_desc": "تسليم الملفات أو النسخة المعدلة حسب الطلب.",
    "process_4_note": "لتسليم أسرع، حمّل تطبيق DJI Mimo.",
    "cta_label": "READY WHEN YOU ARE",
    "cta_title": "خلّنا نصنع لقطة تستاهل تنحفظ.",
    "cta_button": "احجز الآن",
    "gallery_badge": "الأعمال",
    "gallery_t1": "كل سيارة لها",
    "gallery_t2": "حكاية.",
    "gallery_desc": "رولينق، صور ثابتة، ومشاهد سينمائية من أعمال 5lo.",
    "filter_all": "الكل",
    "filter_videos": "فيديوهات",
    "filter_photos": "صور",
    "services_badge": "الخدمات",
    "services_t1": "من اللمعة الأولى",
    "services_t2": "إلى آخر فريم.",
    "services_desc": "اختر الخدمة التي تناسب حضور سيارتك والمحتوى الذي تبغى تطلع فيه.",
    "serv1_label": "AUTOMOTIVE",
    "serv1_title": "تصوير فوتوغرافي",
    "serv1_desc": "صور خارجية وداخلية، لقطات تفصيلية، وبورتريه للسيارة بإضاءة مرتبة.",
    "serv2_label": "CINEMATIC",
    "serv2_title": "فيديو سينمائي",
    "serv2_desc": "فيلم قصير يترجم شخصية السيارة إلى حركة، صوت، وإيقاع بصري.",
    "serv3_label": "SOCIAL",
    "serv3_title": "محتوى السوشال",
    "serv3_desc": "حزم عمودية سريعة الإيقاع جاهزة للنشر من الريلز إلى القصص.",
    "serv4_label": "EVENTS",
    "serv4_title": "تغطية الفعاليات",
    "serv4_desc": "توثيق تجمعك أو فعاليتك بكل تفاصيلها وحماسها.",
    "service_book": "احجز هذه الخدمة ←",
    "service_note_label": "NOTE",
    "service_note_title": "عندك فكرة خاصة؟",
    "service_note_desc": "أرسلها مع تفاصيل السيارة، ونحدد لك نوع التغطية المناسب.",
    "service_note_btn": "أرسل فكرتك",
    "packages_badge": "الباقات",
    "packages_t1": "باقات واضحة.",
    "packages_t2": "نتيجة لا تُنسى.",
    "packages_desc": "أسعار واضحة وخيارات تبدأ من الرولينق إلى الإنتاج السينمائي الكامل.",
    "pkg1_title": "رولينق / بدون مونتاج",
    "pkg1_desc": "تصوير رولينق فقط وتسليم المقاطع الأصلية.",
    "pkg1_f1": "✓ تصوير رولينق فقط",
    "pkg1_f2": "✓ تسليم الملفات الأصلية",
    "pkg2_ribbon": "الأكثر طلباً",
    "pkg3_ribbon": "الأكثر طلباً",
    "pkg2_title": "رولينق / مونتاج",
    "pkg2_desc": "تغطية متحركة بإيقاع احترافي وجاهزة للنشر.",
    "pkg2_f1": "✓ تصوير رولينق + 10 مقاطع",
    "pkg2_f2": "✓ مونتاج احترافي مع مؤثرات صوتية",
    "pkg2_f3": "✓ 3 صور بتعديل مميز",
    "pkg3_title": "رولينق / ثابتة",
    "pkg3_desc": "إبراز السيارة أثناء الحركة والسكون في جلسة واحدة.",
    "pkg3_f1": "✓ تصوير رولينق وثابتة",
    "pkg3_f2": "✓ مونتاج متكامل",
    "pkg3_f3": "✓ +5 صور معدلة باحترافية",
    "pkg4_title": "التصوير السينمائي",
    "pkg4_desc": "فكرة إبداعية متكاملة من الزاوية الأولى إلى الإخراج النهائي.",
    "pkg4_f1": "✓ تصوير سينمائي متكامل",
    "pkg4_f2": "✓ زوايا وأفكار خاصة",
    "pkg4_f3": "✓ مونتاج سينمائي عالي الجودة",
    "currency": "ر.س",
    "pkg_btn": "احجز الباقة",
    "contact_badge": "جاهز؟",
    "contact_t1": "خلّنا نثبت",
    "contact_t2": "موعدك.",
    "contact_desc":
      "أكمل البيانات، وسيرسل الخادم نسخة إلى ديسكورد ثم يفتح واتساب لإرسال تفاصيل الحجز.",
    "form_secure": "SECURE BOOKING",
    "form_name": "الاسم",
    "form_name_placeholder": "كيف نناديك؟",
    "form_phone": "رقم التواصل",
    "form_phone_placeholder": "05XXXXXXXX",
    "form_booking_day": "يوم الحجز",
    "booking_day_select": "اختر يوم الحجز",
    "booking_day_sunday": "الأحد",
    "booking_day_monday": "الاثنين",
    "booking_day_tuesday": "الثلاثاء",
    "booking_day_wednesday": "الأربعاء",
    "booking_day_thursday": "الخميس",
    "booking_day_friday": "الجمعة",
    "booking_day_saturday": "السبت",
    "form_city": "المدينة",
    "city_select": "اختر المدينة",
    "city_dammam": "الدمام",
    "city_khobar": "الخبر",
    "city_qatif": "القطيف",
    "city_jubail": "الجبيل",
    "form_vehicle_type": "نوع السيارة",
    "vehicle_select": "اختر نوع السيارة",
    "vehicle_sedan": "سيدان",
    "vehicle_suv": "دفع رباعي",
    "vehicle_luxury": "سيارة فاخرة",
    "vehicle_sports": "سيارة رياضية",
    "vehicle_coupe": "كوبيه",
    "vehicle_pickup": "بيك أب",
    "vehicle_classic": "كلاسيكية",
    "vehicle_other": "أخرى",
    "form_vehicle_model": "الماركة والموديل",
    "vehicle_model_placeholder": "مثال: Ford Mustang 2024",
    "form_pkg": "الباقة",
    "form_select": "اختر الباقة المناسبة",
    "pkg_option_1": "رولينق بدون مونتاج (100 ر.س)",
    "pkg2_off": "خصم 20٪",
    "pkg_option_2": "رولينق + مونتاج (120 ر.س، بدل 150)",
    "pkg_option_3": "رولينق + ثابتة (250 ر.س)",
    "pkg_option_4": "التصوير السينمائي (450 ر.س)",
    "form_details": "تفاصيل إضافية",
    "form_details_placeholder": "نوع السيارة، الفكرة، أو أي ملاحظة...",
    "form_submit": "إرسال طلب الحجز ←",
    "form_note": "يرسل الخادم تفاصيل الحجز إلى ديسكورد، ويفتح واتساب برسالة جاهزة للإرسال.",
    "footer_loc": "الدمام / الخبر / القطيف",
    "footer_top": "العودة للأعلى ↑",
    "booking_sending": "جاري الإرسال…",
    "booking_success": "تم تجهيز طلبك وفتح واتساب لإرساله.",
    "booking_error": "تعذر إرسال الطلب الآن. افتح واتساب مباشرة وحاول مرة أخرى.",
    "booking_wait": "انتظر لحظات قبل الإرسال مرة أخرى.",
    "booking_invalid": "تأكد من صحة البيانات المدخلة.",
    "booking_duplicate": "تم إرسال نفس الطلب مسبقاً. حاول لاحقاً بطلب جديد.",
  },
  "en": {
    "nav_home": "Home",
    "nav_works": "Gallery",
    "nav_services": "Services",
    "nav_packages": "Packages & Booking",
    "nav_terms": "Terms & Conditions",
    "menu_btn": "Menu",
    "quick_booking": "Quick Booking",
    "dev_credit": "Built by",
    "social_whatsapp": "WhatsApp",
    "social_instagram": "Instagram",
    "social_tiktok": "TikTok",
    "announcement_text": "Now booking — Dammam / Khobar / Qatif",
    "theme_relax": "Relax",
    "theme_dark": "Dark",
    "theme_light": "Light",
    "hero_badge": "Cinematic automotive photography — Dammam, Khobar & Qatif",
    "hero_kicker": "5LO / AUTOMOTIVE VISUALS",
    "hero_title": 'Make your car <span class="accent-text">move</span> while staying still.',
    "hero_desc":
      "Rolling, static photography and cinematic video with a clean visual language built around your car.",
    "btn_start": "Start booking",
    "btn_works": "View gallery",
    "hero_meta_1": "Rolling",
    "hero_meta_2": "Cinematic video",
    "hero_meta_3": "Social-ready",
    "hero_side_label": "SIGNATURE LOOK",
    "hero_side_title": "A frame with presence.",
    "hero_side_desc":
      "We use movement, angles and visual rhythm to bring out the character of your car.",
    "hero_side_link": "Explore services →",
    "scroll_down": "SCROLL",
    "studio_badge": "THE STUDIO",
    "studio_t1": "More than a photo.",
    "studio_t2": "A full scene.",
    "studio_desc":
      "Every frame starts with the car and ends as visual material you can show, post or keep.",
    "feature1_label": "ROLLING",
    "feature1_title": "Controlled motion.",
    "feature1_desc":
      "Rolling shots that highlight the lines, stance and feel of the car in motion.",
    "feature2_label": "STATIC",
    "feature2_title": "Closer details.",
    "feature2_desc": "Static frames focused on design, details and finish.",
    "feature3_label": "EDIT",
    "feature3_title": "Your rhythm.",
    "feature3_desc": "Clean edits shaped for vertical social content.",
    "feature4_label": "SOCIAL",
    "feature4_title": "Ready to post.",
    "feature4_desc": "Short-form content built for reels and stories.",
    "selected_badge": "SELECTED",
    "selected_t1": "Frames",
    "selected_t2": "that speak.",
    "showcase_1": "Shooting Cinematic",
    "showcase_2": "Static Story",
    "showcase_3": "Detail Frame",
    "rail_hint": "Drag left or right to explore the frames",
    "view_all": "View full gallery",
    "process_badge": "PROCESS",
    "process_t1": "From idea",
    "process_t2": "to delivery.",
    "process_1_title": "Choose a package",
    "process_1_desc": "Pick the shooting and content format that fits.",
    "process_2_title": "Confirm the date",
    "process_2_desc": "Send your car details, location and preferred day.",
    "process_3_title": "Shoot",
    "process_3_desc": "Rolling or static coverage based on your package.",
    "process_4_title": "Delivery",
    "process_4_desc": "Receive originals or edited media as requested.",
    "process_4_note": "For faster delivery, install DJI Mimo.",
    "cta_label": "READY WHEN YOU ARE",
    "cta_title": "Let’s create a frame worth keeping.",
    "cta_button": "Book now",
    "gallery_badge": "WORKS",
    "gallery_t1": "Every car has",
    "gallery_t2": "a story.",
    "gallery_desc": "Rolling shots, static frames and cinematic scenes from 5lo.",
    "filter_all": "All",
    "filter_videos": "Videos",
    "filter_photos": "Photos",
    "services_badge": "SERVICES",
    "services_t1": "From the first gloss",
    "services_t2": "to the final frame.",
    "services_desc": "Choose the service that fits your car and the content you want to create.",
    "serv1_label": "AUTOMOTIVE",
    "serv1_title": "Photography",
    "serv1_desc": "Exterior, interior and detail photography with a clean visual setup.",
    "serv2_label": "CINEMATIC",
    "serv2_title": "Cinematic video",
    "serv2_desc": "A short film translating your car into motion, sound and visual rhythm.",
    "serv3_label": "SOCIAL",
    "serv3_title": "Social content",
    "serv3_desc": "Fast vertical packages ready for reels and stories.",
    "serv4_label": "EVENTS",
    "serv4_title": "Event coverage",
    "serv4_desc": "Documenting your gathering or event with its details and energy.",
    "service_book": "Book this service →",
    "service_note_label": "NOTE",
    "service_note_title": "Have a custom idea?",
    "service_note_desc": "Send it with your car details and we’ll shape the right coverage.",
    "service_note_btn": "Send your idea",
    "packages_badge": "PACKAGES",
    "packages_t1": "Clear packages.",
    "packages_t2": "Memorable results.",
    "packages_desc": "Straightforward options from rolling shots to full cinematic production.",
    "pkg1_title": "Rolling / No Edit",
    "pkg1_desc": "Rolling capture with the original clips delivered.",
    "pkg1_f1": "✓ Rolling shots only",
    "pkg1_f2": "✓ Original files delivery",
    "pkg2_ribbon": "MOST REQUESTED",
    "pkg3_ribbon": "MOST REQUESTED",
    "pkg2_title": "Rolling / Edit",
    "pkg2_desc": "Dynamic rolling coverage, edited and ready to publish.",
    "pkg2_f1": "✓ Rolling shots + 10 clips",
    "pkg2_f2": "✓ Pro edit with sound effects",
    "pkg2_f3": "✓ 3 custom-edited photos",
    "pkg3_title": "Rolling / Static",
    "pkg3_desc": "Highlighting the car in motion and stillness in one session.",
    "pkg3_f1": "✓ Rolling & static shots",
    "pkg3_f2": "✓ Complete edit",
    "pkg3_f3": "✓ +5 professionally edited photos",
    "pkg4_title": "Cinematic Production",
    "pkg4_desc": "A complete creative concept from the first angle to final direction.",
    "pkg4_f1": "✓ Full cinematic coverage",
    "pkg4_f2": "✓ Special angles & concepts",
    "pkg4_f3": "✓ High-quality cinematic edit",
    "currency": "SAR",
    "pkg_btn": "Book package",
    "contact_badge": "READY?",
    "contact_t1": "Let’s lock",
    "contact_t2": "your date.",
    "contact_desc":
      "Complete the steps. The server sends a Discord notification and WhatsApp opens with your booking details.",
    "form_secure": "SECURE BOOKING",
    "form_name": "Name",
    "form_name_placeholder": "What should we call you?",
    "form_phone": "Phone Number",
    "form_phone_placeholder": "05XXXXXXXX",
    "form_booking_day": "Booking Day",
    "booking_day_select": "Select a day",
    "booking_day_sunday": "Sunday",
    "booking_day_monday": "Monday",
    "booking_day_tuesday": "Tuesday",
    "booking_day_wednesday": "Wednesday",
    "booking_day_thursday": "Thursday",
    "booking_day_friday": "Friday",
    "booking_day_saturday": "Saturday",
    "form_city": "City",
    "city_select": "Select a city",
    "city_dammam": "Dammam",
    "city_khobar": "Khobar",
    "city_qatif": "Qatif",
    "city_jubail": "Jubail",
    "form_vehicle_type": "Vehicle Type",
    "vehicle_select": "Select a vehicle type",
    "vehicle_sedan": "Sedan",
    "vehicle_suv": "SUV",
    "vehicle_luxury": "Luxury",
    "vehicle_sports": "Sports Car",
    "vehicle_coupe": "Coupe",
    "vehicle_pickup": "Pickup",
    "vehicle_classic": "Classic",
    "vehicle_other": "Other",
    "form_vehicle_model": "Make & Model",
    "vehicle_model_placeholder": "Example: Ford Mustang 2024",
    "form_pkg": "Package",
    "form_select": "Choose a package",
    "pkg_option_1": "Rolling / No Edit (100 SAR)",
    "pkg2_off": "20% OFF",
    "pkg_option_2": "Rolling / Edit (120 SAR, was 150)",
    "pkg_option_3": "Rolling / Static (250 SAR)",
    "pkg_option_4": "Cinematic Production (450 SAR)",
    "form_details": "Additional Details",
    "form_details_placeholder": "Car, concept or notes…",
    "form_submit": "Send booking request →",
    "form_note":
      "The server sends a Discord notification, and WhatsApp opens with a ready-to-send booking message.",
    "footer_loc": "Dammam / Khobar / Qatif",
    "footer_top": "Back to top ↑",
    "booking_sending": "Sending…",
    "booking_success": "Your request is ready. WhatsApp opened so you can send it.",
    "booking_error": "Could not send the request. Open WhatsApp directly and try again.",
    "booking_wait": "Please wait a moment before sending again.",
    "booking_invalid": "Please check the entered information.",
    "booking_duplicate": "The same request was already sent. Try again later.",
  },
};

Object.assign(translations.ar, {
  hero_v4_overline: "5LO / AUTOMOTIVE VISUAL STUDIO",
  hero_v4_kicker: "حركة · تفاصيل · حضور",
  hero_v4_title: 'سيارتك تستاهل<br><span class="accent-text">أكثر من صورة.</span>',
  hero_v4_desc:
    "نصوّر الرولينق، الثابت، والفيديو السينمائي بأسلوب نظيف يخلي حضور السيارة واضح من أول فريم.",
  hero_v4_cta: "ابدأ الحجز",
  hero_v4_gallery: "شوف الأعمال",
  hero_v4_proof1: "رولينق",
  hero_v4_proof2: "تصوير ثابت",
  hero_v4_proof3: "فيديو سينمائي",
  hero_v4_proof4: "محتوى جاهز للنشر",
  hero_v4_side_label: "THE 5LO SIGNATURE",
  hero_v4_side_title: "زاوية. حركة. حضور.",
  hero_v4_side_desc: "نركز على الخطوط، الوقفة، والضوء — ثم نحولها إلى صورة أو فيديو له شخصية.",
  hero_v4_side_link: "اكتشف الأسلوب ↗",
  studio_v4_title: 'مو مجرد تصوير.<br><span class="accent-text">هذا أسلوب.</span>',
  studio_v4_desc:
    "من الطريق إلى الجراج، ومن اللقطة السريعة إلى الفيلم — كل تفصيلة محسوبة عشان تطلع سيارتك بالشكل اللي تستحقه.",
  studio_feature_label: "VISUAL LANGUAGE",
  studio_feature_title: "لقطة لها حضور.",
  studio_feature_desc: "ألوان موزونة، إضاءة نظيفة، وزوايا تخلي العين تروح للسيارة مباشرة.",
  studio_feature_link: "شاهد النتيجة ↗",
  cta_v4_desc: "ابدأ بطلب الحجز، واحنا نرتب معك التفاصيل.",
  footer_terms: "الشروط والأحكام",
  terms_required: "يرجى الموافقة على الشروط والأحكام قبل إرسال الطلب.",
  terms_consent_start: "أوافق على",
  terms_consent_end: "وأفهم سياسة المحتوى الرقمي والاسترداد.",
  terms_digital_short:
    "الملفات الرقمية المخصصة لا تُسترد بعد التسليم أو إتاحة التنزيل، مع حفظ الحقوق النظامية.",
  terms_kicker: "5LO / شروط العميل",
  terms_title: "الشروط والأحكام",
  terms_intro: "يرجى مراجعة الشروط المتعلقة بطلب التصوير وتسليم الملفات الرقمية قبل تأكيد الحجز.",
  terms_updated: "آخر تحديث: 5 أكتوبر 2026",
  terms_scope_title: "1. نطاق الخدمة",
  terms_scope:
    "تقدم 5lo Photography خدمات تصوير السيارات وإنتاج الصور ومقاطع الفيديو الرقمية بحسب الباقة المختارة. يوضح وصف الباقة والسعر وموعد وطريقة التسليم للعميل قبل تأكيد الطلب.",
  terms_booking_title: "2. طلب الحجز والتأكيد",
  terms_booking:
    "إرسال نموذج الموقع هو طلب مبدئي ولا يثبت الموعد وحده. يصبح الحجز مؤكداً بعد تواصل 5lo وتأكيد الموعد والباقة والسعر كتابةً عبر واتساب أو وسيلة التواصل المتفق عليها. يراجع العميل تفاصيل الطلب قبل تأكيده.",
  terms_digital_title: "3. الملفات الرقمية والاسترداد",
  terms_digital:
    "الصور ومقاطع الفيديو المعدة خصيصاً للعميل منتجات رقمية مخصصة. بعد تسليم الملفات أو إتاحة رابط تنزيلها، لا يمكن إرجاع النسخ الرقمية ولا يُسترد ثمن المحتوى الذي تم تسليمه لمجرد تغيير الرأي. لا ينتقص ذلك من الحقوق النظامية عند وجود عيب جوهري أو عدم مطابقة أو حالة يوجب فيها النظام الاسترداد.",
  terms_cancel_title: "4. إلغاء الخدمة وحقوق الاسترداد",
  terms_cancel:
    "طلبات إلغاء جلسة التصوير أو استرداد قيمتها قبل الاستفادة من الخدمة تخضع للأنظمة المعمول بها في المملكة. يقرر نظام التجارة الإلكترونية حق المستهلك في استرداد قيمة الخدمة خلال 7 أيام من التعاقد إذا لم ينتفع بها، كما يجيز إلغاء العقد واسترداد المبلغ عند تأخر التنفيذ لأكثر من 15 يوماً من تاريخ العقد أو الموعد المتفق عليه، ما لم يكن التأخير بسبب قوة قاهرة؛ وتطبق الاستثناءات النظامية. يرجى التواصل معنا فوراً لبحث طلب الإلغاء أو إعادة الجدولة.",
  terms_delivery_title: "5. التسليم ومراجعة الطلب",
  terms_delivery:
    "يتم التسليم رقمياً عبر الوسيلة والمدة الموضحتين عند تأكيد الحجز. على العميل مراجعة الباقة وتفاصيل السيارة ومعلومات التواصل قبل التأكيد، وإبلاغنا سريعاً عند وجود مشكلة في الملفات المستلمة.",
  terms_client_title: "6. مسؤولية العميل",
  terms_client:
    "يؤكد العميل صحة معلوماته، وأن لديه الإذن اللازم لتصوير السيارة والموقع المحدد. قد يؤثر تأخر العميل أو عدم جاهزية السيارة على تنفيذ الموعد، لذا يرجى التواصل معنا بأسرع وقت لترتيب أي تغيير.",

    terms_law_title: "7. الأنظمة المعمول بها",
  terms_law:
    "تفسر هذه الشروط وتطبق بما يتوافق مع الأنظمة المعمول بها في المملكة العربية السعودية. أي حق إلزامي للمستهلك بموجب النظام يبقى محفوظاً.",
  terms_contact_title: "عندك استفسار عن الشروط؟",
  terms_contact_desc: "تواصل معنا قبل تأكيد الحجز ونوضح لك التفاصيل.",
  terms_contact_button: "تواصل عبر واتساب ↗",
});
Object.assign(translations.en, {
  hero_v4_overline: "5LO / AUTOMOTIVE VISUAL STUDIO",
  hero_v4_kicker: "MOVEMENT · DETAIL · PRESENCE",
  hero_v4_title: 'Your car deserves<br><span class="accent-text">more than a photo.</span>',
  hero_v4_desc:
    "Rolling, static and cinematic car content built with a clean visual language that keeps the car in focus.",
  hero_v4_cta: "Start booking",
  hero_v4_gallery: "View gallery",
  hero_v4_proof1: "Rolling",
  hero_v4_proof2: "Static",
  hero_v4_proof3: "Cinematic film",
  hero_v4_proof4: "Social-ready",
  hero_v4_side_label: "THE 5LO SIGNATURE",
  hero_v4_side_title: "Angle. Motion. Presence.",
  hero_v4_side_desc:
    "We shape lines, stance and light into a frame or film with its own character.",
  hero_v4_side_link: "Explore the style ↗",
  studio_v4_title: 'More than a shoot.<br><span class="accent-text">A signature.</span>',
  studio_v4_desc:
    "From the road to the garage, from a fast frame to a full film — every detail is shaped around the car.",
  studio_feature_label: "VISUAL LANGUAGE",
  studio_feature_title: "A frame with presence.",
  studio_feature_desc: "Balanced color, clean light and angles that keep the eye on the car.",
  studio_feature_link: "See the result ↗",
  cta_v4_desc: "Start the booking request and we’ll shape the details with you.",
  footer_terms: "Terms & Conditions",
  terms_required: "Please accept the terms and conditions before sending your request.",
  terms_consent_start: "I agree to the",
  terms_consent_end: "and understand the digital-content and refund policy.",
  terms_digital_short:
    "Custom digital files are non-refundable after delivery or download access, subject to statutory rights.",
  terms_kicker: "5LO / CLIENT TERMS",
  terms_title: "Terms & Conditions",
  terms_intro:
    "Please review the terms for photography bookings and digital file delivery before confirming your booking.",
  terms_updated: "Last updated: October 5, 2026",
  terms_scope_title: "1. Services",
  terms_scope:
    "5lo Photography provides automotive photography and digital photo and video production according to the selected package. The package, price, delivery timing and delivery method are shared before the booking is confirmed.",
  terms_booking_title: "2. Booking requests and confirmation",
  terms_booking:
    "Submitting the website form is an initial request and does not reserve a date by itself. A booking is confirmed only after 5lo contacts you and confirms the date, package and price in writing through WhatsApp or another agreed contact method. Please review the request details before confirmation.",
  terms_digital_title: "3. Digital files and refunds",
  terms_digital:
    "Photos and videos created specifically for a client are customized digital deliverables. Once the files are delivered or a download link is made available, digital copies cannot be returned and payment for delivered content is not refundable merely because of a change of mind. This does not limit statutory rights for a material defect, non-conformity or any case where a refund is required by law.",
  terms_cancel_title: "4. Service cancellation and refund rights",
  terms_cancel:
    "Requests to cancel a photography session or receive a refund before using the service are handled under the laws in force in Saudi Arabia. The E-Commerce Law provides a right to recover the service price within 7 days of contracting if the service has not been used. It also allows cancellation and a refund if performance is delayed by more than 15 days from the contract date or agreed date, unless the delay is caused by force majeure. Statutory exceptions apply. Contact us promptly to discuss cancellation or rescheduling.",
  terms_delivery_title: "5. Delivery and order review",
  terms_delivery:
    "Files are delivered digitally through the method and timeline stated when the booking is confirmed. Please review your selected package, vehicle details and contact information before confirmation, and contact us promptly if there is an issue with delivered files.",
  terms_client_title: "6. Client responsibilities",
  terms_client:
    "The client confirms that the submitted information is accurate and that they have permission for the vehicle and location to be photographed. Delays or an unavailable vehicle may affect the session, so please contact us promptly to arrange any changes.",
  terms_law_title: "7. Governing law",
  terms_law:
    "These terms are interpreted and applied in accordance with the laws in force in the Kingdom of Saudi Arabia. Any mandatory consumer rights provided by law remain unaffected.",
  terms_contact_title: "Questions about these terms?",
  terms_contact_desc: "Contact us before confirming a booking and we’ll clarify the details.",
  terms_contact_button: "Contact us on WhatsApp ↗",
});
Object.assign(translations.ar, {
  booking_discord_error:
    "تم فتح واتساب، لكن تعذر إرسال نسخة ديسكورد. أعد المحاولة أو تواصل معنا مباشرة.",
  wizard_step_1: "الخطوة 1 من 3 · اختر الباقة",
  wizard_step_2: "الخطوة 2 من 3 · بياناتك وسيارتك",
  wizard_step_3: "الخطوة 3 من 3 · اختر التاريخ",
  wizard_package_title: "اختر تجربة التصوير",
  wizard_package_desc: "حدد الباقة المناسبة لك، وتقدر تغيّر اختيارك قبل الإرسال.",
  wizard_details_title: "بياناتك والسيارة",
  wizard_details_desc: "اكتب بيانات التواصل ومعلومات السيارة وموقع التصوير.",
  wizard_date_title: "اختر التاريخ المناسب",
  wizard_date_desc: "حدد اليوم الذي يناسبك. بنتواصل معك لتأكيد الموعد.",
  wizard_hint: "الخطوة التالية: بيانات التواصل والسيارة",
  wizard_next: "التالي",
  wizard_back: "السابق",
  wizard_date_required: "اختر تاريخاً للمتابعة.",
  wizard_confirm_note: "التاريخ طلب مبدئي ويُعتمد بعد تأكيدنا عبر التواصل.",
  optional_label: "اختياري",
});
Object.assign(translations.en, {
  booking_discord_error:
    "WhatsApp opened, but the Discord notification could not be sent. Please retry or contact us directly.",
  wizard_step_1: "Step 1 of 3 · Choose a package",
  wizard_step_2: "Step 2 of 3 · Your details and car",
  wizard_step_3: "Step 3 of 3 · Choose a date",
  wizard_package_title: "Choose your shoot",
  wizard_package_desc: "Select the package that suits you. You can change it before sending.",
  wizard_details_title: "Your details and vehicle",
  wizard_details_desc: "Add your contact details, vehicle information and shoot location.",
  wizard_date_title: "Choose a date",
  wizard_date_desc: "Pick a date that works for you. We will contact you to confirm the booking.",
  wizard_hint: "Next: your contact and vehicle details",
  wizard_next: "Continue",
  wizard_back: "Back",
  wizard_date_required: "Choose a date to continue.",
  wizard_confirm_note: "Your selected date is a request and will be confirmed by our team.",
  optional_label: "Optional",
});
const PACKAGE_VALUES = {
  rolling_no_edit: {
    ar: "رولينق بدون مونتاج (100 ر.س)",
    en: "Rolling without editing (100 SAR)",
  },
  rolling_edit: {
    ar: "رولينق + مونتاج (120 ر.س، بدل 150)",
    en: "Rolling + Editing (120 SAR, was 150)",
  },
  rolling_static: {
    ar: "رولينق + ثابتة (250 ر.س)",
    en: "Rolling + Static (250 SAR)",
  },
  cinematic: {
    ar: "التصوير السينمائي (450 ر.س)",
    en: "Cinematic Production (450 SAR)",
  },
};
let currentLang = localStorage.getItem("site_lang_v2") === "ar" ? "ar" : "en";
let savedTheme = localStorage.getItem("site_theme_v2");
let currentTheme = ["relax", "dark", "light"].includes(savedTheme) ? savedTheme : "dark";
function buildHeader() {
  const nav = [
    ["/", "nav_home", "link-index"],
    ["/gallery", "nav_works", "link-works"],
    ["/services", "nav_services", "link-services"],
    ["/packages", "nav_packages", "link-packages"],
    ["/terms", "nav_terms", "link-terms"],
  ];
  const langLabel = currentLang === "ar" ? "AR" : "EN";
  document.getElementById("site-header").innerHTML = `
    <header class="site-header">
      <div class="container nav-container">
        <a href="/" class="brand" aria-label="5lo Photography">
          <img class="brand-logo-image" src="${SITE.logo}" alt="5lo Photography" decoding="async">
          <span class="brand-copy"><strong>5lo</strong><em>Photography</em></span>
        </a>
        <nav class="nav-links" aria-label="Primary">
          ${
    nav.map(([href, key, id]) =>
      `<a href="${href}" id="${id}" data-i18n="${key}">${translations[currentLang][key]}</a>`
    ).join("")
  }
        </nav>
        <div class="nav-tools">
          <a href="/packages#contact" class="quick-book btn-main" data-i18n="quick_booking">${
    translations[currentLang].quick_booking
  }</a>
          <div class="dropdown-wrap lang-dropdown-wrap">
            <button type="button" class="nav-icon-btn dropdown-trigger" data-dropdown="langDropdown" aria-expanded="false" aria-haspopup="menu">
              <span class="dropdown-selected"><span class="dropdown-code" id="currentLangLabel">${langLabel}</span></span>
              <span class="chevron-icon" aria-hidden="true"></span>
            </button>
            <div class="dropdown-menu" id="langDropdown" role="menu">
              <button type="button" class="dropdown-item" data-lang="ar" role="menuitem"><span class="dropdown-mark">AR</span><span>العربية</span></button>
              <button type="button" class="dropdown-item" data-lang="en" role="menuitem"><span class="dropdown-mark">EN</span><span>English</span></button>
            </div>
          </div>
          <div class="dropdown-wrap">
            <button type="button" class="nav-icon-btn theme-trigger dropdown-trigger" data-dropdown="themeDropdown" aria-expanded="false" aria-haspopup="menu">
              <span class="dropdown-selected"><span class="theme-dot" aria-hidden="true"></span><span id="currentThemeLabel"></span></span>
              <span class="chevron-icon" aria-hidden="true"></span>
            </button>
            <div class="dropdown-menu theme-menu" id="themeDropdown" role="menu">
              <button type="button" class="dropdown-item" data-theme-choice="relax" role="menuitem"><span class="theme-choice-dot theme-relax-dot"></span><span data-i18n="theme_relax">${
    translations[currentLang].theme_relax
  }</span></button>
              <button type="button" class="dropdown-item" data-theme-choice="dark" role="menuitem"><span class="theme-choice-dot theme-dark-dot"></span><span data-i18n="theme_dark">${
    translations[currentLang].theme_dark
  }</span></button>
              <button type="button" class="dropdown-item" data-theme-choice="light" role="menuitem"><span class="theme-choice-dot theme-light-dot"></span><span data-i18n="theme_light">${
    translations[currentLang].theme_light
  }</span></button>
            </div>
          </div>
          <button type="button" class="menu-trigger" id="menuTrigger" aria-expanded="false" aria-controls="fullscreenMenu">
            <span class="menu-icon" aria-hidden="true"><i></i><i></i><i></i></span>
            <span class="menu-word" data-i18n="menu_btn">${
    translations[currentLang].menu_btn
  }</span>
          </button>
        </div>
      </div>
    </header>
    <div class="fullscreen-menu" id="fullscreenMenu" aria-hidden="true">
      <div class="fullscreen-inner">
        <div class="fullscreen-top"><span class="mini-label">${SITE.brand.toUpperCase()}</span><button type="button" class="close-menu" id="closeMenu" aria-label="Close menu">×</button></div>
        <a href="/" data-i18n="nav_home">${translations[currentLang].nav_home}</a>
        <a href="/gallery" data-i18n="nav_works">${translations[currentLang].nav_works}</a>
        <a href="/services" data-i18n="nav_services">${translations[currentLang].nav_services}</a>
        <a href="/packages" data-i18n="nav_packages">${translations[currentLang].nav_packages}</a>
        <a href="/terms" data-i18n="nav_terms">${translations[currentLang].nav_terms}</a>
      </div>
    </div>`;
  const page = location.pathname.replace(/\/+$/, "") || "/";
  document.querySelectorAll(".nav-links a").forEach((a) => {
    if (a.getAttribute("href").split("#")[0] === page) a.classList.add("active");
  });
  updateThemeLabel();
}

function buildFooter() {
  document.getElementById("site-footer").innerHTML =
    `<footer class="site-footer"><div class="container footer-grid"><div><div class="brand footer-brand"><span class="brand-copy"><strong>5lo</strong><em>Photography</em></span></div></div><div class="footer-actions"><span data-i18n="footer_loc">${
      translations[currentLang].footer_loc
    }</span><a href="/terms" data-i18n="footer_terms">${
      translations[currentLang].footer_terms
    }</a><a href="#top" data-i18n="footer_top">${
      translations[currentLang].footer_top
    }</a></div></div><div class="container footer-bottom"><a class="dev-credit" href="https://ayancybers.store/info" target="_blank" rel="noopener noreferrer" aria-label="Ayan Developer — ${
      translations[currentLang].dev_credit
    }"><span class="dev-credit-label" data-i18n="dev_credit">${
      translations[currentLang].dev_credit
    }</span><span class="dev-credit-name">Ayan Developer</span><span class="dev-credit-icon" aria-hidden="true">&lt;/&gt;</span><span class="dev-credit-arrow" aria-hidden="true">↗</span></a></div></footer><div class="social-float" id="socialFloat"><div class="social-menu" id="socialMenu" aria-hidden="true"><a href="https://wa.me/${SITE.whatsapp}?text=${
      encodeURIComponent("مرحباً، أود الاستفسار عن خدمات 5lo Photography")
    }" target="_blank" rel="noopener noreferrer"><span class="social-icon icon-whatsapp" aria-hidden="true"></span><span data-i18n="social_whatsapp">${
      translations[currentLang].social_whatsapp
    }</span></a><a href="https://instagram.com/${SITE.instagram}" target="_blank" rel="noopener noreferrer"><span class="social-icon icon-instagram" aria-hidden="true"></span><span data-i18n="social_instagram">${
      translations[currentLang].social_instagram
    }</span></a><a href="https://www.tiktok.com/@${SITE.tiktok}" target="_blank" rel="noopener noreferrer"><span class="social-icon icon-tiktok" aria-hidden="true"></span><span data-i18n="social_tiktok">${
      translations[currentLang].social_tiktok
    }</span></a></div><button type="button" class="social-toggle" id="socialToggle" aria-expanded="false" aria-label="Social"><span class="social-chat-icon" aria-hidden="true"></span></button></div>`;
}
function applyThemeMeta() {
  const colors = { relax: "#28363d", dark: "#15191b", light: "#f2f4f3" };
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", colors[currentTheme] || colors.relax);
}
function setTheme(theme) {
  if (!["relax", "dark", "light"].includes(theme)) theme = "relax";
  currentTheme = theme;
  localStorage.setItem("site_theme_v2", theme);
  document.documentElement.dataset.theme = theme;
  applyThemeMeta();
  updateThemeLabel();
  closeDropdowns();
}
function updateThemeLabel() {
  const el = document.getElementById("currentThemeLabel");
  if (el) {
    el.textContent = translations[currentLang][`theme_${currentTheme}`] ||
      translations[currentLang].theme_relax;
  }
  syncDropdownState();
}
function syncDropdownState() {
  document.querySelectorAll("[data-theme-choice]").forEach((item) =>
    item.classList.toggle("selected", item.dataset.themeChoice === currentTheme)
  );
  document.querySelectorAll("[data-lang]").forEach((item) =>
    item.classList.toggle("selected", item.dataset.lang === currentLang)
  );
}
function changeLanguage(lang) {
  currentLang = lang === "en" ? "en" : "ar";
  localStorage.setItem("site_lang_v2", currentLang);
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
  document.documentElement.classList.toggle("lang-en", currentLang === "en");
  document.documentElement.classList.toggle("lang-ar", currentLang === "ar");
  if (document.body.classList.contains("page-terms")) {
    document.title = `${translations[currentLang].terms_title} | 5lo Photography`;
  }
  applyTranslations();
  const l = document.getElementById("currentLangLabel");
  if (l) l.textContent = currentLang === "ar" ? "AR" : "EN";
  const a = document.querySelector(".announcement-bar span");
  if (a) a.textContent = translations[currentLang].announcement_text;
  updateThemeLabel();
  closeDropdowns();
}
function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const v = translations[currentLang][el.dataset.i18n];
    if (v != null) el.innerHTML = v;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const v = translations[currentLang][el.dataset.i18nPlaceholder];
    if (v != null) el.placeholder = v;
  });
  renderBookingDates();
}
function closeDropdowns() {
  document.querySelectorAll(".dropdown-menu.active").forEach((x) => x.classList.remove("active"));
  document.querySelectorAll('[data-dropdown][aria-expanded="true"]').forEach((x) =>
    x.setAttribute("aria-expanded", "false")
  );
}
function initWorkRail() {
  const rail = document.querySelector(".v15-work-feature");
  if (!rail) return;
  let startX = 0, startScroll = 0, dragged = false;
  rail.addEventListener("pointerdown", (e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    startX = e.clientX;
    startScroll = rail.scrollLeft;
    dragged = false;
    rail.classList.add("is-dragging");
    rail.setPointerCapture?.(e.pointerId);
  });
  rail.addEventListener("pointermove", (e) => {
    if (!rail.classList.contains("is-dragging")) return;
    const delta = e.clientX - startX;
    if (Math.abs(delta) > 6) dragged = true;
    const sign = document.documentElement.dir === "rtl" ? 1 : -1;
    rail.scrollLeft = startScroll - (delta * sign);
    if (dragged) e.preventDefault();
  });
  const end = (e) => {
    rail.classList.remove("is-dragging");
    if (e.pointerId != null && rail.hasPointerCapture?.(e.pointerId)) {
      rail.releasePointerCapture(e.pointerId);
    }
  };
  rail.addEventListener("pointerup", end);
  rail.addEventListener("pointercancel", end);
  rail.addEventListener("click", (e) => {
    if (dragged) {
      e.preventDefault();
      e.stopPropagation();
      dragged = false;
    }
  }, true);
}
function initChrome() {
  initWorkRail();
  document.querySelectorAll("[data-dropdown]").forEach((btn) =>
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const menu = document.getElementById(btn.dataset.dropdown);
      if (!menu) return;
      const active = menu.classList.contains("active");
      closeDropdowns();
      if (!active) {
        menu.classList.add("active");
        btn.setAttribute("aria-expanded", "true");
      }
    })
  );
  document.querySelectorAll("[data-lang]").forEach((btn) =>
    btn.addEventListener("click", () => changeLanguage(btn.dataset.lang))
  );
  document.querySelectorAll("[data-theme-choice]").forEach((btn) =>
    btn.addEventListener("click", () => setTheme(btn.dataset.themeChoice))
  );
  document.getElementById("menuTrigger")?.addEventListener("click", () => toggleMenu());
  document.getElementById("closeMenu")?.addEventListener("click", () => toggleMenu(false));
  document.querySelectorAll("#fullscreenMenu a").forEach((a) =>
    a.addEventListener("click", () => toggleMenu(false))
  );
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown-wrap")) closeDropdowns();
    if (!e.target.closest("#socialFloat")) closeSocialMenu();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeDropdowns();
      toggleMenu(false);
      closeSocialMenu();
    }
  });
}
function toggleMenu(open) {
  const menu = document.getElementById("fullscreenMenu");
  if (!menu) return;
  const next = typeof open === "boolean" ? open : !menu.classList.contains("active");
  menu.classList.toggle("active", next);
  menu.setAttribute("aria-hidden", String(!next));
  document.getElementById("menuTrigger")?.setAttribute("aria-expanded", String(next));
  document.body.classList.toggle("menu-open", next);
}
function closeSocialMenu() {
  const w = document.getElementById("socialFloat");
  if (!w) return;
  w.classList.remove("social-open");
  w.querySelector(".social-menu")?.setAttribute("aria-hidden", "true");
  w.querySelector(".social-toggle")?.setAttribute("aria-expanded", "false");
}
function initSocial() {
  document.getElementById("socialToggle")?.addEventListener("click", (e) => {
    e.stopPropagation();
    const w = document.getElementById("socialFloat");
    if (!w) return;
    const open = w.classList.toggle("social-open");
    w.querySelector(".social-menu")?.setAttribute("aria-hidden", String(!open));
    w.querySelector(".social-toggle")?.setAttribute("aria-expanded", String(open));
  });
}
function initVideos() {
  const backgroundVideos = [...document.querySelectorAll(".v15-hero-visual video")];
  const keepBackgroundPlaying = (v) => {
    v.controls = false;
    v.muted = true;
    v.defaultMuted = true;
    v.autoplay = true;
    v.loop = true;
    v.playsInline = true;
    v.preload = "auto";
    v.setAttribute("muted", "");
    v.setAttribute("autoplay", "");
    v.setAttribute("loop", "");
    v.setAttribute("playsinline", "");
    v.setAttribute("webkit-playsinline", "");
    const play = () => {
      if (document.hidden) return;
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };
    v.addEventListener("canplay", play);
    v.addEventListener("loadeddata", play);
    play();
  };
  backgroundVideos.forEach(keepBackgroundPlaying);
  const inViewport = (v) => {
    if (!v.isConnected || v.closest(".is-hidden")) return false;
    const r = v.getBoundingClientRect();
    return r.width > 0 && r.height > 0 && r.bottom > 0 && r.top < window.innerHeight;
  };
  const videos = [...document.querySelectorAll("video")].filter((v) =>
    !v.closest(".v15-hero-visual")
  );
  const startVideo = (v) => {
    v.controls = false;
    v.muted = true;
    v.defaultMuted = true;
    v.autoplay = false;
    v.playsInline = true;
    v.preload = "none";
    v.setAttribute("muted", "");
    v.removeAttribute("autoplay");
    v.setAttribute("playsinline", "");
    v.setAttribute("webkit-playsinline", "");
    const play = () => {
      if (document.hidden || !inViewport(v) || v.dataset.userStarted === "true") return;
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };
    v.addEventListener("loadeddata", play);
  };
  videos.forEach(startVideo);
  const resumeVideos = () =>
    videos.forEach((v) => {
      if (!inViewport(v) || v.dataset.userStarted === "true") return;
      v.muted = true;
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    });
  const resumeBackground = () =>
    backgroundVideos.forEach((v) => {
      v.muted = true;
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    });
  document.addEventListener("touchstart", () => {
    resumeVideos();
    resumeBackground();
  }, { once: true, passive: true });
  document.addEventListener("pointerdown", () => {
    resumeVideos();
    resumeBackground();
  }, { once: true, passive: true });
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      resumeVideos();
      resumeBackground();
    }
  });
  if ("IntersectionObserver" in window) {
    const o = new IntersectionObserver((es) =>
      es.forEach((e) => {
        if (e.isIntersecting) {
          const v = e.target;
          v.preload = "metadata";
          if (v.networkState === HTMLMediaElement.NETWORK_EMPTY) v.load();
          if (inViewport(v) && v.dataset.userStarted !== "true") {
            const p = v.play();
            if (p && typeof p.catch === "function") p.catch(() => {});
          }
        } else e.target.pause();
      }), { threshold: .01, rootMargin: "120px 0px" });
    videos.forEach((v) => o.observe(v));
  } else {videos.forEach((v) => {
      v.preload = "metadata";
      v.load();
      if (inViewport(v) && v.dataset.userStarted !== "true") {
        const p = v.play();
        if (p && typeof p.catch === "function") p.catch(() => {});
      }
    });}
}
function initPackageButtons() {
  document.querySelectorAll(".package-select").forEach((b) =>
    b.addEventListener("click", () => {
      const s = document.getElementById("packageSelect");
      if (!s) return;
      s.value = b.dataset.package;
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
      });
      setTimeout(() => document.getElementById("packageSelect")?.focus(), 350);
    })
  );
}
function cleanText(v, max) {
  return String(v || "").replace(/[\u0000-\u001F\u007F]/g, " ").replace(/\s+/g, " ").trim().slice(
    0,
    max,
  );
}
function selectText(id) {
  const s = document.getElementById(id);
  return s?.selectedIndex >= 0 ? s.options[s.selectedIndex].textContent.trim() : "";
}
const cooldown = 60000, duplicateWindow = 600000;
let bookingLoadedAt = Date.now();
function setStatus(key, state) {
  const e = document.getElementById("bookingStatus");
  if (e) {
    e.textContent = translations[currentLang][key] || "";
    e.dataset.state = state || "";
  }
}
async function submitBooking(e) {
  e.preventDefault();
  const form = e.currentTarget;
  if (document.getElementById("websiteField")?.value.trim()) return;
  const termsConsent = document.getElementById("termsConsent");
  if (termsConsent && !termsConsent.checked) {
    setStatus("terms_required", "error");
    termsConsent.focus();
    return;
  }
  if (Date.now() - bookingLoadedAt < 2500) {
    setStatus("booking_wait", "warn");
    return;
  }
  const last = Number(localStorage.getItem("booking_last_sent_at") || 0);
  if (Date.now() - last < cooldown) {
    setStatus("booking_wait", "warn");
    return;
  }
  if (!form.checkValidity()) {
    form.reportValidity();
    setStatus("booking_invalid", "error");
    return;
  }
  const phoneInput = document.getElementById("clientPhone").value.replace(/\D/g, "");
  const countryCode = document.getElementById("phoneCountry")?.value || "966";
  let phoneDigits = phoneInput.startsWith("00") ? phoneInput.slice(2) : phoneInput;
  const internationalCodes = ["966", "971", "973", "974", "965", "968"];
  const explicitCode = internationalCodes.find((code) => phoneDigits.startsWith(code));
  let nationalNumber = explicitCode ? phoneDigits.slice(explicitCode.length) : phoneDigits;
  if (!explicitCode && nationalNumber.startsWith("0")) nationalNumber = nationalNumber.slice(1);
  const phone = `${explicitCode || countryCode}${nationalNumber}`;
  const name = cleanText(document.getElementById("clientName").value, 50);
  const notes = cleanText(document.getElementById("clientDetails").value, 500);
  const validGccPhone = /^(?:9665\d{8}|971(?:2|4|5|6|7|9)\d{7,8}|9733\d{7}|974[3567]\d{7}|965[4569]\d{7}|968[279]\d{7})$/.test(phone);
  if (!validGccPhone || name.length < 2) {
    setStatus("booking_invalid", "error");
    return;
  }
  const packageKey = document.getElementById("packageSelect").value;
  const pack = PACKAGE_VALUES[packageKey];
  if (!pack) {
    setStatus("booking_invalid", "error");
    return;
  }
  const values = {
    name,
    phone,
    packageKey,
    packageType: selectText("packageSelect"),
    carTypeKey: document.getElementById("vehicleType").value,
    carType: selectText("vehicleType"),
    vehicleModel: cleanText(document.getElementById("vehicleModel").value, 80),
    shootRegionKey: document.getElementById("clientCity").value,
    shootRegion: selectText("clientCity"),
    bookingDayKey: document.getElementById("bookingDay").value,
    bookingDay: selectText("bookingDay"),
    bookingDate,
    notes,
    acceptedTerms: true,
    termsVersion: "1.0",
    honeypot: "",
    loadedAt: bookingLoadedAt,
  };
  const fp = [
    name.toLowerCase(),
    phone,
    packageKey,
    values.shootRegionKey,
    values.bookingDate,
    values.carTypeKey,
    values.vehicleModel.toLowerCase(),
    notes.toLowerCase(),
  ].join("|");
  const prev = localStorage.getItem("booking_last_fingerprint");
  const prevAt = Number(localStorage.getItem("booking_last_fingerprint_at") || 0);
  if (fp === prev && Date.now() - prevAt < duplicateWindow) {
    setStatus("booking_duplicate", "warn");
    return;
  }
  const submit = document.getElementById("bookingSubmit");
  submit.disabled = true;
  setStatus("booking_sending", "busy");
  const message = currentLang === "ar"
    ? `مرحباً 5lo Photography، أرغب بحجز موعد:\n- الاسم: ${name}\n- رقم التواصل: ${phone}\n- التاريخ: ${
      bookingDateText(new Date(values.bookingDate + "T12:00:00"))
    }\n- المدينة: ${values.shootRegion}\n- نوع السيارة: ${values.carType}\n- الماركة والموديل: ${
      values.vehicleModel || "غير محدد"
    }\n- الباقة: ${pack.ar}${notes ? `\n- التفاصيل: ${notes}` : ""}`
    : `Hello 5lo Photography, I would like to book a session:\n- Name: ${name}\n- Phone: ${phone}\n- Date: ${
      bookingDateText(new Date(values.bookingDate + "T12:00:00"))
    }\n- City: ${values.shootRegion}\n- Vehicle Type: ${values.carType}\n- Make & Model: ${
      values.vehicleModel || "Not specified"
    }\n- Package: ${pack.en}${notes ? `\n- Details: ${notes}` : ""}`;
  const internationalPhone = phone;
  const whatsappUrl = `https://wa.me/${internationalPhone}?text=${encodeURIComponent(message)}`;
  const whatsappWindow = window.open(whatsappUrl, "_blank");
  let discordDelivered = false;
  try {
    const r = await fetch("/api/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
      keepalive: true,
    });
    if (!r.ok) throw new Error(`Booking API returned ${r.status}`);
    discordDelivered = true;
  } catch (err) {
    console.warn("Booking API unavailable:", err);
  } finally {
    localStorage.setItem("booking_last_sent_at", String(Date.now()));
    localStorage.setItem("booking_last_fingerprint", fp);
    localStorage.setItem("booking_last_fingerprint_at", String(Date.now()));
    form.reset();
    const dateField = document.getElementById("bookingDate");
    if (dateField) dateField.value = "";
    setBookingStep(1);
    renderBookingDates();
    setStatus(
      discordDelivered ? "booking_success" : "booking_discord_error",
      discordDelivered ? "success" : "error",
    );
    if (!whatsappWindow) window.location.assign(whatsappUrl);
    setTimeout(() => submit.disabled = false, cooldown);
  }
}
let bookingWizardStep = 1;
const bookingWeekdayKeys = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
function bookingDateKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${
    String(date.getDate()).padStart(2, "0")
  }`;
}
function bookingDateText(date) {
  return new Intl.DateTimeFormat(currentLang === "ar" ? "ar-SA" : "en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    calendar: "gregory",
  }).format(date);
}
function renderBookingDates() {
  const holder = document.getElementById("bookingDateChoices");
  if (!holder) return;
  const chosen = document.getElementById("bookingDate")?.value || "";
  holder.replaceChildren();
  const dayFmt = new Intl.DateTimeFormat(currentLang === "ar" ? "ar-SA" : "en-US", {
    weekday: "short",
    calendar: "gregory",
  });
  const monthFmt = new Intl.DateTimeFormat(currentLang === "ar" ? "ar-SA" : "en-US", {
    month: "short",
    calendar: "gregory",
  });
  const base = new Date();
  base.setHours(12, 0, 0, 0);
  for (let offset = 1; offset <= 7; offset++) {
    const date = new Date(base);
    date.setDate(base.getDate() + offset);
    const key = bookingDateKey(date), day = bookingWeekdayKeys[date.getDay()];
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "v15-date-option";
    btn.dataset.date = key;
    btn.dataset.day = day;
    btn.setAttribute("aria-pressed", String(key === chosen));
    if (key === chosen) btn.classList.add("active");
    const weekday = document.createElement("span");
    weekday.textContent = dayFmt.format(date);
    const number = document.createElement("strong");
    number.textContent = String(date.getDate());
    const month = document.createElement("small");
    month.textContent = monthFmt.format(date);
    btn.append(weekday, number, month);
    btn.addEventListener("click", () => {
      holder.querySelectorAll(".v15-date-option").forEach((option) => {
        option.classList.remove("active");
        option.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");
      document.getElementById("bookingDate").value = key;
      const daySelect = document.getElementById("bookingDay");
      if (daySelect) daySelect.value = day;
      const label = document.getElementById("selectedDateLabel");
      if (label) label.textContent = bookingDateText(date);
      setStatus("", "");
    });
    holder.append(btn);
  }
  const label = document.getElementById("selectedDateLabel");
  if (chosen && label) {
    const d = new Date(`${chosen}T12:00:00`);
    if (!Number.isNaN(d.valueOf())) label.textContent = bookingDateText(d);
  }
}
function setBookingStep(step) {
  bookingWizardStep = Math.max(1, Math.min(3, step));
  document.querySelectorAll("[data-wizard-step]").forEach((panel) => {
    const active = Number(panel.dataset.wizardStep) === bookingWizardStep;
    panel.hidden = !active;
    panel.classList.toggle("active", active);
  });
  document.querySelectorAll(".v15-wizard-progress i").forEach((dot, index) => {
    dot.classList.toggle("active", index < bookingWizardStep);
    dot.classList.toggle("complete", index + 1 < bookingWizardStep);
  });
  const stepText = document.getElementById("wizardStepText");
  if (stepText) {
    stepText.textContent = translations[currentLang][`wizard_step_${bookingWizardStep}`] || "";
  }
  const back = document.getElementById("bookingBack"),
    next = document.getElementById("bookingNext"),
    submit = document.getElementById("bookingSubmit");
  if (back) back.hidden = bookingWizardStep === 1;
  if (next) next.hidden = bookingWizardStep === 3;
  if (submit) submit.hidden = bookingWizardStep !== 3;
  setStatus("", "");
}
function validateBookingStep(step) {
  const panel = document.querySelector(`[data-wizard-step="${step}"]`);
  if (!panel) return false;
  for (
    const field of panel.querySelectorAll("input[required],select[required],textarea[required]")
  ) {
    if (!field.checkValidity()) {
      field.reportValidity();
      return false;
    }
  }
  if (step === 3) {
    if (!document.getElementById("bookingDate")?.value) {
      setStatus("wizard_date_required", "error");
      return false;
    }
    const terms = document.getElementById("termsConsent");
    if (terms && !terms.checked) {
      setStatus("terms_required", "error");
      terms.focus();
      return false;
    }
  }
  return true;
}
function initBooking() {
  bookingLoadedAt = Date.now();
  renderBookingDates();
  setBookingStep(1);
  document.getElementById("bookingForm")?.addEventListener("submit", submitBooking);
  document.getElementById("bookingNext")?.addEventListener("click", () => {
    if (validateBookingStep(bookingWizardStep)) setBookingStep(bookingWizardStep + 1);
  });
  document.getElementById("bookingBack")?.addEventListener(
    "click",
    () => setBookingStep(bookingWizardStep - 1),
  );
  document.getElementById("clientPhone")?.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\D/g, "").slice(0, 12);
  });
  document.getElementById("phoneCountry")?.addEventListener("change", (e) => {
    const dialPrefixes = { "966": "5XXXXXXXX", "971": "5XXXXXXX", "973": "3XXXXXXX", "974": "3XXXXXXX", "965": "5XXXXXXX", "968": "9XXXXXXX" };
    const phone = document.getElementById("clientPhone");
    if (phone) phone.placeholder = dialPrefixes[e.target.value] || "Enter number";
  });
  ["clientName", "vehicleModel", "clientDetails"].forEach((id) =>
    document.getElementById(id)?.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[\u0000-\u001F\u007F]/g, "").slice(
        0,
        Number(e.target.maxLength || 500),
      );
    })
  );
}
function initGallery() {
  const grid = document.getElementById("galleryGrid");
  if (!grid) return;
  const cards = [...grid.querySelectorAll(".media-card")];
  const count = document.getElementById("galleryCount");
  let lightbox = document.getElementById("galleryLightbox");
  if (!lightbox) {
    lightbox = document.createElement("div");
    lightbox.className = "gallery-lightbox";
    lightbox.id = "galleryLightbox";
    lightbox.hidden = true;
    lightbox.setAttribute("role", "dialog");
    lightbox.setAttribute("aria-modal", "true");
    lightbox.setAttribute("aria-label", currentLang === "ar" ? "عرض الصورة" : "Image viewer");
    const close = document.createElement("button");
    close.type = "button";
    close.className = "gallery-lightbox-close";
    close.setAttribute("aria-label", currentLang === "ar" ? "إغلاق الصورة" : "Close image");
    close.textContent = "×";
    const image = document.createElement("img");
    image.className = "gallery-lightbox-image";
    const video = document.createElement("video");
    video.className = "gallery-lightbox-video";
    video.controls = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.hidden = true;
    video.setAttribute("playsinline", "");
    video.setAttribute("aria-label", currentLang === "ar" ? "مشغل الفيديو" : "Video player");
    lightbox.append(close, image, video);
    document.body.append(lightbox);
  }
  const lightboxImage = lightbox.querySelector(".gallery-lightbox-image");
  const lightboxVideo = lightbox.querySelector(".gallery-lightbox-video");
  const lightboxClose = lightbox.querySelector(".gallery-lightbox-close");
  let returnFocus = null;
  const closeLightbox = () => {
    lightboxVideo.pause();
    lightboxVideo.removeAttribute("src");
    lightboxVideo.load();
    lightbox.querySelectorAll(".gallery-video-fallback").forEach((link) => link.remove());
    lightboxVideo.load();
    lightboxVideo.hidden = true;
    lightboxImage.hidden = true;
    lightbox.hidden = true;
    document.body.classList.remove("gallery-lightbox-open");
    if (returnFocus?.isConnected) returnFocus.focus();
  };
  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
  });
  cards.filter((card) => card.querySelector("img")).forEach((card) => {
    const image = card.querySelector("img");
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute(
      "aria-label",
      currentLang === "ar" ? `عرض صورة ${image.alt}` : `View ${image.alt}`,
    );
    const openImage = () => {
      returnFocus = card;
      lightboxVideo.pause();
      lightboxVideo.removeAttribute("src");
      lightboxVideo.hidden = true;
      lightboxImage.hidden = false;
      lightboxImage.src = image.currentSrc || image.src;
      lightboxImage.alt = image.alt;
      lightbox.hidden = false;
      document.body.classList.add("gallery-lightbox-open");
      lightboxClose.focus();
    };
    card.addEventListener("click", openImage);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openImage();
      }
    });
  });
  cards.filter((card) => card.dataset.category === "video").forEach((card) => {
    const video = card.querySelector("video");
    if (!video) return;
    card.removeAttribute("tabindex");
    card.removeAttribute("role");
    card.removeAttribute("aria-label");
    if (!card.querySelector(".video-play-indicator")) {
      const hint = document.createElement("button");
      hint.type = "button";
      hint.className = "video-play-indicator";
      hint.setAttribute("aria-label", currentLang === "ar" ? "تشغيل الفيديو بالصوت" : "Play video with sound");
      hint.textContent = "▶";
      card.append(hint);
    }
    const hint = card.querySelector(".video-play-indicator");
    const showVideoFallback = () => {
      const source = video.currentSrc || video.querySelector("source")?.src;
      card.classList.add("video-play-error");
      if (!source || card.querySelector(".video-error-link")) return;
      const fallback = document.createElement("a");
      fallback.className = "video-error-link";
      fallback.href = source;
      fallback.target = "_blank";
      fallback.rel = "noopener noreferrer";
      fallback.textContent = currentLang === "ar" ? "افتح ملف الفيديو" : "Open video file";
      card.append(fallback);
    };
    video.addEventListener("error", showVideoFallback);
    video.addEventListener("play", () => {
      if (video.dataset.userStarted === "true") card.classList.add("is-playing");
    });
    video.addEventListener("pause", () => card.classList.remove("is-playing"));
    const openVideo = async (event) => {
      event.preventDefault();
      event.stopPropagation();
      video.dataset.userStarted = "true";
      returnFocus = hint;
      const src = video.currentSrc || video.querySelector("source")?.src;
      if (!src) return showVideoFallback();
      video.pause();
      lightboxImage.hidden = true;
      lightboxVideo.hidden = false;
      lightboxVideo.src = src;
      lightboxVideo.muted = false;
      lightboxVideo.defaultMuted = false;
      lightboxVideo.controls = true;
      lightboxVideo.playsInline = true;
      lightboxVideo.volume = 1;
      lightbox.hidden = false;
      document.body.classList.add("gallery-lightbox-open");
      lightboxVideo.load();
      try {
        await lightboxVideo.play();
      } catch {
        const fallback = document.createElement("a");
        fallback.className = "gallery-video-fallback";
        fallback.href = src;
        fallback.target = "_blank";
        fallback.rel = "noopener noreferrer";
        fallback.textContent = currentLang === "ar" ? "افتح الفيديو" : "Open video";
        fallback.addEventListener("click", (e) => e.stopPropagation());
        lightbox.append(fallback);
      }
    };
    hint.addEventListener("click", openVideo);
    card.addEventListener("click", openVideo);
  });
  const apply = (cat) => {
    let n = 0;
    cards.forEach((c, i) => {
      const match = cat === "all" || c.dataset.category === cat;
      c.classList.toggle("is-hidden", !match);
      if (match) {
        n++;
        c.style.setProperty("--filter-delay", `${Math.min(i * 35, 180)}ms`);
      }
    });
    if (count) count.textContent = `${n} / ${cards.length}`;
    initReveal();
  };
  document.querySelectorAll(".filter-btn").forEach((b) =>
    b.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      apply(b.dataset.filter);
    })
  );
  apply("all");
  document.querySelectorAll(".motion-photo").forEach((card) => {
    card.addEventListener("pointermove", (e) => {
      if (e.pointerType !== "mouse") return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
      card.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
      card.style.setProperty("--move-x", `${(0.5 - (e.clientX - r.left) / r.width) * 14}px`);
      card.style.setProperty("--move-y", `${(0.5 - (e.clientY - r.top) / r.height) * 14}px`);
    });
    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--mx", "50%");
      card.style.setProperty("--my", "50%");
      card.style.setProperty("--move-x", "0px");
      card.style.setProperty("--move-y", "0px");
    });
  });
}
function initReveal() {
  const items = [...document.querySelectorAll(".site-reveal,.reveal-item")];
  if (!items.length) return;
  if (!("IntersectionObserver" in window)) {
    items.forEach((x) => x.classList.add("is-visible"));
    return;
  }
  const o = new IntersectionObserver((es) =>
    es.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("is-visible");
      o.unobserve(e.target);
    }), {
    threshold: .12,
    rootMargin: "0px 0px -40px 0px",
  });
  items.forEach((x, i) => {
    x.style.setProperty("--reveal-delay", `${Math.min((i % 4) * 70, 210)}ms`);
    o.observe(x);
  });
}
function initTransitions() {
  document.documentElement.classList.add("page-ready");
  document.querySelectorAll("a[href]").forEach((link) => {
    const h = link.getAttribute("href") || "";
    if (
      !h || h.startsWith("#") || h.startsWith("http") || h.startsWith("mailto:") ||
      h.startsWith("tel:") || link.target === "_blank"
    ) return;
    link.addEventListener("click", (e) => {
      const u = new URL(link.href, location.href);
      if (u.origin !== location.origin) return;
      e.preventDefault();
      document.body.classList.add("page-leaving");
      setTimeout(() => location.href = u.href, 160);
    });
  });
}
function enableProtection() {
  const formField = (t) =>
    t && (
      ["INPUT", "TEXTAREA", "SELECT"].includes(t.tagName) ||
      t.isContentEditable
    );
  let noticeTimer;
  let lastSecurityEventAt = 0;
  const reportSecurityAttempt = () => {
    const now = Date.now();
    if (now - lastSecurityEventAt < 15000) return;
    lastSecurityEventAt = now;
    fetch("/api/log", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event: "developer_tools_attempt", page: location.pathname, referrer: document.referrer, language: currentLang, theme: currentTheme }),
      keepalive: true,
    }).catch(() => {});
  };
  const warnVisitor = () => {
    let notice = document.getElementById("code-protection-notice");
    if (!notice) {
      notice = document.createElement("div");
      notice.id = "code-protection-notice";
      notice.className = "code-protection-notice";
      notice.setAttribute("role", "status");
      notice.setAttribute("aria-live", "polite");
      document.body.append(notice);
    }
    notice.textContent = currentLang === "ar"
      ? "محتوى 5lo Photography محمي."
      : "5lo Photography content is protected.";
    notice.classList.add("is-visible");
    clearTimeout(noticeTimer);
    noticeTimer = setTimeout(() => notice.classList.remove("is-visible"), 2800);
  };
  document.addEventListener("contextmenu", (e) => {
    if (!formField(e.target)) {
      e.preventDefault();
      warnVisitor();
    }
  });
  document.addEventListener("dragstart", (e) => {
    if (e.target.matches?.("img,video")) {
      e.preventDefault();
      warnVisitor();
    }
  });
  document.addEventListener("keydown", (e) => {
    const k = String(e.key).toLowerCase();
    const copyShortcut = (e.ctrlKey || e.metaKey) && k === "c";
    const devToolsShortcut = e.key === "F12" ||
      (e.ctrlKey && e.shiftKey && ["i", "j", "c", "k"].includes(k)) || (e.ctrlKey && k === "u") ||
      (e.metaKey && e.altKey && ["i", "j", "c"].includes(k)) || (e.metaKey && k === "u");
    const blocked = (copyShortcut && !formField(e.target)) || devToolsShortcut;
    if (blocked) {
      e.preventDefault();
      e.stopPropagation();
      if (devToolsShortcut) reportSecurityAttempt();
      warnVisitor();
    }
  }, true);
  console.warn(
    "%c5lo Photography — content protected. Do not copy or reuse without permission.",
    "color:#b9c6c3;font-weight:bold",
  );
}
function initHomeLoader() {
  const loader = document.getElementById("home-loader");
  if (!loader) return;
  const progress = document.getElementById("homeLoaderProgress");
  const percent = document.getElementById("homeLoaderPercent");
  const state = document.getElementById("homeLoaderState");
  const started = performance.now();
  const minimum = 700;
  const hardLimit = 12000;
  let finished = false;
  let pageLoaded = document.readyState === "complete";
  window.addEventListener("load", () => pageLoaded = true, { once: true });
  const labels = currentLang === "ar"
    ? ["نجهّز المشهد", "نضبط التركيز", "نجهّز التجربة"]
    : ["PREPARING THE FRAME", "FOCUSING THE LENS", "SETTING THE EXPERIENCE"];
  const finish = () => {
    if (finished) return;
    finished = true;
    if (progress) progress.style.width = "100%";
    if (percent) percent.textContent = "100%";
    if (state) state.textContent = labels[2];
    setTimeout(() => {
      loader.classList.add("is-hidden");
      document.body.classList.add("home-loaded");
    }, 180);
    setTimeout(() => loader.remove(), 820);
  };
  const tick = (now) => {
    if (finished) return;
    const elapsed = now - started;
    const ready = pageLoaded || document.readyState === "complete";
    const loadingProgress = Math.min(92, Math.round(92 * (1 - Math.exp(-elapsed / 1200))));
    const readyProgress = 92 + Math.min(7, Math.max(0, Math.round(((elapsed - minimum) / 500) * 7)));
    const value = ready ? Math.min(99, readyProgress) : loadingProgress;
    const idx = value < 38 ? 0 : value < 74 ? 1 : 2;
    loader.style.setProperty("--progress", value + "%");
    if (progress) progress.style.width = value + "%";
    if (percent) percent.textContent = value + "%";
    loader.querySelector('[role="progressbar"]')?.setAttribute("aria-valuenow", String(value));
    if (state) state.textContent = labels[idx];
    if ((ready && elapsed >= minimum) || elapsed >= hardLimit) finish();
    else requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function trackPageView() {
  if (!["http:", "https:"].includes(location.protocol)) return;
  const payload = {
    event: "page_view",
    page: location.pathname,
    referrer: document.referrer,
    language: currentLang,
    theme: currentTheme,
  };
  fetch("/api/log", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    keepalive: true,
  }).catch(() => {});
}

function init() {
  initHomeLoader();
  buildHeader();
  buildFooter();
  document.documentElement.dataset.theme = currentTheme;
  applyThemeMeta();
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
  document.documentElement.classList.toggle("lang-en", currentLang === "en");
  document.documentElement.classList.toggle("lang-ar", currentLang === "ar");
  if (document.body.classList.contains("page-terms")) {
    document.title = `${translations[currentLang].terms_title} | 5lo Photography`;
  }
  initChrome();
  initSocial();
  initVideos();
  initPackageButtons();
  initBooking();
  initGallery();
  applyTranslations();
  const a = document.querySelector(".announcement-bar span");
  if (a) a.textContent = translations[currentLang].announcement_text;
  updateThemeLabel();
  initReveal();
  initTransitions();
  enableProtection();
  trackPageView();
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, {
    once: true,
  });
} else init();
