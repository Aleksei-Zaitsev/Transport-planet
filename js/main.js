$(document).ready(function () {

    $('.open-modal').click(() => {
        $('#call-back-container').css('display', 'flex');
    });

    $('#call-bak-close-cancel, #call-bak-close-cancel2, #call-back-container').click((e) => {
        if (e.target.id === 'call-back-close-cancel' || e.target.id === 'call-back-close-cancel2' || e.target.id === 'call-back-container') {
            $('#call-back-container').css('display', 'none');
        }
    });

    $('#services-content').slick({
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
    $("#services-btn").click(function () {
        $('html, body').animate({
            scrollTop: $("#services-bg").offset().top
        }, 2000);
    });
    $("#plan-btn").click(function () {
        $('html, body').animate({
            scrollTop: $("#plan-container").offset().top
        }, 2000);
    });
    $(".services-item").click(function () {
        $('html, body').animate({
            scrollTop: $("#order").offset().top
        }, 2000);
    });
});