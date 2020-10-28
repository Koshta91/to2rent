$(function(){
    $('.slider').slick({
        nextArrow: '<button class="slick__arrow slick-next"><img src="images/next.svg" alt="prev next"></button>',
        prevArrow: '<button class="slick__arrow slick-prev"><img src="images/prev.svg" alt="prev prev"></button>',
        responsive: [
            {
                breakpoint: 441,
                settings: {
                    arrows: false
                }
        
            }    
        ]    
    });
});







