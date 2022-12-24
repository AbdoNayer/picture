// Window Load screen

$(window).on('load', function () {

    // Loading Page
    $(".loader").fadeOut(500,function(){
        $(".loading").delay(1000).fadeOut(500);
    });
    $("body").css("overflow-y", "auto");

    // Animation Page
    AOS.init();

});

$(document).ready(function () {

    // Scroll Fix Header
    $(window).scroll(function () {
        if ($(window).width() > 767) {
            if($(this).scrollTop() > 30){
                $('header').addClass('header-fixed')
            }else{
                $('header').removeClass('header-fixed')
            }
        }
    });

    // Click Add class Link
    $(document).on("click", "header ul li",function(e) {
        e.preventDefault()
        $(this).addClass('active').siblings().removeClass('active');
    });

    // Scroll For Section
    $(document).on("click", ".header ul li a",function(e) {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top - 100
        }, 1000);
        e.preventDefault();
        if ($(window).width() < 990) {
            $(".handle").toggleClass("closed");
            $("header").toggleClass("back");
            $(".overlay").toggleClass("back");
         }
    });

    // Click Open Nav Mobile
    $(document).on("click", ".click-nav",function() {
        $(".handle").toggleClass("closed");
        $("header").toggleClass("back");
        $(".overlay").toggleClass("back");
    });

});