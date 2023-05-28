// A $( document ).ready() block.
$(document).ready(function() {
    $('.hamburger-button').click(function(){
        $('.mobile-menu').slideToggle(100);  
        $(this).toggleClass('active');
    });
});

