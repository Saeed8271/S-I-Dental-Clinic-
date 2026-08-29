/* =========================================================
   S & I DENTAL CLINIC — HOMEPAGE BEHAVIOR
   home.js
   ========================================================= */

(function () {
  // Wire up WhatsApp links using the shared config
  const waLinks = document.querySelectorAll("[data-whatsapp-link]");
  if (typeof siWhatsAppLink === "function") {
    waLinks.forEach((el) => el.setAttribute("href", siWhatsAppLink()));
  }

  // Gentle scroll-reveal for section content (respects reduced motion)
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const revealTargets = document.querySelectorAll("[data-reveal]");

  if (!prefersReducedMotion && "IntersectionObserver" in window && revealTargets.length) {
    // Only hide-then-reveal once we know JS can actually reveal it again
    document.documentElement.classList.add("js-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    revealTargets.forEach((el) => observer.observe(el));
  }
})();
