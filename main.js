document.getElementById('site-header').innerHTML = `
    <div id="announcementBar">
        <span id="announcementText" data-i18n="announcement_text">
            💚 عروض اليوم الوطني 96: خصم خاص على الباقة الملكية لتصبح بـ 196 ريال فقط! كل عام ووطنا بخير
        </span>
    </div>

    <header>
        <div class="container nav-container">
            <div class="logo-wrapper">
                <a href="index.html" class="logo">
                    5lo <span>Photographer</span>
                </a>

                <img
                    src="https://l.top4top.io/p_391495qim1.png"
                    alt="Cinematic Car Photographer 🎥"
                    class="logo-img"
                    onerror="this.style.display='none'"
                >
            </div>

                <div class="nav-controls" id="navControlsContainer">
                    <a href="packages.html#contact"
                       class="btn-main"
                       id="quickBookingBtn"
                       style="padding: 8px 14px; font-size: 13px;">
                        <span data-i18n="quick_booking">حجز سريع</span>
                        💬
                    </a>

                    <div class="dropdown-wrapper">
                        <button
                            type="button"
                            class="dropdown-trigger"
                            onclick="toggleDropdown(event, 'langDropdown')"
                            style="min-width: 95px; justify-content: space-between;">

                            <span id="currentLangLabel">العربية SA</span>
                            <span>▲</span>
                        </button>

                        <div
                            class="dropdown-menu"
                            id="langDropdown"
                            style="width: 130px;">

                            <button
                                type="button"
                                class="dropdown-item"
                                onclick="changeLanguage('ar')">
                                العربية SA
                            </button>

                            <button
                                type="button"
                                class="dropdown-item"
                                onclick="changeLanguage('en')">
                                English US
                            </button>
                        </div>
                    </div>

                    <div class="dropdown-wrapper">
                        <button
                            type="button"
                            class="dropdown-trigger"
                            onclick="toggleDropdown(event, 'themeDropdown')">

                            <span style="display: flex; align-items: center; gap: 6px;">
                                <span>▼</span>
                                <span id="currentThemeLabel">
                                    اليوم الوطني السعودي 💚
                                </span>
                            </span>
                        </button>

                        <div class="dropdown-menu" id="themeDropdown">
                            <button
                                type="button"
                                class="dropdown-item"
                                onclick="setTheme(
                                    'saudi',
                                    'اليوم الوطني السعودي 💚',
                                    'Saudi National Day 96'
                                )">
                                <span data-i18n="theme_saudi">
                                    اليوم الوطني السعودي 💚
                                </span>
                            </button>

                            <button
                                type="button"
                                class="dropdown-item"
                                onclick="setTheme('relax', 'الوضع الهادئ 🍃', 'Relax')">
                                <span data-i18n="theme_relax">Relax</span>
                            </button>

                            <button
                                type="button"
                                class="dropdown-item"
                                onclick="setTheme('dark', 'الوضع الداكن 🌙', 'Dark')">
                                <span data-i18n="theme_dark">Dark</span>
                            </button>

                            <button
                                type="button"
                                class="dropdown-item"
                                onclick="setTheme(
                                    'light',
                                    'المود الفاتح ☀️',
                                    'Light Mode'
                                )">
                                <span data-i18n="theme_light">
                                    المود الفاتح ☀️
                                </span>
                            </button>
                        </div>
                    </div>

                    <button
                        type="button"
                        class="menu-trigger"
                        onclick="toggleFullscreenMenu()">
                        ☰
                        <span data-i18n="menu_btn">القائمة</span>
                    </button>
                </div>

            <nav class="nav-links">
                    <a href="index.html"
                       data-i18n="nav_home"
                       id="link-index">
                        الرئيسية
                    </a>

                    <a href="works.html"
                       data-i18n="nav_works"
                       id="link-works">
                        المعرض
                    </a>

                    <a href="services.html"
                       data-i18n="nav_services"
                       id="link-services">
                        الخدمات
                    </a>

                    <a href="packages.html"
                       data-i18n="nav_packages"
                       id="link-packages">
                        الباقات والحجز
                    </a>
            </nav>
        </div>
    </header>

    <div class="fullscreen-menu" id="fullscreenMenu">
        <button
            type="button"
            class="close-menu"
            onclick="toggleFullscreenMenu()">
            ✕
        </button>

        <a href="index.html"
           onclick="toggleFullscreenMenu()"
           data-i18n="nav_home">
            الرئيسية
        </a>

        <a href="works.html"
           onclick="toggleFullscreenMenu()"
           data-i18n="nav_works">
            المعرض
        </a>

        <a href="services.html"
           onclick="toggleFullscreenMenu()"
           data-i18n="nav_services">
            الخدمات
        </a>

        <a href="packages.html"
           onclick="toggleFullscreenMenu()"
           data-i18n="nav_packages">
            الباقات والحجز
        </a>
    </div>
`;

document.getElementById('site-footer').innerHTML = `
    <footer>
        <div class="container footer-flex">
            <p>
                © 2026 5lo Photographer.
                <span data-i18n="footer_rights">
                    جميع الحقوق محفوظة.
                </span>
            </p>

            <div style="display: flex; gap: 24px; flex-wrap: wrap;">
                <span data-i18n="footer_loc">
                    الدمام / الخبر / القطيف
                </span>

                <a
                    href="#top"
                    style="color: var(--accent);"
                    data-i18n="footer_top">
                    العودة للأعلى ↑
                </a>
            </div>
        </div>
    </footer>

    <div class="social-float" id="socialFloat">
        <div class="social-menu" id="socialMenu" aria-hidden="true">
            <a
                href="https://wa.me/966597561765?text=مرحباً، أود الاستفسار عن خدمات Cinematic Car Photographer 🎥"
                class="social-option whatsapp-option"
                target="_blank"
                rel="noopener noreferrer"
                data-i18n="social_whatsapp"
                aria-label="واتساب">
                <span class="social-option-icon">💬</span>
                <span>واتساب</span>
            </a>

            <a
                href="https://instagram.com/5lo.63"
                class="social-option instagram-option"
                target="_blank"
                rel="noopener noreferrer"
                data-i18n="social_instagram"
                aria-label="انستقرام">
                <span class="social-option-icon">◎</span>
                <span>انستقرام</span>
            </a>

            <a
                href="https://www.tiktok.com/@xzlav.1"
                class="social-option tiktok-option"
                target="_blank"
                rel="noopener noreferrer"
                data-i18n="social_tiktok"
                aria-label="تيك توك">
                <span class="social-option-icon">♪</span>
                <span>تيك توك</span>
            </a>
        </div>

        <button
            type="button"
            class="wa-float social-toggle"
            id="socialToggle"
            onclick="toggleSocialMenu(event)"
            aria-expanded="false"
            aria-controls="socialMenu"
            aria-label="التواصل الاجتماعي">
            💬
        </button>
    </div>
`;

const currentPage = window.location.pathname.split('/').pop() || 'index.html';

if (currentPage.includes('index')) {
    document.getElementById('link-index')?.classList.add('active');
}
if (currentPage.includes('works')) {
    document.getElementById('link-works')?.classList.add('active');
}
if (currentPage.includes('services')) {
    document.getElementById('link-services')?.classList.add('active');
}
if (currentPage.includes('packages')) {
    document.getElementById('link-packages')?.classList.add('active');
}

const translations = {
    ar: {
        nav_home: 'الرئيسية',
        nav_works: 'المعرض',
        nav_services: 'الخدمات',
        nav_packages: 'الباقات والحجز',
        menu_btn: 'القائمة',
        quick_booking: 'حجز سريع',
        social_whatsapp: 'واتساب',
        social_instagram: 'انستقرام',
        social_tiktok: 'تيك توك',
        announcement_text: '💚 عروض اليوم الوطني 96: خصم خاص على الباقة الملكية لتصبح بـ 196 ريال فقط! كل عام ووطنا بخير',
        theme_saudi: 'اليوم الوطني السعودي 💚',
        theme_relax: 'الوضع الهادئ 🍃',
        theme_dark: 'الوضع الداكن 🌙',
        theme_light: 'المود الفاتح ☀️',
        filter_all: 'الكل',
        filter_videos: 'فيديوهات',
        filter_photos: 'صور',
        load_msg_1: 'جاري تهيئة الاستوديو وتحميل عناصر الصفحة...',
        load_msg_2: 'جاري تجهيز مقاطع الفيديو والسينمائيات...',
        load_msg_3: 'كل شيء جاهز تقريباً، استعد للانطلاق! 🚀',
        hero_badge: 'استوديو تصوير السيارات — الدمام، الخبر، والقطيف',
        hero_title: 'خلِّ سيارتك <span style="color: var(--accent);">تتحرك</span> حتى وهي ثابتة.',
        hero_desc: 'نصنع للسيارات حضوراً يُرى ويُحس. صورة دقيقة، فيلم قصير بإيقاعه، وذاكرة تستحق أن تُحفظ.',
        btn_start: 'ابدأ مشروعك',
        btn_works: 'استعرض الأعمال',
        sec1_badge: 'الأعمال',
        sec1_t1: 'التفاصيل ليست',
        sec1_t2: 'تفصيلاً.',
        photo_badge_1: '01 / صور ثابتة',
        photo_title_1: 'لقطة إضافية 1',
        photo_badge_2: '02 / صور ثابتة',
        photo_title_2: 'لقطة إضافية 2',
        photo_badge_3: '03 / صور ثابتة',
        photo_title_3: 'لقطة إضافية 3',
        photo_badge_4: '04 / صور ثابتة',
        photo_title_4: 'لقطة إضافية 4',
        sec2_badge: 'المشهد الثاني / ماذا نصنع',
        sec2_t1: 'من اللمعة الأولى إلى',
        sec2_t2: 'آخر فريم.',
        serv1_title: 'تصوير فوتوغرافي',
        serv1_desc: 'صور خارجية وداخلية، لقطات تفصيلية، وبورتريه للسيارة بإضاءة احترافية.',
        serv2_title: 'فيديو سينمائي',
        serv2_desc: 'فيلم قصير يترجم شخصية سيارتك إلى حركة، صوت، وإيقاع يعلق في الذاكرة.',
        serv3_title: 'محتوى السوشال',
        serv3_desc: 'حزمة عمودية سريعة الإيقاع جاهزة للنشر، من الريلز إلى القصص والحملات.',
        serv4_title: 'تغطية الفعاليات',
        serv4_desc: 'نوثق تجمعك أو فعاليتك كما حدثت تماماً بكل تفاصيلها وحماسها.',
        sec3_badge: 'المشهد الثالث / اختر إيقاعك',
        sec3_t1: 'باقات واضحة.',
        sec3_t2: 'نتيجة لا تُنسى.',
        currency: 'ر.س',
        pkg_btn: 'احجز الباقة',
        pkg1_badge: '01 / البداية',
        pkg1_title: 'رولينق بدون مونتاج',
        pkg1_desc: 'تصوير رولينق فقط وتسليم المقاطع الأصلية.',
        pkg1_f1: '✓ تصوير رولينق فقط.',
        pkg1_f2: '✓ تسليم الملفات الأصلية.',
        pkg2_badge: '02 / الأكثر طلباً',
        pkg2_title: 'رولينق + مونتاج',
        pkg2_desc: 'تغطية متحركة بإيقاع احترافي وجاهزة للنشر.',
        pkg2_f1: '✓ تصوير رولينق + 10 مقاطع',
        pkg2_f2: '✓ مونتاج احترافي مع مؤثرات صوتية',
        pkg2_f3: '✓ 3 صور بتعديل مميز',
        pkg3_badge: '03 / التغطية الكاملة',
        pkg3_title: 'رولينق + ثابتة',
        pkg3_desc: 'إبراز السيارة أثناء الحركة والسكون في جلسة واحدة.',
        pkg3_f1: '✓ تصوير رولينق وثابتة',
        pkg3_f2: '✓ مونتاج متكامل',
        pkg3_f3: '✓ +5 صور معدلة باحترافية',
        pkg4_badge: '04 / الإنتاج الكامل',
        pkg4_title: 'التصوير السينمائي',
        pkg4_desc: 'فكرة إبداعية متكاملة من الزاوية الأولى إلى الإخراج النهائي.',
        pkg4_f1: '✓ تصوير سينمائي متكامل',
        pkg4_f2: '✓ زوايا وأفكار خاصة',
        pkg4_f3: '✓ مونتاج سينمائي عالي الجودة',
        contact_badge: 'المشهد الأخير / لنبدأ',
        contact_t1: 'جاهز تخلي سيارتك',
        contact_t2: 'تُرى؟',
        contact_desc: 'أرسل لنا نوع سيارتك، موقعك، وما تتخيله. سنعود لك في أقرب وقت لتأكيد الموعد.',
        contact_whatsapp: 'واتساب:',
        contact_instagram: 'انستقرام:',
        form_name: 'الاسم',
        form_name_placeholder: 'كيف نناديك؟',
        form_phone: 'رقم التواصل',
        form_phone_placeholder: '05XXXXXXXX',
        form_phone_title: 'يجب أن يتكون رقم التواصل من 10 أرقام ويبدأ بـ 05',
        form_city: 'المدينة',
        city_select: 'اختر المدينة',
        city_dammam: 'الدمام',
        city_khobar: 'الخبر',
        city_qatif: 'القطيف',
        form_vehicle_type: 'نوع السيارة',
        vehicle_select: 'اختر نوع السيارة',
        vehicle_sedan: 'سيدان',
        vehicle_suv: 'دفع رباعي',
        vehicle_luxury: 'سيارة فاخرة',
        vehicle_sports: 'سيارة رياضية',
        vehicle_coupe: 'كوبيه',
        vehicle_pickup: 'بيك أب',
        vehicle_classic: 'كلاسيكية',
        vehicle_other: 'أخرى',
        form_vehicle_model: 'الماركة والموديل (اختياري)',
        vehicle_model_placeholder: 'مثال: Ford Mustang 2024',
        form_pkg: 'نوع الباقة أو الطلب',
        form_select: 'اختر الباقة المناسبة',
        pkg_option_1: 'رولينق بدون مونتاج (70 ر.س)',
        pkg_option_2: 'رولينق + مونتاج (96 ر.س)',
        pkg_option_3: 'رولينق + ثابتة (200 ر.س)',
        pkg_option_4: 'التصوير السينمائي (450 ر.س)',
        form_details: 'تفاصيل إضافية',
        form_details_placeholder: 'نوع السيارة، ملاحظاتك...',
        form_submit: 'إرسال عبر الواتساب ←',
        footer_rights: 'جميع الحقوق محفوظة.',
        footer_loc: 'الدمام / الخبر / القطيف',
        footer_top: 'العودة للأعلى ↑'
    },
    en: {
        nav_home: 'Home',
        nav_works: 'Gallery',
        nav_services: 'Services',
        nav_packages: 'Packages & Booking',
        menu_btn: 'Menu',
        quick_booking: 'Quick Booking',
        social_whatsapp: 'WhatsApp',
        social_instagram: 'Instagram',
        social_tiktok: 'TikTok',
        announcement_text: '💚 SA National Day 96 Offers: Special discount on the Royal Package for only 196 SAR! Happy National Day',
        theme_saudi: 'Saudi National Day 96',
        theme_relax: 'Relax',
        theme_dark: 'Dark',
        theme_light: 'Light Mode ☀️',
        filter_all: 'All',
        filter_videos: 'Videos',
        filter_photos: 'Photos',
        load_msg_1: 'Initializing studio and loading page elements...',
        load_msg_2: 'Preparing cinematic videos and footage...',
        load_msg_3: 'Almost ready, get ready to launch! 🚀',
        hero_badge: 'Automotive photographer — Dammam, Khobar, & Qatif',
        hero_title: 'Make your car <span style="color: var(--accent);">move</span> while staying still.',
        hero_desc: 'We give cars a living presence. Precise photography, rhythmic short films, and timeless memories.',
        btn_start: 'Start Project',
        btn_works: 'View Works',
        sec1_badge: 'Works',
        sec1_t1: 'Details are not',
        sec1_t2: 'just details.',
        photo_badge_1: '01 / Still Photo',
        photo_title_1: 'Extra Shot 1',
        photo_badge_2: '02 / Still Photo',
        photo_title_2: 'Extra Shot 2',
        photo_badge_3: '03 / Still Photo',
        photo_title_3: 'Extra Shot 3',
        photo_badge_4: '04 / Still Photo',
        photo_title_4: 'Extra Shot 4',
        sec2_badge: 'Scene 2 / What We Do',
        sec2_t1: 'From the first gloss to',
        sec2_t2: 'the final frame.',
        serv1_title: 'Photography',
        serv1_desc: 'Exterior & interior shots, detail clips, and car portraits with professional lighting.',
        serv2_title: 'Cinematic Video',
        serv2_desc: 'A short film translating the car character into motion, sound, and memorable rhythm.',
        serv3_title: 'Social Content',
        serv3_desc: 'Fast-paced vertical packages ready to publish, from reels to stories and campaigns.',
        serv4_title: 'Event Coverage',
        serv4_desc: 'Documenting your gathering or event exactly as it happened with all details and excitement.',
        sec3_badge: 'Scene 3 / Choose Your Rhythm',
        sec3_t1: 'Clear packages.',
        sec3_t2: 'Unforgettable results.',
        currency: 'SAR',
        pkg_btn: 'Book Package',
        pkg1_badge: '01 / Beginning',
        pkg1_title: 'Rolling w/o Edit',
        pkg1_desc: 'Rolling shots only with original files delivered.',
        pkg1_f1: '✓ Rolling shots only.',
        pkg1_f2: '✓ Original files delivery.',
        pkg2_badge: '02 / Most Popular',
        pkg2_title: 'Rolling + Edit',
        pkg2_desc: 'Dynamic coverage with professional rhythm, ready to publish.',
        pkg2_f1: '✓ Rolling shots + 10 clips',
        pkg2_f2: '✓ Pro editing with sound effects',
        pkg2_f3: '✓ 3 custom-edited photos',
        pkg3_badge: '03 / Full Coverage',
        pkg3_title: 'Rolling + Static',
        pkg3_desc: 'Highlighting the car in motion and stillness in one session.',
        pkg3_f1: '✓ Rolling & static shots',
        pkg3_f2: '✓ Complete editing',
        pkg3_f3: '✓ +5 professionally edited photos',
        pkg4_badge: '04 / Full Production',
        pkg4_title: 'Cinematic Production',
        pkg4_desc: 'A complete creative concept from the first angle to final direction.',
        pkg4_f1: '✓ Full cinematic coverage',
        pkg4_f2: '✓ Special angles & concepts',
        pkg4_f3: '✓ High-quality cinematic edit',
        contact_badge: "Final Scene / Let's Start",
        contact_t1: 'Ready to make your car',
        contact_t2: 'seen?',
        contact_desc: 'Send us your car model, location, and your vision. We will get back to you promptly to confirm the appointment.',
        contact_whatsapp: 'WhatsApp:',
        contact_instagram: 'Instagram:',
        form_name: 'Name',
        form_name_placeholder: 'What should we call you?',
        form_phone: 'Phone Number',
        form_phone_placeholder: '05XXXXXXXX',
        form_phone_title: 'Enter a 10-digit phone number starting with 05',
        form_city: 'City',
        city_select: 'Select a city',
        city_dammam: 'Dammam',
        city_khobar: 'Khobar',
        city_qatif: 'Qatif',
        form_vehicle_type: 'Vehicle Type',
        vehicle_select: 'Select vehicle type',
        vehicle_sedan: 'Sedan',
        vehicle_suv: 'SUV',
        vehicle_luxury: 'Luxury',
        vehicle_sports: 'Sports Car',
        vehicle_coupe: 'Coupe',
        vehicle_pickup: 'Pickup',
        vehicle_classic: 'Classic',
        vehicle_other: 'Other',
        form_vehicle_model: 'Make & Model (Optional)',
        vehicle_model_placeholder: 'Example: Ford Mustang 2024',
        form_pkg: 'Package / Request Type',
        form_select: 'Choose appropriate package',
        pkg_option_1: 'Rolling without editing (70 SAR)',
        pkg_option_2: 'Rolling + Editing (96 SAR)',
        pkg_option_3: 'Rolling + Static Photos (200 SAR)',
        pkg_option_4: 'Cinematic Production (450 SAR)',
        form_details: 'Additional Details',
        form_details_placeholder: 'Car model, your notes...',
        form_submit: 'Send via WhatsApp ←',
        footer_rights: 'All rights reserved.',
        footer_loc: 'Dammam / Khobar / Qatif',
        footer_top: 'Back to top ↑'
    }
};

let currentLang = localStorage.getItem('site_lang') || 'ar';


const validThemes = ['saudi', 'relax', 'dark', 'light'];
const themeInitialized = localStorage.getItem('site_theme_initialized');

if (themeInitialized !== '1') {
    localStorage.setItem('site_theme', 'relax');
    localStorage.setItem('theme_label_ar', 'الوضع الهادئ 🍃');
    localStorage.setItem('theme_label_en', 'Relax');
    localStorage.setItem('site_theme_initialized', '1');
}

let currentTheme = localStorage.getItem('site_theme');
if (!validThemes.includes(currentTheme)) {
    currentTheme = 'relax';
}

let currentThemeLabelAr = localStorage.getItem('theme_label_ar') || 'الوضع الهادئ 🍃';
let currentThemeLabelEn = localStorage.getItem('theme_label_en') || 'Relax';

document.documentElement.setAttribute('lang', currentLang);
document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
document.documentElement.setAttribute('data-theme', currentTheme);

function toggleDropdown(event, dropdownId) {
    event.stopPropagation();
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        if (menu.id !== dropdownId) {
            menu.classList.remove('active');
        }
    });
    document.getElementById(dropdownId)?.classList.toggle('active');
}

window.addEventListener('click', () => {
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.classList.remove('active');
    });
    closeSocialMenu();
});

window.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        closeSocialMenu();
    }
});

function setTheme(themeName, labelAr, labelEn) {
    currentTheme = themeName;
    currentThemeLabelAr = labelAr;
    currentThemeLabelEn = labelEn;
    localStorage.setItem('site_theme', themeName);
    localStorage.setItem('theme_label_ar', labelAr);
    localStorage.setItem('theme_label_en', labelEn);
    document.documentElement.setAttribute('data-theme', themeName);
    updateLabels();
}

function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('site_lang', lang);
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    adjustQuickBookingPosition();
    applyTranslations();
}

function adjustQuickBookingPosition() {
    const container = document.getElementById('navControlsContainer');
    const quickBtn = document.getElementById('quickBookingBtn');
    if (!container || !quickBtn) return;
    container.prepend(quickBtn);
}

function updateLabels() {
    const themeLabel = document.getElementById('currentThemeLabel');
    const languageLabel = document.getElementById('currentLangLabel');
    const announcementText = document.getElementById('announcementText');

    if (themeLabel) {
        const themeNames = {
            saudi: { ar: 'اليوم الوطني السعودي 💚', en: 'Saudi National Day 96' },
            relax: { ar: 'الوضع الهادئ 🍃', en: 'Relax' },
            dark: { ar: 'الوضع الداكن 🌙', en: 'Dark' },
            light: { ar: 'المود الفاتح ☀️', en: 'Light Mode' }
        };
        themeLabel.textContent = themeNames[currentTheme]?.[currentLang] || (currentLang === 'ar' ? currentThemeLabelAr : currentThemeLabelEn);
    }

    if (languageLabel) {
        languageLabel.textContent = currentLang === 'ar' ? 'العربية SA' : 'English US';
    }

    if (announcementText) {
        announcementText.textContent = translations[currentLang].announcement_text;
    }
}

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translatedText = translations[currentLang]?.[key];
        if (!translatedText) return;

        const formControl = element.querySelector('input, select, textarea');
        if (formControl) {
            const textNode = Array.from(element.childNodes).find(node => node.nodeType === Node.TEXT_NODE && node.nodeValue.trim().length > 0);
            if (textNode) {
                textNode.nodeValue = translatedText + '\n';
            } else {
                element.insertBefore(document.createTextNode(translatedText + '\n'), element.firstChild);
            }
        } else {
            element.innerHTML = translatedText;
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const translatedText = translations[currentLang]?.[key];
        if (translatedText) element.placeholder = translatedText;
    });

    document.querySelectorAll('[data-i18n-title]').forEach(element => {
        const key = element.getAttribute('data-i18n-title');
        const translatedText = translations[currentLang]?.[key];
        if (translatedText) element.title = translatedText;
    });

    document.querySelectorAll('input:not([type="tel"]), textarea, select').forEach(element => {
        element.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
        element.style.textAlign = currentLang === 'ar' ? 'right' : 'left';
    });

    const phoneInput = document.getElementById('clientPhone');
    if (phoneInput) {
        phoneInput.dir = 'ltr';
        phoneInput.style.textAlign = currentLang === 'ar' ? 'right' : 'left';
    }

    updateLabels();
}


function toggleSocialMenu(event) {
    event?.stopPropagation();

    const wrapper = document.getElementById('socialFloat');
    const menu = document.getElementById('socialMenu');
    const toggle = document.getElementById('socialToggle');

    if (!wrapper || !menu || !toggle) return;

    const isOpen = wrapper.classList.toggle('social-open');

    menu.setAttribute('aria-hidden', String(!isOpen));
    toggle.setAttribute('aria-expanded', String(isOpen));
}

function closeSocialMenu() {
    const wrapper = document.getElementById('socialFloat');
    const menu = document.getElementById('socialMenu');
    const toggle = document.getElementById('socialToggle');

    if (!wrapper || !menu || !toggle) return;

    wrapper.classList.remove('social-open');
    menu.setAttribute('aria-hidden', 'true');
    toggle.setAttribute('aria-expanded', 'false');
}

function toggleFullscreenMenu() {
    document.getElementById('fullscreenMenu')?.classList.toggle('active');
}

function selectPackage(packageName) {
    const packageSelect = document.getElementById('packageSelect');
    if (packageSelect) packageSelect.value = packageName;

    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
}



function forceVideoAutoplay() {
    const videos = document.querySelectorAll('video');

    videos.forEach(video => {
        video.muted = true;
        video.defaultMuted = true;
        video.playsInline = true;
        video.setAttribute('muted', '');
        video.setAttribute('playsinline', '');
        video.setAttribute('webkit-playsinline', '');

        const playNow = () => {
            const promise = video.play();
            if (promise && typeof promise.catch === 'function') {
                promise.catch(() => {});
            }
        };

        if (video.readyState >= 2) {
            playNow();
        } else {
            video.addEventListener('loadeddata', playNow, { once: true });
            video.addEventListener('canplay', playNow, { once: true });
        }
    });

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const video = entry.target;
                if (entry.isIntersecting && video.paused) {
                    const promise = video.play();
                    if (promise && typeof promise.catch === 'function') {
                        promise.catch(() => {});
                    }
                }
            });
        }, { threshold: 0.15 });

        videos.forEach(video => observer.observe(video));
    }
}


function enableBasicClientDeterrents() {
    document.addEventListener('contextmenu', event => event.preventDefault());
    document.addEventListener('keydown', event => {
        const key = event.key.toLowerCase();
        const blockedShortcut = event.key === 'F12' || (event.ctrlKey && event.shiftKey && ['i', 'j', 'c'].includes(key)) || (event.ctrlKey && key === 'u');
        if (blockedShortcut) {
            event.preventDefault();
            event.stopPropagation();
        }
    }, true);
}

function reportVisit() {
    fetch('/api/log', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            userAgent: navigator.userAgent,
            page: window.location.pathname,
            language: currentLang
        }),
        keepalive: true
    }).catch(error => {
        console.warn('Visit logging failed:', error);
    });
}

function initializeWebsite() {
    adjustQuickBookingPosition();
    applyTranslations();
    forceVideoAutoplay();
    enableBasicClientDeterrents();
    reportVisit();
}

if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', initializeWebsite);
} else {
    initializeWebsite();
}
