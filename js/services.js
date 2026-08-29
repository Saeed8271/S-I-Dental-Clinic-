/* =========================================================
   S & I DENTAL CLINIC — SERVICES PREVIEW
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const serviceCards = document.querySelectorAll(".si-service-card");
  const modal = document.querySelector(".si-service-modal");

  if (!serviceCards.length || !modal) return;

  const modalTitle = modal.querySelector(".si-service-modal__title");
  const modalDescription = modal.querySelector(
    ".si-service-modal__description"
  );
  const modalIcon = modal.querySelector(".si-service-modal__icon");
  const closeButton = modal.querySelector(".si-service-modal__close");


  /* =======================================================
     OPEN POPUP
     ======================================================= */

  serviceCards.forEach((card) => {

    const detailsLink = card.querySelector(".link-arrow");

    if (!detailsLink) return;


    detailsLink.addEventListener("click", (event) => {

      event.preventDefault();

      const title =
        card.querySelector("h3")?.textContent.trim() || "";

      const description =
        card.dataset.description || "";

      const iconUse =
        card.querySelector(".icon-badge use");


      /* -----------------------------------------------
         UPDATE TITLE
         ----------------------------------------------- */

      if (modalTitle) {
        modalTitle.textContent = title;
      }


      /* -----------------------------------------------
         UPDATE DESCRIPTION
         ----------------------------------------------- */

      if (modalDescription) {
        modalDescription.textContent = description;
      }


      /* -----------------------------------------------
         UPDATE ICON
         ----------------------------------------------- */

      if (modalIcon && iconUse) {

        const iconHref =
          iconUse.getAttribute("href");

        modalIcon.innerHTML = `
          <svg aria-hidden="true">
            <use href="${iconHref}"></use>
          </svg>
        `;

      }


      /* -----------------------------------------------
         OPEN MODAL
         ----------------------------------------------- */

      modal.classList.add("is-open");

      document.body.style.overflow = "hidden";


      /* -----------------------------------------------
         ACCESSIBILITY
         ----------------------------------------------- */

      if (closeButton) {
        closeButton.focus();
      }

    });

  });


  /* =======================================================
     CLOSE POPUP
     ======================================================= */

  function closeModal() {

    modal.classList.remove("is-open");

    document.body.style.overflow = "";

  }


  /* =======================================================
     CLOSE BUTTON
     ======================================================= */

  if (closeButton) {

    closeButton.addEventListener("click", closeModal);

  }


  /* =======================================================
     CLICK OUTSIDE POPUP
     ======================================================= */

  modal.addEventListener("click", (event) => {

    if (event.target === modal) {

      closeModal();

    }

  });


  /* =======================================================
     ESCAPE KEY
     ======================================================= */

  document.addEventListener("keydown", (event) => {

    if (
      event.key === "Escape" &&
      modal.classList.contains("is-open")
    ) {

      closeModal();

    }

  });

});

/* =========================================================
   S & I DENTAL CLINIC — SERVICES
   Before & After Comparison Sliders
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     BEFORE & AFTER SLIDERS
     ======================================================= */

  const sliders = document.querySelectorAll(".ba-slider");

  if (!sliders.length) return;


  sliders.forEach((slider) => {

    const range = slider.querySelector(".ba-range");

    if (!range) return;


    /* =====================================================
       UPDATE SLIDER POSITION
       ===================================================== */

    const updateSlider = (value) => {

      slider.style.setProperty(
        "--reveal",
        `${value}%`
      );

    };


    /* =====================================================
       INITIAL POSITION
       ===================================================== */

    updateSlider(range.value);


    /* =====================================================
       HANDLE SLIDER MOVEMENT
       ===================================================== */

    range.addEventListener("input", (event) => {

      updateSlider(event.target.value);

    });

  });

});