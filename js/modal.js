// Для открытия одной модалки

// (() =>{
//     const refs = {
//         openModalBtn: document.querySelector("[data-modal-open]"),
//         closeModalBtn: document.querySelector("[data-modal-close]"),
//         modal: document.querySelector("[data-modal]"),
//     };

//     refs.openModalBtn.addEventListener("click", toggleModal);
//     refs.closeModalBtn.addEventListener("click", toggleModal);

    
    
  

//     function toggleModal(){
//         refs.modal.classList.toggle("is-hidden");
//     }
// })();

// Для открытия нескольких модалок на странице

(() => {
    const refs = {
      openModalBtn: document.querySelectorAll('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
    };
  
  
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function openModal(item) {item.addEventListener('click', toggleModal)};
    refs.openModalBtn.forEach(openModal);
    
    
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();