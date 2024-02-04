(() => {
  const refs = {
    openModalBtn: document.querySelectorAll("[data-open-modal]"),
    closeModalBtn: document.querySelectorAll("[data-close-modal]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();