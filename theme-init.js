(() => {
  try {
    const themes = ['relax', 'dark', 'light'];
    const saved = localStorage.getItem('site_theme');
    document.documentElement.dataset.theme = themes.includes(saved) ? saved : 'relax';
  } catch {
    document.documentElement.dataset.theme = 'relax';
  }
})();
