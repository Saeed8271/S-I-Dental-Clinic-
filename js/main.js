/* =========================================================
   S & I DENTAL CLINIC — SHARED SITE BEHAVIOR
   main.js → runs on every page
   ========================================================= */

(function () {
  // Highlight the nav link matching the current page
  const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".si-navbar__links a[href]").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  // Footer year
  const yearEl = document.querySelector("[data-current-year]");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
