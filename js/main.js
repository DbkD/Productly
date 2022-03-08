$(document).ready(function(){
   $('.strategies__slider').slick({
      dots: true,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      speed: 1000,
      responsive: [
         {
            breakpoint: 1220, 
               settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
               }
         }, 
         {  breakpoint: 800, 
               settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: true,
                  dots: false,
               }
         }
      ]
   });
}); 

$(document).ready(function(){
   $('.menu__burger').click(function(){
      $('.menu__burger, .menu, .menu__list, .menu__list-item, .menu__list-link, .top').toggleClass('open-menu')
   });




});