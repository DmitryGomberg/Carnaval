$(document).ready(function(){
   $('.menu__icon, .menu__close').click(function(event){
       $('.menu__icon, .menu__list').toggleClass('active');
       $('body').toggleClass('lock');
   });
   $('.s3__more').click(function(event){
      $('.spec').removeClass('hide');
      $('.s3__more').addClass('hide');
   });
   $('.more').slick({
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false,
      dots: true,
      responsive: [
         {
           breakpoint: 1380,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 2
           }
         },
         {
            breakpoint: 1320,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
         },
         {
           breakpoint: 800,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1
           }
         },
         {
           breakpoint: 300,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1
           }
         }
       ]
    });
    $('.inner').slick({
      slidesToShow: 2,
      slidesToScroll: 2,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
      responsive: [
         {
           breakpoint: 900,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1
           },
           
         }
       ]
    });
});   
