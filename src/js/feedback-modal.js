window.addEventListener('DOMContentLoaded', () => {
  const refs = {
    openModalBtn: document.querySelector('[data-open-feedback]'),
    closeModalBtn: document.querySelector('[data-close-feedback]'),
    modal: document.querySelector('[data-backdrop-feedback]'),
  };

  refs.closeModalBtn.addEventListener('click', closeModal);

  function openModal() {
    refs.modal.classList.remove('is-hidden');
    refs.modal.classList.add('animate__zoomIn');
    refs.modal.classList.remove('animate__zoomOut');
  }
  function closeModal() {
    refs.modal.classList.add('is-hidden');
    refs.modal.classList.remove('animate__zoomIn');
    refs.modal.classList.add('animate__zoomOut');
  }

  refs.openModalBtn.addEventListener('click', openModal);
});
