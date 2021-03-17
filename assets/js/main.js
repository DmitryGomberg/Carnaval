$(document).ready(function(){
   $('.menu__icon, .menu__close').click(function(event){
       $('.menu__icon, .menu__list').toggleClass('active');
       $('body').toggleClass('lock');
   });
});   