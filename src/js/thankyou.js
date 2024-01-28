window.addEventListener('DOMContentLoaded', () => {
  const thanksRefs = {
    openModalBtn: document.querySelectorAll('[data-open-thanks]'),
    closeModalBtn: document.querySelector('[data-close-thanks]'),
    modal: document.querySelector('[data-backdrop-thanks]'),
  };


  function openThanksModal(backdrop) {
    const modal = document.querySelector(backdrop);
    modal.classList.add('is-hidden');
    modal.classList.remove('animate__zoomIn');
    thanksRefs.modal.classList.remove('is-hidden');
    thanksRefs.modal.classList.add('animate__fadeInRight');
    thanksRefs.modal.classList.remove('animate__zoomOut');
  }

  function closeThanksModal() {
    thanksRefs.modal.classList.add('is-hidden');
    thanksRefs.modal.classList.remove('animate__fadeInRight');
    thanksRefs.modal.classList.add('animate__zoomOut');
  }




  thanksRefs.openModalBtn.forEach(btn =>
    btn.addEventListener(
      'click', (event) => {
          event.preventDefault();
          openThanksModal('[ data-backdrop-review]');        
          // openThanksModal('[data-backdrop-loved]');
          // openThanksModal('[data-backdrop-subscribe]');
      }
    )
  );



  thanksRefs.closeModalBtn.addEventListener('click', closeThanksModal);
});
