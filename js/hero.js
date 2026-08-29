/* =========================================================
   S & I DENTAL CLINIC — HERO
   hero.js
   ========================================================= */

(function () {

  "use strict";


  /* =======================================================
     HERO SLIDER
     ======================================================= */

  const slider = document.querySelector(".si-hero__slider");

  if (!slider) return;


  const slides = slider.querySelectorAll(".si-hero__slide");
  const dots = slider.querySelectorAll(".si-hero__dots span");


  if (slides.length <= 1) return;


  let currentSlide = 0;

  /*
     Change image every 3 seconds.
     The CSS transition handles the smooth fade.
  */
  const SLIDE_INTERVAL = 3000;


  function showSlide(index) {

    slides.forEach((slide, i) => {
      slide.classList.toggle(
        "is-active",
        i === index
      );
    });


    dots.forEach((dot, i) => {
      dot.classList.toggle(
        "is-active",
        i === index
      );
    });


    currentSlide = index;
  }


  function nextSlide() {

    const next =
      (currentSlide + 1) % slides.length;

    showSlide(next);
  }


  /* Start slider */

  let sliderTimer = setInterval(
    nextSlide,
    SLIDE_INTERVAL
  );


  /* =======================================================
     PAUSE WHILE HOVERING
     ======================================================= */

  slider.addEventListener(
    "mouseenter",
    function () {

      clearInterval(sliderTimer);

    }
  );


  slider.addEventListener(
    "mouseleave",
    function () {

      clearInterval(sliderTimer);

      sliderTimer = setInterval(
        nextSlide,
        SLIDE_INTERVAL
      );

    }
  );


  /* =======================================================
     PAUSE WHEN TAB IS NOT VISIBLE
     ======================================================= */

  document.addEventListener(
    "visibilitychange",
    function () {

      if (document.hidden) {

        clearInterval(sliderTimer);

      } else {

        clearInterval(sliderTimer);

        sliderTimer = setInterval(
          nextSlide,
          SLIDE_INTERVAL
        );

      }

    }
  );


  /* =======================================================
     INITIAL STATE
     ======================================================= */

  showSlide(0);

})();