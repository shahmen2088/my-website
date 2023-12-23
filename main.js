// Бургер меню

const menu = document.querySelector("#menu");
const popup = document.querySelector("#popup");
const header = document.querySelector("#header");

menu.addEventListener("click", menuHandler);

function menuHandler(e) {
  e.preventDefault();
  menu.classList.toggle("open-menu");
  header.classList.toggle("open");
}

// Якорь smooth scroll

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    const blockID = item.getAttribute("href");
    document.querySelector(blockID).scrollIntoView({
      behavior: "smooth",
    });
  });
});

//Скролл страницы

var lastScrollTop = 0;

function onScroll() {
  window.addEventListener("scroll", callbackFunc);
  function callbackFunc() {
    var st = window.scrollY || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      header.classList.remove("active");
    } else if (st < lastScrollTop) {
      header.classList.add("active");
    }
    lastScrollTop = st <= 0 ? 0 : st;
  }
}

window.onload = function () {
  onScroll();
};
