(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) return;
  document.documentElement.classList.add("motion-ready");
  const targets = document.querySelectorAll(
    ".reveal-item,.service-card,.package-v57-card,.terms-card,.v4-mini-card,.showcase-card",
  );
  if (!targets.length) return;
  const groups = document.querySelectorAll(
    ".works-grid,.service-grid,.packages-v57-grid,.terms-grid",
  );
  groups.forEach((group) =>
    [...group.children].forEach((item, index) => {
      item.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 85}ms`);
    })
  );
  const observer = new IntersectionObserver((entries, io) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      io.unobserve(entry.target);
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
  targets.forEach((el) => observer.observe(el));
})();
