const SITE = Object.freeze({
  brand: '5lo Photography',
  logo: 'https://k.top4top.io/p_3921fx81l1.jpeg',
  whatsapp: '966597561765',
  instagram: '5lo.63',
  tiktok: 'xzlav.1',
  version: '8.9.4'
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
    "hero_title": "خلِّ سيارتك <span class=\"accent-text\">تتحرك</span> حتى وهي ثابتة.",
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
    "process_4_note": "لضمان سرعة التسليم، يرجى تحميل تطبيق DJI Mimo.",
    "cta_label": "READY WHEN YOU ARE",
    "cta_title": "خلّنا نصنع لقطة تستاهل تنحفظ.",
    "cta_button": "احجز الآن",
    "gallery_badge": "الأعمال",
    "gallery_t1": "التفاصيل ليست",
    "gallery_t2": "تفصيلاً.",
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
    "contact_desc": "املأ البيانات الأساسية، وبعد الإرسال بيتجه الطلب للواتساب تلقائياً، مع نسخة خلفية لإشعار الحجز.",
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
    "form_note": "يُرسل الطلب عبر اتصال آمن إلى خادم الحجز ثم يفتح واتساب لتكملة التواصل.",
    "footer_loc": "الدمام / الخبر / القطيف",
    "footer_top": "العودة للأعلى ↑",
    "booking_sending": "جاري الإرسال…",
    "booking_success": "تم تجهيز طلبك وفتح واتساب لإرساله.",
    "booking_error": "تعذر إرسال الطلب الآن. افتح واتساب مباشرة وحاول مرة أخرى.",
    "booking_wait": "انتظر لحظات قبل الإرسال مرة أخرى.",
    "booking_invalid": "تأكد من صحة البيانات المدخلة.",
    "booking_duplicate": "تم إرسال نفس الطلب مسبقاً. حاول لاحقاً بطلب جديد."
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
    "hero_title": "Make your car <span class=\"accent-text\">move</span> while staying still.",
    "hero_desc": "Rolling, static photography and cinematic video with a clean visual language built around your car.",
    "btn_start": "Start booking",
    "btn_works": "View gallery",
    "hero_meta_1": "Rolling",
    "hero_meta_2": "Cinematic video",
    "hero_meta_3": "Social-ready",
    "hero_side_label": "SIGNATURE LOOK",
    "hero_side_title": "A frame with presence.",
    "hero_side_desc": "We use movement, angles and visual rhythm to bring out the character of your car.",
    "hero_side_link": "Explore services →",
    "scroll_down": "SCROLL",
    "studio_badge": "THE STUDIO",
    "studio_t1": "More than a photo.",
    "studio_t2": "A full scene.",
    "studio_desc": "Every frame starts with the car and ends as visual material you can show, post or keep.",
    "feature1_label": "ROLLING",
    "feature1_title": "Controlled motion.",
    "feature1_desc": "Rolling shots that highlight the lines, stance and feel of the car in motion.",
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
    "process_4_note": "For faster delivery, please download the DJI Mimo app.",
    "cta_label": "READY WHEN YOU ARE",
    "cta_title": "Let’s create a frame worth keeping.",
    "cta_button": "Book now",
    "gallery_badge": "WORKS",
    "gallery_t1": "Details are not",
    "gallery_t2": "just details.",
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
    "contact_desc": "Fill the basics. The booking is sent securely to the server and WhatsApp opens automatically.",
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
    "form_note": "Your request is sent securely to the booking server, then WhatsApp opens for the conversation.",
    "footer_loc": "Dammam / Khobar / Qatif",
    "footer_top": "Back to top ↑",
    "booking_sending": "Sending…",
    "booking_success": "Your request is ready. WhatsApp opened so you can send it.",
    "booking_error": "Could not send the request. Open WhatsApp directly and try again.",
    "booking_wait": "Please wait a moment before sending again.",
    "booking_invalid": "Please check the entered information.",
    "booking_duplicate": "The same request was already sent. Try again later."
  }
};

;
Object.assign(translations.ar,{
  hero_v4_overline:'5LO / AUTOMOTIVE VISUAL STUDIO',
  hero_v4_kicker:'حركة · تفاصيل · حضور',
  hero_v4_title:'سيارتك تستاهل<br><span class="accent-text">أكثر من صورة.</span>',
  hero_v4_desc:'نصوّر الرولينق، الثابت، والفيديو السينمائي بأسلوب نظيف يخلي حضور السيارة واضح من أول فريم.',
  hero_v4_cta:'ابدأ الحجز', hero_v4_gallery:'شوف الأعمال',
  hero_v4_proof1:'رولينق', hero_v4_proof2:'تصوير ثابت', hero_v4_proof3:'فيديو سينمائي', hero_v4_proof4:'محتوى جاهز للنشر',
  hero_v4_side_label:'THE 5LO SIGNATURE', hero_v4_side_title:'زاوية. حركة. حضور.',
  hero_v4_side_desc:'نركز على الخطوط، الوقفة، والضوء — ثم نحولها إلى صورة أو فيديو له شخصية.',
  hero_v4_side_link:'اكتشف الأسلوب ↗',
  studio_v4_title:'مو مجرد تصوير.<br><span class="accent-text">هذا أسلوب.</span>',
  studio_v4_desc:'من الطريق إلى الجراج، ومن اللقطة السريعة إلى الفيلم — كل تفصيلة محسوبة عشان تطلع سيارتك بالشكل اللي تستحقه.',
  studio_feature_label:'VISUAL LANGUAGE', studio_feature_title:'لقطة لها حضور.',
  studio_feature_desc:'ألوان موزونة، إضاءة نظيفة، وزوايا تخلي العين تروح للسيارة مباشرة.',
  studio_feature_link:'شاهد النتيجة ↗', cta_v4_desc:'ابدأ بطلب الحجز، واحنا نرتب معك التفاصيل.',
  footer_terms:'الشروط والأحكام',terms_required:'يرجى الموافقة على الشروط والأحكام قبل إرسال الطلب.',
  terms_consent_start:'أوافق على',terms_consent_end:'وأفهم سياسة المحتوى الرقمي والاسترداد.',terms_digital_short:'الملفات الرقمية المخصصة لا تُسترد بعد التسليم أو إتاحة التنزيل، مع حفظ الحقوق النظامية.',
  terms_kicker:'5LO / شروط العميل',terms_title:'الشروط والأحكام',terms_intro:'يرجى مراجعة الشروط المتعلقة بطلب التصوير وتسليم الملفات الرقمية قبل تأكيد الحجز.',terms_updated:'آخر تحديث: 5 أكتوبر 2026',
  terms_scope_title:'1. نطاق الخدمة',terms_scope:'تقدم 5lo Photography خدمات تصوير السيارات وإنتاج الصور ومقاطع الفيديو الرقمية بحسب الباقة المختارة. يوضح وصف الباقة والسعر وموعد وطريقة التسليم للعميل قبل تأكيد الطلب.',
  terms_booking_title:'2. طلب الحجز والتأكيد',terms_booking:'إرسال نموذج الموقع هو طلب مبدئي ولا يثبت الموعد وحده. يصبح الحجز مؤكداً بعد تواصل 5lo وتأكيد الموعد والباقة والسعر كتابةً عبر واتساب أو وسيلة التواصل المتفق عليها. يراجع العميل تفاصيل الطلب قبل تأكيده.',
  terms_digital_title:'3. الملفات الرقمية والاسترداد',terms_digital:'الصور ومقاطع الفيديو المعدة خصيصاً للعميل منتجات رقمية مخصصة. بعد تسليم الملفات أو إتاحة رابط تنزيلها، لا يمكن إرجاع النسخ الرقمية ولا يُسترد ثمن المحتوى الذي تم تسليمه لمجرد تغيير الرأي. لا ينتقص ذلك من الحقوق النظامية عند وجود عيب جوهري أو عدم مطابقة أو حالة يوجب فيها النظام الاسترداد.',
  terms_cancel_title:'4. إلغاء الخدمة وحقوق الاسترداد',terms_cancel:'طلبات إلغاء جلسة التصوير أو استرداد قيمتها قبل الاستفادة من الخدمة تخضع للأنظمة المعمول بها في المملكة. يقرر نظام التجارة الإلكترونية حق المستهلك في استرداد قيمة الخدمة خلال 7 أيام من التعاقد إذا لم ينتفع بها، كما يجيز إلغاء العقد واسترداد المبلغ عند تأخر التنفيذ لأكثر من 15 يوماً من تاريخ العقد أو الموعد المتفق عليه، ما لم يكن التأخير بسبب قوة قاهرة؛ وتطبق الاستثناءات النظامية. يرجى التواصل معنا فوراً لبحث طلب الإلغاء أو إعادة الجدولة.',
  terms_delivery_title:'5. التسليم ومراجعة الطلب',terms_delivery:'يتم التسليم رقمياً عبر الوسيلة والمدة الموضحتين عند تأكيد الحجز. على العميل مراجعة الباقة وتفاصيل السيارة ومعلومات التواصل قبل التأكيد، وإبلاغنا سريعاً عند وجود مشكلة في الملفات المستلمة.',
  terms_client_title:'6. مسؤولية العميل',terms_client:'يؤكد العميل صحة معلوماته، وأن لديه الإذن اللازم لتصوير السيارة والموقع المحدد. قد يؤثر تأخر العميل أو عدم جاهزية السيارة على تنفيذ الموعد، لذا يرجى التواصل معنا بأسرع وقت لترتيب أي تغيير.',
  terms_privacy_title:'7. الخصوصية والتواصل',terms_privacy:'تستخدم بيانات الحجز للتواصل بشأن الطلب وترتيب الخدمة فقط، ولا تُنشر بيانات العميل أو ما يعرّفه دون موافقته. يمكن إرسال استفسارات الشروط أو طلبات الإلغاء عبر واتساب.',
  terms_law_title:'8. الأنظمة المعمول بها',terms_law:'تفسر هذه الشروط وتطبق بما يتوافق مع الأنظمة المعمول بها في المملكة العربية السعودية. أي حق إلزامي للمستهلك بموجب النظام يبقى محفوظاً.',
  terms_contact_title:'عندك استفسار عن الشروط؟',terms_contact_desc:'تواصل معنا قبل تأكيد الحجز ونوضح لك التفاصيل.',terms_contact_button:'تواصل عبر واتساب ↗'
});
Object.assign(translations.en,{
  hero_v4_overline:'5LO / AUTOMOTIVE VISUAL STUDIO',
  hero_v4_kicker:'MOVEMENT · DETAIL · PRESENCE',
  hero_v4_title:'Your car deserves<br><span class="accent-text">more than a photo.</span>',
  hero_v4_desc:'Rolling, static and cinematic car content built with a clean visual language that keeps the car in focus.',
  hero_v4_cta:'Start booking', hero_v4_gallery:'View gallery',
  hero_v4_proof1:'Rolling', hero_v4_proof2:'Static', hero_v4_proof3:'Cinematic film', hero_v4_proof4:'Social-ready',
  hero_v4_side_label:'THE 5LO SIGNATURE', hero_v4_side_title:'Angle. Motion. Presence.',
  hero_v4_side_desc:'We shape lines, stance and light into a frame or film with its own character.',
  hero_v4_side_link:'Explore the style ↗',
  studio_v4_title:'More than a shoot.<br><span class="accent-text">A signature.</span>',
  studio_v4_desc:'From the road to the garage, from a fast frame to a full film — every detail is shaped around the car.',
  studio_feature_label:'VISUAL LANGUAGE', studio_feature_title:'A frame with presence.',
  studio_feature_desc:'Balanced color, clean light and angles that keep the eye on the car.',
  studio_feature_link:'See the result ↗', cta_v4_desc:'Start the booking request and we’ll shape the details with you.',
  footer_terms:'Terms & Conditions',terms_required:'Please accept the terms and conditions before sending your request.',
  terms_consent_start:'I agree to the',terms_consent_end:'and understand the digital-content and refund policy.',terms_digital_short:'Custom digital files are non-refundable after delivery or download access, subject to statutory rights.',
  terms_kicker:'5LO / CLIENT TERMS',terms_title:'Terms & Conditions',terms_intro:'Please review the terms for photography bookings and digital file delivery before confirming your booking.',terms_updated:'Last updated: October 5, 2026',
  terms_scope_title:'1. Services',terms_scope:'5lo Photography provides automotive photography and digital photo and video production according to the selected package. The package, price, delivery timing and delivery method are shared before the booking is confirmed.',
  terms_booking_title:'2. Booking requests and confirmation',terms_booking:'Submitting the website form is an initial request and does not reserve a date by itself. A booking is confirmed only after 5lo contacts you and confirms the date, package and price in writing through WhatsApp or another agreed contact method. Please review the request details before confirmation.',
  terms_digital_title:'3. Digital files and refunds',terms_digital:'Photos and videos created specifically for a client are customized digital deliverables. Once the files are delivered or a download link is made available, digital copies cannot be returned and payment for delivered content is not refundable merely because of a change of mind. This does not limit statutory rights for a material defect, non-conformity or any case where a refund is required by law.',
  terms_cancel_title:'4. Service cancellation and refund rights',terms_cancel:'Requests to cancel a photography session or receive a refund before using the service are handled under the laws in force in Saudi Arabia. The E-Commerce Law provides a right to recover the service price within 7 days of contracting if the service has not been used. It also allows cancellation and a refund if performance is delayed by more than 15 days from the contract date or agreed date, unless the delay is caused by force majeure. Statutory exceptions apply. Contact us promptly to discuss cancellation or rescheduling.',
  terms_delivery_title:'5. Delivery and order review',terms_delivery:'Files are delivered digitally through the method and timeline stated when the booking is confirmed. Please review your selected package, vehicle details and contact information before confirmation, and contact us promptly if there is an issue with delivered files.',
  terms_client_title:'6. Client responsibilities',terms_client:'The client confirms that the submitted information is accurate and that they have permission for the vehicle and location to be photographed. Delays or an unavailable vehicle may affect the session, so please contact us promptly to arrange any changes.',
  terms_privacy_title:'7. Privacy and contact',terms_privacy:'Booking information is used to contact you about your request and arrange the service. Client-identifying information or content is not published without consent. Questions about these terms or cancellation requests can be sent through WhatsApp.',
  terms_law_title:'8. Governing law',terms_law:'These terms are interpreted and applied in accordance with the laws in force in the Kingdom of Saudi Arabia. Any mandatory consumer rights provided by law remain unaffected.',
  terms_contact_title:'Questions about these terms?',terms_contact_desc:'Contact us before confirming a booking and we’ll clarify the details.',terms_contact_button:'Contact us on WhatsApp ↗'
});
const PACKAGE_VALUES={
  rolling_no_edit:{
    ar:'رولينق بدون مونتاج (100 ر.س)',en:'Rolling without editing (100 SAR)'
  },rolling_edit:{
    ar:'رولينق + مونتاج (120 ر.س، بدل 150)',en:'Rolling + Editing (120 SAR, was 150)'
  },rolling_static:{
    ar:'رولينق + ثابتة (250 ر.س)',en:'Rolling + Static (250 SAR)'
  },cinematic:{
    ar:'التصوير السينمائي (450 ر.س)',en:'Cinematic Production (450 SAR)'
  }
};
let currentLang=localStorage.getItem('site_lang')==='en'?'en':'ar';
let savedTheme=localStorage.getItem('site_theme');
let currentTheme=['relax','dark','light'].includes(savedTheme)?savedTheme:'relax';
function buildHeader(){
  const nav=[
    ['/','nav_home','link-index'],
    ['/gallery','nav_works','link-works'],
    ['/services','nav_services','link-services'],
    ['/packages','nav_packages','link-packages'],
    ['/terms','nav_terms','link-terms']
  ];
  const langLabel=currentLang==='ar'?'AR':'EN';
  document.getElementById('site-header').innerHTML=`
    <div class="announcement-bar"><span>${translations[currentLang].announcement_text}</span></div>
    <header class="site-header">
      <div class="container nav-container">
        <a href="/" class="brand" aria-label="5lo Photography">
          <img class="brand-logo-image" src="${SITE.logo}" alt="5lo Photography" decoding="async">
          <span class="brand-copy"><strong>5lo</strong><em>Photography</em></span>
        </a>
        <nav class="nav-links" aria-label="Primary">
          ${nav.map(([href,key,id])=>`<a href="${href}" id="${id}" data-i18n="${key}">${translations[currentLang][key]}</a>`).join('')}
        </nav>
        <div class="nav-tools">
          <a href="/packages#contact" class="quick-book btn-main" data-i18n="quick_booking">${translations[currentLang].quick_booking}</a>
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
              <button type="button" class="dropdown-item" data-theme-choice="relax" role="menuitem"><span class="theme-choice-dot theme-relax-dot"></span><span data-i18n="theme_relax">${translations[currentLang].theme_relax}</span></button>
              <button type="button" class="dropdown-item" data-theme-choice="dark" role="menuitem"><span class="theme-choice-dot theme-dark-dot"></span><span data-i18n="theme_dark">${translations[currentLang].theme_dark}</span></button>
              <button type="button" class="dropdown-item" data-theme-choice="light" role="menuitem"><span class="theme-choice-dot theme-light-dot"></span><span data-i18n="theme_light">${translations[currentLang].theme_light}</span></button>
            </div>
          </div>
          <button type="button" class="menu-trigger" id="menuTrigger" aria-expanded="false" aria-controls="fullscreenMenu">
            <span class="menu-icon" aria-hidden="true"><i></i><i></i><i></i></span>
            <span class="menu-word" data-i18n="menu_btn">${translations[currentLang].menu_btn}</span>
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
  const page=location.pathname.replace(/\/+$/,'')||'/';
  document.querySelectorAll('.nav-links a').forEach(a=>{
    if(a.getAttribute('href').split('#')[0]===page)a.classList.add('active');
  });
  updateThemeLabel();
}

function buildFooter(){
  document.getElementById('site-footer').innerHTML=`<footer class="site-footer"><div class="container footer-grid"><div><div class="brand footer-brand"><img class="footer-logo" src="${SITE.logo}" alt="5lo Photography" decoding="async"><span class="brand-copy"><strong>5lo</strong><em>Photography</em></span></div></div><div class="footer-actions"><span data-i18n="footer_loc">${translations[currentLang].footer_loc}</span><a href="/terms" data-i18n="footer_terms">${translations[currentLang].footer_terms}</a><a href="#top" data-i18n="footer_top">${translations[currentLang].footer_top}</a></div></div><div class="container footer-bottom"><div class="footer-signature"><span>5lo Photography</span><span>v${SITE.version}</span></div><a class="dev-credit" href="https://ayancybers.store/info" target="_blank" rel="noopener noreferrer" aria-label="Ayan Developer — ${translations[currentLang].dev_credit}"><span class="dev-credit-label" data-i18n="dev_credit">${translations[currentLang].dev_credit}</span><span class="dev-credit-name">Ayan Developer</span><span class="dev-credit-icon" aria-hidden="true">&lt;/&gt;</span><span class="dev-credit-arrow" aria-hidden="true">↗</span></a></div></footer><div class="social-float" id="socialFloat"><div class="social-menu" id="socialMenu" aria-hidden="true"><a href="https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('مرحباً، أود الاستفسار عن خدمات 5lo Photography')}" target="_blank" rel="noopener noreferrer"><span class="social-icon icon-whatsapp" aria-hidden="true"></span><span data-i18n="social_whatsapp">${translations[currentLang].social_whatsapp}</span></a><a href="https://instagram.com/${SITE.instagram}" target="_blank" rel="noopener noreferrer"><span class="social-icon icon-instagram" aria-hidden="true"></span><span data-i18n="social_instagram">${translations[currentLang].social_instagram}</span></a><a href="https://www.tiktok.com/@${SITE.tiktok}" target="_blank" rel="noopener noreferrer"><span class="social-icon icon-tiktok" aria-hidden="true"></span><span data-i18n="social_tiktok">${translations[currentLang].social_tiktok}</span></a></div><button type="button" class="social-toggle" id="socialToggle" aria-expanded="false" aria-label="Social"><span class="social-chat-icon" aria-hidden="true"></span></button></div>`
}
function applyThemeMeta(){
  const colors={relax:'#25373a',dark:'#03070c',light:'#f4f8f9'};
  const meta=document.querySelector('meta[name="theme-color"]');
  if(meta)meta.setAttribute('content',colors[currentTheme]||colors.relax);
}
function setTheme(theme){
  if(!['relax','dark','light'].includes(theme))theme='relax';
  currentTheme=theme;
  localStorage.setItem('site_theme',theme);
  document.documentElement.dataset.theme=theme;
  applyThemeMeta();
  updateThemeLabel();
  closeDropdowns()
}
function updateThemeLabel(){
  const el=document.getElementById('currentThemeLabel');
  if(el)el.textContent=translations[currentLang][`theme_${currentTheme}`]||translations[currentLang].theme_relax;
  syncDropdownState();
}
function syncDropdownState(){
  document.querySelectorAll('[data-theme-choice]').forEach(item=>item.classList.toggle('selected',item.dataset.themeChoice===currentTheme));
  document.querySelectorAll('[data-lang]').forEach(item=>item.classList.toggle('selected',item.dataset.lang===currentLang));
}
function changeLanguage(lang){
  currentLang=lang==='en'?'en':'ar';
  localStorage.setItem('site_lang',currentLang);
  document.documentElement.lang=currentLang;
  document.documentElement.dir=currentLang==='ar'?'rtl':'ltr';
  document.documentElement.classList.toggle('lang-en',currentLang==='en');
  document.documentElement.classList.toggle('lang-ar',currentLang==='ar');
  if(document.body.classList.contains('page-terms'))document.title=`${translations[currentLang].terms_title} | 5lo Photography`;
  applyTranslations();
  const l=document.getElementById('currentLangLabel');
  if(l)l.textContent=currentLang==='ar'?'AR':'EN';
  const a=document.querySelector('.announcement-bar span');
  if(a)a.textContent=translations[currentLang].announcement_text;
  updateThemeLabel();
  closeDropdowns()
}
function applyTranslations(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const v=translations[currentLang][el.dataset.i18n];
    if(v!=null)el.innerHTML=v
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
    const v=translations[currentLang][el.dataset.i18nPlaceholder];
    if(v!=null)el.placeholder=v
  })
}
function closeDropdowns(){
  document.querySelectorAll('.dropdown-menu.active').forEach(x=>x.classList.remove('active'));
  document.querySelectorAll('[data-dropdown][aria-expanded="true"]').forEach(x=>x.setAttribute('aria-expanded','false'))
}
function initChrome(){
  document.querySelectorAll('[data-dropdown]').forEach(btn=>btn.addEventListener('click',e=>{
    e.stopPropagation();
    const menu=document.getElementById(btn.dataset.dropdown);
    if(!menu)return;
    const active=menu.classList.contains('active');
    closeDropdowns();
    if(!active){
      menu.classList.add('active');
      btn.setAttribute('aria-expanded','true')
    }
  }));
  document.querySelectorAll('[data-lang]').forEach(btn=>btn.addEventListener('click',()=>changeLanguage(btn.dataset.lang)));
  document.querySelectorAll('[data-theme-choice]').forEach(btn=>btn.addEventListener('click',()=>setTheme(btn.dataset.themeChoice)));
  document.getElementById('menuTrigger')?.addEventListener('click',()=>toggleMenu());
  document.getElementById('closeMenu')?.addEventListener('click',()=>toggleMenu(false));
  document.querySelectorAll('#fullscreenMenu a').forEach(a=>a.addEventListener('click',()=>toggleMenu(false)));
  document.addEventListener('click',e=>{
    if(!e.target.closest('.dropdown-wrap'))closeDropdowns();
    if(!e.target.closest('#socialFloat'))closeSocialMenu()
  });
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'){
      closeDropdowns();
      toggleMenu(false);
      closeSocialMenu()
    }
  })
}
function toggleMenu(open){
  const menu=document.getElementById('fullscreenMenu');
  if(!menu)return;
  const next=typeof open==='boolean'?open:!menu.classList.contains('active');
  menu.classList.toggle('active',next);
  menu.setAttribute('aria-hidden',String(!next));
  document.getElementById('menuTrigger')?.setAttribute('aria-expanded',String(next));
  document.body.classList.toggle('menu-open',next)
}
function closeSocialMenu(){
  const w=document.getElementById('socialFloat');
  if(!w)return;
  w.classList.remove('social-open');
  w.querySelector('.social-menu')?.setAttribute('aria-hidden','true');
  w.querySelector('.social-toggle')?.setAttribute('aria-expanded','false')
}
function initSocial(){
  document.getElementById('socialToggle')?.addEventListener('click',e=>{
    e.stopPropagation();
    const w=document.getElementById('socialFloat');
    if(!w)return;
    const open=w.classList.toggle('social-open');
    w.querySelector('.social-menu')?.setAttribute('aria-hidden',String(!open));
    w.querySelector('.social-toggle')?.setAttribute('aria-expanded',String(open))
  })
}
function initVideos(){
  const inViewport=v=>{
    if(!v.isConnected||v.closest('.is-hidden'))return false;
    const r=v.getBoundingClientRect();
    return r.width>0&&r.height>0&&r.bottom>0&&r.top<window.innerHeight
  };
  const startVideo=v=>{
    v.controls=false;
    v.muted=true;
    v.defaultMuted=true;
    v.autoplay=false;
    v.playsInline=true;
    v.preload='none';
    v.setAttribute('muted','');
    v.removeAttribute('autoplay');
    v.setAttribute('playsinline','');
    v.setAttribute('webkit-playsinline','');
    const play=()=>{
      if(document.hidden||!inViewport(v))return;
      const p=v.play();
      if(p&&typeof p.catch==='function')p.catch(()=>{});
    };
    v.addEventListener('loadeddata',play);
    v.addEventListener('pause',()=>{
      if(!document.hidden&&inViewport(v))play();
    });
  };
  document.querySelectorAll('video').forEach(startVideo);
  const resumeVideos=()=>{
    document.querySelectorAll('video').forEach(v=>{
      if(!inViewport(v))return;
      v.muted=true;
      const p=v.play();
      if(p&&typeof p.catch==='function')p.catch(()=>{});
    });
  };
  document.addEventListener('touchstart',resumeVideos,{once:true,passive:true});
  document.addEventListener('pointerdown',resumeVideos,{once:true,passive:true});
  document.addEventListener('visibilitychange',()=>{
    if(document.visibilityState==='visible')resumeVideos();
  });
  if('IntersectionObserver'in window){
    const o=new IntersectionObserver(es=>es.forEach(e=>{
      if(e.isIntersecting){
        const v=e.target;
        v.preload='metadata';
        if(v.networkState===HTMLMediaElement.NETWORK_EMPTY)v.load();
        if(inViewport(v)){
          const p=v.play();
          if(p&&typeof p.catch==='function')p.catch(()=>{});
        }
      }else e.target.pause();
    }),{threshold:.01,rootMargin:'120px 0px'});
    document.querySelectorAll('video').forEach(v=>o.observe(v));
  }else{
    document.querySelectorAll('video').forEach(v=>{
      v.preload='metadata';
      v.load();
      if(inViewport(v)){const p=v.play();if(p&&typeof p.catch==='function')p.catch(()=>{})}
    });
  }
}
function initPackageButtons(){
  document.querySelectorAll('.package-select').forEach(b=>b.addEventListener('click',()=>{
    const s=document.getElementById('packageSelect');
    if(!s)return;
    s.value=b.dataset.package;
    document.getElementById('contact')?.scrollIntoView({
      behavior:'smooth'
    });
    setTimeout(()=>document.getElementById('clientName')?.focus(),350)
  }))
}
function cleanText(v,max){
  return String(v||'').replace(/[\u0000-\u001F\u007F]/g,' ').replace(/\s+/g,' ').trim().slice(0,max)
}
function selectText(id){
  const s=document.getElementById(id);
  return s?.selectedIndex>=0?s.options[s.selectedIndex].textContent.trim():''
}
const cooldown=60000,duplicateWindow=600000;
let bookingLoadedAt=Date.now();
function setStatus(key,state){
  const e=document.getElementById('bookingStatus');
  if(e){
    e.textContent=translations[currentLang][key]||'';
    e.dataset.state=state||''
  }
}
async function submitBooking(e){
  e.preventDefault();
  const form=e.currentTarget;
  if(document.getElementById('websiteField')?.value.trim())return;
  const termsConsent=document.getElementById('termsConsent');
  if(termsConsent&&!termsConsent.checked){setStatus('terms_required','error');termsConsent.focus();return}
  if(Date.now()-bookingLoadedAt<2500){
    setStatus('booking_wait','warn');
    return
  }
  const last=Number(localStorage.getItem('booking_last_sent_at')||0);
  if(Date.now()-last<cooldown){
    setStatus('booking_wait','warn');
    return
  }
  if(!form.checkValidity()){
    form.reportValidity();
    setStatus('booking_invalid','error');
    return
  }
  const phone=document.getElementById('clientPhone').value.replace(/\D/g,'');
  const name=cleanText(document.getElementById('clientName').value,50);
  const notes=cleanText(document.getElementById('clientDetails').value,500);
  if(!/^05\d{8}$/.test(phone)||name.length<2||notes.length<3){
    setStatus('booking_invalid','error');
    return
  }
  const packageKey=document.getElementById('packageSelect').value;
  const pack=PACKAGE_VALUES[packageKey];
  if(!pack){
    setStatus('booking_invalid','error');
    return
  }
  const values={
    name,phone,packageKey,packageType:selectText('packageSelect'),carTypeKey:document.getElementById('vehicleType').value,carType:selectText('vehicleType'),vehicleModel:cleanText(document.getElementById('vehicleModel').value,80),shootRegionKey:document.getElementById('clientCity').value,shootRegion:selectText('clientCity'),bookingDayKey:document.getElementById('bookingDay').value,bookingDay:selectText('bookingDay'),notes,acceptedTerms:true,termsVersion:'1.0',honeypot:'',loadedAt:bookingLoadedAt,visitorId:getVisitorIdentity().visitorId
  };
  const fp=[name.toLowerCase(),phone,packageKey,values.shootRegionKey,values.bookingDayKey,values.carTypeKey,values.vehicleModel.toLowerCase(),notes.toLowerCase()].join('|');
  const prev=localStorage.getItem('booking_last_fingerprint');
  const prevAt=Number(localStorage.getItem('booking_last_fingerprint_at')||0);
  if(fp===prev&&Date.now()-prevAt<duplicateWindow){
    setStatus('booking_duplicate','warn');
    return
  }
  const submit=document.getElementById('bookingSubmit');
  submit.disabled=true;
  setStatus('booking_sending','busy');
  const message=currentLang==='ar'?`مرحباً 5lo Photography، أرغب بحجز موعد:\n- الاسم: ${name}\n- رقم التواصل: ${phone}\n- يوم الحجز: ${values.bookingDay}\n- المدينة: ${values.shootRegion}\n- نوع السيارة: ${values.carType}\n- الماركة والموديل: ${values.vehicleModel||'غير محدد'}\n- الباقة: ${pack.ar}\n- التفاصيل: ${notes}`:`Hello 5lo Photography, I would like to book a session:\n- Name: ${name}\n- Phone: ${phone}\n- Booking Day: ${values.bookingDay}\n- City: ${values.shootRegion}\n- Vehicle Type: ${values.carType}\n- Make & Model: ${values.vehicleModel||'Not specified'}\n- Package: ${pack.en}\n- Details: ${notes}`;
  const whatsappUrl=`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
  const whatsappWindow=window.open('about:blank','_blank');
  try{
    const r=await fetch('/api/book',{
      method:'POST',headers:{
        'Content-Type':'application/json'
      },body:JSON.stringify(values),keepalive:true
    });
    if(!r.ok)console.warn('Booking API returned',r.status)
  }
  catch(err){
    console.warn('Booking API unavailable:',err)
  }
  finally{
    localStorage.setItem('booking_last_sent_at',String(Date.now()));
    localStorage.setItem('booking_last_fingerprint',fp);
    localStorage.setItem('booking_last_fingerprint_at',String(Date.now()));
    setStatus('booking_success','success');
    form.reset();
    if(whatsappWindow){whatsappWindow.location.href=whatsappUrl}else{window.location.assign(whatsappUrl)}
    setTimeout(()=>submit.disabled=false,cooldown)
  }
}
function initBooking(){
  bookingLoadedAt=Date.now();
  document.getElementById('bookingForm')?.addEventListener('submit',submitBooking);
  document.getElementById('clientPhone')?.addEventListener('input',e=>{
    e.target.value=e.target.value.replace(/\D/g,'').slice(0,10)
  });
  ['clientName','vehicleModel','clientDetails'].forEach(id=>document.getElementById(id)?.addEventListener('input',e=>{
    e.target.value=e.target.value.replace(/[\u0000-\u001F\u007F]/g,'').slice(0,Number(e.target.maxLength||500))
  }))
}
function initGallery(){
  const grid=document.getElementById('galleryGrid');
  if(!grid)return;
  const cards=[...grid.querySelectorAll('.media-card')];
  const count=document.getElementById('galleryCount');
  let lightbox=document.getElementById('galleryLightbox');
  if(!lightbox){
    lightbox=document.createElement('div');
    lightbox.className='gallery-lightbox';
    lightbox.id='galleryLightbox';
    lightbox.hidden=true;
    lightbox.setAttribute('role','dialog');
    lightbox.setAttribute('aria-modal','true');
    lightbox.setAttribute('aria-label',currentLang==='ar'?'عرض الصورة':'Image viewer');
    const close=document.createElement('button');
    close.type='button';close.className='gallery-lightbox-close';close.setAttribute('aria-label',currentLang==='ar'?'إغلاق الصورة':'Close image');close.textContent='×';
    const image=document.createElement('img');image.className='gallery-lightbox-image';
    lightbox.append(close,image);document.body.append(lightbox)
  }
  const lightboxImage=lightbox.querySelector('.gallery-lightbox-image');
  const lightboxClose=lightbox.querySelector('.gallery-lightbox-close');
  let returnFocus=null;
  const closeLightbox=()=>{lightbox.hidden=true;document.body.classList.remove('gallery-lightbox-open');if(returnFocus?.isConnected)returnFocus.focus()};
  lightboxClose.addEventListener('click',closeLightbox);
  lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!lightbox.hidden)closeLightbox()});
  cards.filter(card=>card.querySelector('img')).forEach(card=>{
    const image=card.querySelector('img');
    card.tabIndex=0;card.setAttribute('role','button');
    card.setAttribute('aria-label',currentLang==='ar'?`عرض صورة ${image.alt}`:`View ${image.alt}`);
    const openImage=()=>{returnFocus=card;lightboxImage.src=image.currentSrc||image.src;lightboxImage.alt=image.alt;lightbox.hidden=false;document.body.classList.add('gallery-lightbox-open');lightboxClose.focus()};
    card.addEventListener('click',openImage);
    card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openImage()}})
  });
  const apply=cat=>{
    let n=0;
    cards.forEach((c,i)=>{
      const match=cat==='all'||c.dataset.category===cat;
      c.classList.toggle('is-hidden',!match);
      if(match){
        n++;
        c.style.setProperty('--filter-delay',`${Math.min(i*35,180)}ms`)
      }
    });
    if(count)count.textContent=`${n} / ${cards.length}`;
    initReveal()
  };
  document.querySelectorAll('.filter-btn').forEach(b=>b.addEventListener('click',()=>{
    document.querySelectorAll('.filter-btn').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    apply(b.dataset.filter)
  }));
  apply('all');
  document.querySelectorAll('.motion-photo').forEach(card=>{
    card.addEventListener('pointermove',e=>{
      if(e.pointerType!=='mouse')return;
      const r=card.getBoundingClientRect();
      card.style.setProperty('--mx',`${((e.clientX-r.left)/r.width)*100}%`);
      card.style.setProperty('--my',`${((e.clientY-r.top)/r.height)*100}%`)
    });
    card.addEventListener('pointerleave',()=>{
      card.style.setProperty('--mx','50%');
      card.style.setProperty('--my','50%')
    })
  })
}
function initReveal(){
  const items=[...document.querySelectorAll('.site-reveal,.reveal-item')];
  if(!items.length)return;
  if(!('IntersectionObserver'in window)){
    items.forEach(x=>x.classList.add('is-visible'));
    return
  }
  const o=new IntersectionObserver(es=>es.forEach(e=>{
    if(!e.isIntersecting)return;
    e.target.classList.add('is-visible');
    o.unobserve(e.target)
  }),{
    threshold:.12,rootMargin:'0px 0px -40px 0px'
  });
  items.forEach((x,i)=>{
    x.style.setProperty('--reveal-delay',`${Math.min((i%4)*70,210)}ms`);
    o.observe(x)
  })
}
function initTransitions(){
  document.documentElement.classList.add('page-ready');
  document.querySelectorAll('a[href]').forEach(link=>{
    const h=link.getAttribute('href')||'';
    if(!h||h.startsWith('#')||h.startsWith('http')||h.startsWith('mailto:')||h.startsWith('tel:')||link.target==='_blank')return;
    link.addEventListener('click',e=>{
      const u=new URL(link.href,location.href);
      if(u.origin!==location.origin)return;
      e.preventDefault();
      document.body.classList.add('page-leaving');
      setTimeout(()=>location.href=u.href,160)
    })
  })
}
function enableProtection(){
  const formField=t=>t&&['INPUT','TEXTAREA','SELECT'].includes(t.tagName);
  let noticeTimer;
  const warnVisitor=()=>{
    let notice=document.getElementById('code-protection-notice');
    if(!notice){
      notice=document.createElement('div');
      notice.id='code-protection-notice';
      notice.className='code-protection-notice';
      notice.setAttribute('role','status');
      notice.setAttribute('aria-live','polite');
      document.body.append(notice)
    }
    notice.textContent=currentLang==='ar'?'محتوى 5lo Photography محمي.':'5lo Photography content is protected.';
    notice.classList.add('is-visible');
    clearTimeout(noticeTimer);
    noticeTimer=setTimeout(()=>notice.classList.remove('is-visible'),2800)
  };
  document.addEventListener('contextmenu',e=>{
    if(!formField(e.target)){e.preventDefault();warnVisitor()}
  });
  document.addEventListener('dragstart',e=>{
    if(e.target.matches?.('img,video')){e.preventDefault();warnVisitor()}
  });
  document.addEventListener('keydown',e=>{
    const k=String(e.key).toLowerCase();
    const zoomShortcut=(e.ctrlKey||e.metaKey)&&['+','=','-','_','0'].includes(k);
    const blocked=zoomShortcut||e.key==='F12'||(e.ctrlKey&&e.shiftKey&&['i','j','c','k'].includes(k))||(e.ctrlKey&&k==='u')||(e.metaKey&&e.altKey&&['i','j','c'].includes(k))||(e.metaKey&&k==='u');
    if(blocked){
      e.preventDefault();
      e.stopPropagation();
      warnVisitor()
    }
  },true)
  const blockGesture=e=>e.preventDefault();
  ['gesturestart','gesturechange','gestureend'].forEach(name=>document.addEventListener(name,blockGesture,{passive:false}));
  document.addEventListener('touchmove',e=>{if(e.touches?.length>1)e.preventDefault()},{passive:false});
  console.warn('%c5lo Photography — content protected. Do not copy or reuse without permission.','color:#b9c6c3;font-weight:bold');
}
function initHomeLoader(){
  const loader=document.getElementById('home-loader');
  if(!loader)return;
  const progress=document.getElementById('homeLoaderProgress');
  const percent=document.getElementById('homeLoaderPercent');
  const state=document.getElementById('homeLoaderState');
  const started=performance.now();
  const minimum=850;
  const hardLimit=1800;
  let finished=false;
  const labels=currentLang==='ar'?['نجهّز المشهد','نضبط التركيز','نجهّز التجربة']:['PREPARING THE FRAME','FOCUSING THE LENS','SETTING THE EXPERIENCE'];
  const finish=()=>{
    if(finished)return;
    finished=true;
    if(progress)progress.style.width='100%';
    if(percent)percent.textContent='100%';
    if(state)state.textContent=labels[2];
    setTimeout(()=>{
      loader.classList.add('is-hidden');
      document.body.classList.add('home-loaded')
    },180);
    setTimeout(()=>loader.remove(),820);
  };
  const tick=(now)=>{
    if(finished)return;
    const elapsed=now-started;
    const ready=document.readyState==='complete';
    const t=Math.min(1,elapsed/(ready?minimum:hardLimit));
    const eased=1-Math.pow(1-t,3);
    const value=ready?Math.min(96,Math.round(eased*96)):Math.min(86,Math.round(eased*86));
    const idx=value<38?0:value<74?1:2;
    loader.style.setProperty('--progress',value+'%');
    if(progress)progress.style.width=value+'%';
    if(percent)percent.textContent=value+'%';
    if(state)state.textContent=labels[idx];
    if((ready&&elapsed>=minimum)||(elapsed>=hardLimit))finish();
    else requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function randomId(prefix){
  try{
    if(globalThis.crypto?.randomUUID)return `${prefix}_${globalThis.crypto.randomUUID()}`;
    const bytes=new Uint8Array(16);
    globalThis.crypto?.getRandomValues?.(bytes);
    if(bytes.some(Boolean))return `${prefix}_${Array.from(bytes,b=>b.toString(16).padStart(2,'0')).join('')}`;
  }catch{}
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2,10)}`;
}
function getVisitorIdentity(){
  let visitorId='';
  let sessionId='';
  let newSession=false;
  try{
    visitorId=localStorage.getItem('5lo_visitor_id')||'';
    if(!visitorId){
      visitorId=randomId('v');
      localStorage.setItem('5lo_visitor_id',visitorId);
    }
    sessionId=sessionStorage.getItem('5lo_session_id')||'';
    if(!sessionId){
      sessionId=randomId('s');
      sessionStorage.setItem('5lo_session_id',sessionId);
      newSession=true;
    }
  }catch{}
  return {visitorId,sessionId,newSession};
}
function trackPageView(){
  if(!['http:','https:'].includes(location.protocol))return;
  const identity=getVisitorIdentity();
  const navigationEntry=performance.getEntriesByType?.('navigation')?.[0];
  const connection=navigator.connection?.effectiveType||'';
  const payload={
    event:'page_view',
    page:location.pathname,
    title:document.title,
    language:currentLang,
    theme:currentTheme,
    referrer:document.referrer||'',
    visitorId:identity.visitorId,
    sessionId:identity.sessionId,
    newSession:identity.newSession,
    viewport:`${window.innerWidth}x${window.innerHeight}`,
    screen:`${window.screen?.width||0}x${window.screen?.height||0}`,
    timezone:Intl.DateTimeFormat().resolvedOptions().timeZone||'',
    platform:navigator.platform||'',
    connection,
    navigation:navigationEntry?.type||''
  };
  fetch('/api/log',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(payload),
    keepalive:true
  }).catch(()=>{});
}

function init(){
  initHomeLoader();
  buildHeader();
  buildFooter();
  document.documentElement.dataset.theme=currentTheme;
applyThemeMeta();
  document.documentElement.lang=currentLang;
  document.documentElement.dir=currentLang==='ar'?'rtl':'ltr';
  document.documentElement.classList.toggle('lang-en',currentLang==='en');
  document.documentElement.classList.toggle('lang-ar',currentLang==='ar');
  if(document.body.classList.contains('page-terms'))document.title=`${translations[currentLang].terms_title} | 5lo Photography`;
  initChrome();
  initSocial();
  initVideos();
  initPackageButtons();
  initBooking();
  initGallery();
  applyTranslations();
  const a=document.querySelector('.announcement-bar span');
  if(a)a.textContent=translations[currentLang].announcement_text;
  updateThemeLabel();
  initReveal();
  initTransitions();
  enableProtection();
  trackPageView()
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{
  once:true
});
else init();
