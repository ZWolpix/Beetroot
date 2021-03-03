$(document).ready(function() {

    $(".works__slider").slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      arrows: true
    });

    (function() {

        $(".nav__openbtn").on("click", (event) => toggleNav(event));
      
        function toggleNav(event) {
            $(event.currentTarget).toggleClass("nav__openbtn_active");
            $(".nav").toggleClass("nav_open");
      
          }
    })();
});