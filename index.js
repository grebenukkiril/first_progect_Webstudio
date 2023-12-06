// Отримання елементів з HTML
const modal = document.querySelector("#modal");
const modalHeader = document.querySelector("#modal-header");
const modalBody = document.querySelector("#modal-body");
const modalFooter = document.querySelector("#modal-footer");

// Функція для відкриття модального вікна
function openModal() {
  // Відкриваємо модальне вікно
  modal.style.display = "block";
}

// Функція для закриття модального вікна
function closeModal() {
  // Закриваємо модальне вікно
  modal.style.display = "none";
}

// При кліку на кнопку "Відкрити модальне вікно"
document.querySelector("#open-modal").addEventListener("click", openModal);

// При кліку на кнопку "Закрити"
document.querySelector("#close-modal").addEventListener("click", closeModal);

// Додавання закриття за допомогою клавіші Esc
document.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    closeModal();
  }
});
