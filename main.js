// Бургер меню

const menu = document.querySelector("#menu");
const popup = document.querySelector("#popup");

menu.addEventListener("click", menuHandler);

// Выполняем действие при клике
function menuHandler(e) {
  e.preventDefault();
  // Переключаем стили при клике
  menu.classList.toggle("open-menu");
  popup.classList.toggle("open");
}
