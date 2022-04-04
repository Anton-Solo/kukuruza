$( document ).ready(function(){
    $('.header-menu').on('click' , function() {
        $('.header-menu-popup').fadeIn(200)
    });

    $('.header-menu-popup .close').on('click' , function() {
        $('.header-menu-popup').fadeOut(200)
    });
    
});