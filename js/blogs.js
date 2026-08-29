/* =========================================================
   S & I DENTAL CLINIC — BLOG PREVIEW
   Responsive mobile card navigation
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const blogSection = document.querySelector(".si-blog");
  const blogGrid = document.querySelector(".si-blog__grid");
  const nextButton = document.querySelector(".si-blog__next");
  const prevButton = document.querySelector(".si-blog__prev");

  if (!blogSection || !blogGrid || !nextButton || !prevButton) return;


  const cards = Array.from(
    blogGrid.querySelectorAll(".si-blog-card")
  );

  if (!cards.length) return;


  let currentIndex = 0;


  /* =======================================================
     MOBILE CHECK
     ======================================================= */

  const isMobile = () => {
    return window.matchMedia("(max-width: 575px)").matches;
  };


  /* =======================================================
     UPDATE CARD STATE
     ======================================================= */

  const updateCards = () => {

    if (!isMobile()) {

      cards.forEach(card => {
        card.classList.remove("is-active");
      });

      nextButton.style.display = "";
      prevButton.style.display = "";

      return;
    }


    cards.forEach((card, index) => {

      card.classList.toggle(
        "is-active",
        index === currentIndex
      );

    });


    /* -----------------------------------------------------
       Hide Next button on final card
       ----------------------------------------------------- */

    nextButton.style.display =
      currentIndex >= cards.length - 1
        ? "none"
        : "";


    /* -----------------------------------------------------
       Show "Go Back" once the user has moved past the
       first card, so they can return to a previous blog
       ----------------------------------------------------- */

    prevButton.style.display =
      currentIndex > 0
        ? ""
        : "none";


    /* -----------------------------------------------------
       Accessibility
       ----------------------------------------------------- */

    cards.forEach((card, index) => {

      const isActive = index === currentIndex;

      card.setAttribute(
        "aria-hidden",
        isActive ? "false" : "true"
      );

    });

  };


  /* =======================================================
     NEXT CARD
     ======================================================= */

  nextButton.addEventListener("click", () => {

    if (!isMobile()) return;


    if (currentIndex >= cards.length - 1) {
      return;
    }


    currentIndex++;


    updateCards();


    /* -----------------------------------------------------
       Keep active card visible
       ----------------------------------------------------- */

    const activeCard = cards[currentIndex];

    if (activeCard) {

      activeCard.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });

    }

  });


  /* =======================================================
     GO BACK (previous card)
     ======================================================= */

  prevButton.addEventListener("click", () => {

    if (!isMobile()) return;


    if (currentIndex <= 0) {
      return;
    }


    currentIndex--;


    updateCards();


    /* -----------------------------------------------------
       Keep active card visible
       ----------------------------------------------------- */

    const activeCard = cards[currentIndex];

    if (activeCard) {

      activeCard.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });

    }

  });


  /* =======================================================
     RESET WHEN SWITCHING BETWEEN BREAKPOINTS
     ======================================================= */

  let wasMobile = isMobile();


  window.addEventListener("resize", () => {

    const currentlyMobile = isMobile();


    if (currentlyMobile !== wasMobile) {

      currentIndex = 0;

      updateCards();

      wasMobile = currentlyMobile;

    }

  });


  /* =======================================================
     INITIALIZE
     ======================================================= */

  updateCards();

});