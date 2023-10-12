function toggleMenu() {
  const toggleMenu = document.querySelector(".togglemenu");
  const navigation = dcument.querySelector(".navigation");
  toggleMenu.classList.toggle("active");
  navigation.classList.toggle("active");
}
//end navigation

//swiper slide1
var swiper = new Swiper(".product-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".product-slider .swiper-button-next",
    prevEl: ".product-slider .swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});
//end swiper slide1
