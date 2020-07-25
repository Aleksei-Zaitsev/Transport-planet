$(document).ready(function () {

    $('#team-content').slick({
        arrows: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
    });

    $("#about-btn").click(function () {
        $('html, body').animate({
            scrollTop: $("#about-container").offset().top
        }, 2000);
    });
    $("#order-btn").click(function () {
        $('html, body').animate({
            scrollTop: $("#order").offset().top
        }, 2000);
    });
    $("#team-btn").click(function () {
        $('html, body').animate({
            scrollTop: $("#team-bg").offset().top
        }, 2000);
    });
    $("#plan-btn").click(function () {
        $('html, body').animate({
            scrollTop: $("#plan-container").offset().top
        }, 2000);
    });
});