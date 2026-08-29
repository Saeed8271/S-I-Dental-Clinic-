/* =========================================================
   S & I DENTAL CLINIC — GALLERY
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('siGalleryLightbox');
  const lightboxImg = document.getElementById('siGalleryLightboxImage');
  const closeBtn = document.getElementById('siGalleryLightboxClose');
  const items = document.querySelectorAll('.si-gallery__item');

  if (!lightbox || !lightboxImg || !closeBtn || !items.length) return;

  let focusedItem;
  let closeTimeout;

  function openLightbox(item) {
    const img = item.querySelector('img');
    if (!img) return;

    focusedItem = item;

    lightboxImg.src = img.dataset.fullSrc || img.src;
    lightboxImg.alt = img.alt || '';

    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => closeBtn.focus());
  }

  function closeLightbox() {
    if (!lightbox.classList.contains('is-open')) return;

    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    clearTimeout(closeTimeout);

    closeTimeout = setTimeout(() => {
      if (!lightbox.classList.contains('is-open')) {
        lightboxImg.src = '';
        lightboxImg.alt = '';
      }
    }, 250);

    focusedItem?.focus();
    focusedItem = null;
  }

  items.forEach(item => {
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');

    item.addEventListener('click', () => openLightbox(item));

    item.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openLightbox(item);
      }
    });
  });

  closeBtn.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', event => {
    if (event.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && lightbox.classList.contains('is-open')) {
      closeLightbox();
    }
  });
});