window.addEventListener("DOMContentLoaded", () => {
    const thanksRefs = {
        openModalBtn: document.querySelector('[data-open-thanks]'),
        closeModalBtn: document.querySelector('[data-close-thanks]'),
        modal: document.querySelector('[data-backdrop-thanks]'),
    };

    function toggleThanksModal(backdrop) {
        const modal = document.querySelector(backdrop);

        
        function openThanksModal() {
            modal.classList.add('is-hidden');
            modal.classList.add('animate__zoomOut');
            modal.classList.remove('animate__zoomIn');
            thanksRefs.modal.classList.remove('is-hidden-thanks');
            thanksRefs.modal.classList.add('animate__zoomIn');
            thanksRefs.modal.classList.remove('animate__zoomOut');


        }


        function closeThanksModal() {
          
            thanksRefs.modal.classList.add('is-hidden-thanks');
            thanksRefs.modal.classList.remove('animate__zoomIn');
            thanksRefs.modal.classList.add('animate__zoomOut');
        }

        thanksRefs.openModalBtn.addEventListener('click', () => openThanksModal(backdrop, hiddenClass));
        thanksRefs.closeModalBtn.addEventListener('click', () => closeThanksModal(backdrop, hiddenClass));
    }

    // toggleThanksModal('[data-backdrop-review]');
    // toggleThanksModal('[data-backdrop-sellers]');


    thanksRefs.openModalBtn.addEventListener('click', function (event) {
        event.preventDefault();

        
        thanksRefs.openModalBtn.addEventListener('click', () => toggleThanksModal('[data-backdrop-review]'));
        thanksRefs.closeModalBtn.addEventListener('click', () => toggleThanksModal('[data-backdrop-review]'));

        thanksRefs.openModalBtn.addEventListener('click', () => toggleThanksModal('[data-backdrop-sellers]'));
        thanksRefs.closeModalBtn.addEventListener('click', () => toggleThanksModal('[data-backdrop-sellers]'));



    });
    
});
