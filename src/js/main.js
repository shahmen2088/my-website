// Получаем элементы слайдера

const sliders = document.querySelectorAll(".slider");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

let slideCount = 0;
let slideIndex = 0;
// let currentSlider = 0;

function updateSlider() {
  for (let i = 0; i < sliders.length; i++) {
    const slides = sliders[i].querySelectorAll(".slider__photo");
    console.log(slides.length);
    slideCount = slides.length;
    slides.forEach((slide, index) => {
      if (index === slideIndex) {
        slide.style.display = "block";
      } else {
        slide.style.display = "none";
      }
    });
  }
}

//Устанавливаем обработчик событий для кнопок

prevButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

//Функция для показа предыдущего слайда

function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

//Функция для обновления отображения слайдера

//Инициализация слайдера

updateSlider();
