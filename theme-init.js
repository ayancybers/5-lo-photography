(() => {
  try {
    const themes = ["relax", "dark", "light"];
    const saved = localStorage.getItem("site_theme_v2");
    document.documentElement.dataset.theme = themes.includes(saved) ? saved : "dark";
    const language = localStorage.getItem("site_lang_v2") === "ar" ? "ar" : "en";
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  } catch {
    document.documentElement.dataset.theme = "dark";
    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";
  }
})();
