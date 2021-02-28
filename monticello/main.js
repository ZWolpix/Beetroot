$(document).ready(function () {

  $(".header__slider").slick({
    dots: true,
    dotsClass: "slider__dots",
    arrows: false,
  });
  
  const anchors = document.querySelectorAll('a[href*="#"]')
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()    
      const blockID = anchor.getAttribute('href').substr(1)    
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
      
  (function() {
    $(".nav__open_btn").on("click", (event) => toggleNav(event));
    function toggleNav(event) {
      $(event.currentTarget).toggleClass("nav__open_btn_active");
      $(".nav__list").toggleClass("nav__list_open");
    }
  })();
});