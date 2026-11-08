/**
 * Taptch — Minimal Coming Soon Page
 * Frontend-only interaction logic
 */

(function () {
  'use strict';

  const waitlistBtn = document.getElementById('waitlistBtn');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalDialog = document.getElementById('modalDialog');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const pageContainer = document.getElementById('pageContainer');

  let isModalOpen = false;

  function openModal() {
    if (isModalOpen) return;
    isModalOpen = true;

    modalBackdrop.classList.add('is-active');
    modalBackdrop.setAttribute('aria-hidden', 'false');
    waitlistBtn.setAttribute('aria-expanded', 'true');
    pageContainer.setAttribute('inert', '');

    // Focus close button for quick dismissal and keyboard navigation
    requestAnimationFrame(() => {
      modalCloseBtn.focus();
    });
  }

  function closeModal() {
    if (!isModalOpen) return;
    isModalOpen = false;

    modalBackdrop.classList.remove('is-active');
    modalBackdrop.setAttribute('aria-hidden', 'true');
    waitlistBtn.setAttribute('aria-expanded', 'false');
    pageContainer.removeAttribute('inert');

    // Return focus to the trigger button
    waitlistBtn.focus();
  }

  // Event Listeners
  waitlistBtn.addEventListener('click', openModal);
  modalCloseBtn.addEventListener('click', closeModal);

  // Close when clicking directly on the backdrop (outside modal dialog)
  modalBackdrop.addEventListener('click', function (event) {
    if (event.target === modalBackdrop) {
      closeModal();
    }
  });

  // Keyboard accessibility: Escape key to dismiss
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && isModalOpen) {
      event.preventDefault();
      closeModal();
    }
  });
})();
