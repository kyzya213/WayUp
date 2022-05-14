$(function () {
    $(window).scroll(function() { 
        $('.section-title').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass('animate__fadeInLeft')
            }
        });
    });
    $(window).scroll(function() { 
        $('.skill').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass('animate__fadeInUp')
            }
        });
    });
});