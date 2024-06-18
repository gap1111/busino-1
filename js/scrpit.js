$(document).ready(function() {
    $('.slider-1').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        mouseDrag: false,
        dots: false
    })

    $('.slider-2').owlCarousel({
        items: 4,
        nav: true,
        loop: true,
        mouseDrag: false,
        dots: false
    })

    $('.slider-3').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        dots: false
    })

    $('.slider-4').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        dots: false
    })

    $('.homeslick').slick({
        slidesToShow: 2
    });


    window.onscroll = function() { myFunction() };

    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;

    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }

    AOS.init();

});