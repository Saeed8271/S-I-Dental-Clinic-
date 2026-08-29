/* =========================================================
   S & I DENTAL CLINIC — NAVBAR BEHAVIOR
   navbar.js
   ========================================================= */

(function () {
  const navbar = document.querySelector(".si-navbar");
  const toggle = document.getElementById("siNavToggle");
  const links = document.getElementById("siNavLinks");

  if (!navbar) return;

  /* =======================================================
     SCROLL STATE
     ======================================================= */

  const SCROLL_THRESHOLD = 24;

  function updateNavbarState() {
    const isScrolled = window.scrollY > SCROLL_THRESHOLD;

    navbar.classList.toggle("is-solid", isScrolled);
  }

  updateNavbarState();

  window.addEventListener(
    "scroll",
    updateNavbarState,
    { passive: true }
  );


  /* =======================================================
     MOBILE MENU
     ======================================================= */

  if (!toggle || !links) return;

  const linkItems = links.querySelectorAll(
    "a:not(.si-navbar__mobile-cta a)"
  );

  function openMenu() {
    links.classList.add("is-open");

    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");

    document.body.classList.add("nav-open");
  }

  function closeMenu() {
    links.classList.remove("is-open");

    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");

    document.body.classList.remove("nav-open");
  }

  function toggleMenu() {
    const isOpen = links.classList.contains("is-open");

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }


  /* Hamburger */

  toggle.addEventListener("click", toggleMenu);


  /* Close after clicking navigation link */

  linkItems.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });


  /* Close after clicking mobile CTA */

  const mobileCtas = links.querySelectorAll(
    ".si-navbar__mobile-cta a"
  );

  mobileCtas.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });


  /* Close with Escape */

  document.addEventListener("keydown", function (event) {

    if (
      event.key === "Escape" &&
      links.classList.contains("is-open")
    ) {
      closeMenu();
      toggle.focus();
    }

  });


  /* Close menu when resizing back to desktop */

  window.addEventListener("resize", function () {

    if (
      window.innerWidth > 991 &&
      links.classList.contains("is-open")
    ) {
      closeMenu();
    }

  });


  /* Close if user clicks outside the mobile menu */

  document.addEventListener("click", function (event) {

    if (
      !links.classList.contains("is-open") ||
      window.innerWidth > 991
    ) {
      return;
    }

    const clickedInsideNavbar =
      navbar.contains(event.target);

    if (!clickedInsideNavbar) {
      closeMenu();
    }

  });

})();