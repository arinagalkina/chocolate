window.addEventListener("DOMContentLoaded",()=>{let e={openModalBtn:document.querySelector("[data-open-thanks]"),closeModalBtn:document.querySelector("[data-close-thanks]"),modal:document.querySelector("[data-backdrop-thanks]")};function a(a){let d=document.querySelector(a);e.openModalBtn.addEventListener("click",()=>(hiddenClass,void(d.classList.add("is-hidden"),d.classList.add("animate__zoomOut"),d.classList.remove("animate__zoomIn"),e.modal.classList.remove("is-hidden-thanks"),e.modal.classList.add("animate__zoomIn"),e.modal.classList.remove("animate__zoomOut")))),e.closeModalBtn.addEventListener("click",()=>(hiddenClass,void(e.modal.classList.add("is-hidden-thanks"),e.modal.classList.remove("animate__zoomIn"),e.modal.classList.add("animate__zoomOut"))))}e.openModalBtn.addEventListener("click",function(d){d.preventDefault(),e.openModalBtn.addEventListener("click",()=>a("[data-backdrop-review]")),e.closeModalBtn.addEventListener("click",()=>a("[data-backdrop-review]")),e.openModalBtn.addEventListener("click",()=>a("[data-backdrop-sellers]")),e.closeModalBtn.addEventListener("click",()=>a("[data-backdrop-sellers]"))})});
//# sourceMappingURL=index.6672ed88.js.map
