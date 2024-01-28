window.addEventListener('DOMContentLoaded', () => {

    const refs = {
      openModalBtn: document.querySelector('[data-open-review]'),
      closeModalBtn: document.querySelector('[data-close-review]'),
      modal: document.querySelector('[data-backdrop-review]'),
    };
  
    refs.closeModalBtn.addEventListener('click', closeModal);
  
    function openModal() {
      refs.modal.classList.toggle('is-hidden');
      refs.modal.classList.add('animate__zoomIn');
      refs.modal.classList.remove('animate__zoomOut');
    }
    function closeModal() {
      refs.modal.classList.toggle('is-hidden');
      refs.modal.classList.remove('animate__zoomIn');
      refs.modal.classList.add('animate__zoomOut');
    }
  
    refs.openModalBtn.addEventListener('click', openModal);
  
  });
  