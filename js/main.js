$(document).ready(function () {

    //блок с заявкой


    let fromTo = $('#from-to');
    let tonSize = $('#ton-size');
    let goodName = $('#good-name');
    let date = $('#date');
    let price = $('#price');
    let comment = $('#comment');
    let clientName = $('#client-name');
    let companyName = $('#company-name');
    let clientPhone = $('#client-phone');
    let clientMail = $('#client-mail');

    var arrInputs = [fromTo, tonSize, goodName, date, price, comment, clientName, companyName, clientPhone, clientMail];


    $('#order-main-action-btn').click(function () {


        if (fromTo.val() && tonSize.val() && goodName.val() && date.val() && price.val() && comment.val() && comment.val() && clientName.val() && companyName.val() && clientPhone.val() && clientMail.val()) {
            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'fromTo=' + fromTo.val() + '&tonSize=' + tonSize.val()
                    + '&goodName=' + goodName.val() + '&date=' + date.val()
                    + '&price=' + price.val() + '&comment=' + comment.val()
                    + '&clientName=' + clientName.val() + '&companyName=' + companyName.val()
                    + '&clientPhone=' + clientPhone.val() + '&clientMail=' + clientMail.val(),
                success: () => {
                    $('#order-success-container').css('left', '0px');
                },
                error: () => {
                    alert('Ошибка бронирования. Свяжитесь, пожалуйста, по номеру телефона.');
                }
            })
            for (let i = 0; i < 10; i++) {
                arrInputs[i].css('box-shadow', '0 0 5px rgba(26, 245, 26, 0.45)');
                arrInputs[i].css('borderColor', 'rgba(26, 245, 26, 0.45)');
                arrInputs[i].parent('.order-input').children(".order-input-title").children('svg').css('fill', 'rgba(26, 245, 26, 0.45)');
            }

        } else {
            for (let i = 0; i < 10; i++) {
                if (!arrInputs[i].val()) {
                    arrInputs[i].css('box-shadow', '0 0 5px 1px rgba(232, 12, 47, 0.75)');
                    arrInputs[i].css('borderColor', 'rgba(232, 12, 47, 0.75)');
                    arrInputs[i].parent('.order-input').children(".order-input-title").children('svg').css('fill', 'rgba(232, 12, 47, 0.75)');
                }
                if (arrInputs[i].val()) {
                    arrInputs[i].css('box-shadow', '0 0 5px rgba(26, 245, 26, 0.45)');
                    arrInputs[i].css('borderColor', 'rgba(26, 245, 26, 0.45)');
                    arrInputs[i].parent('.order-input').children(".order-input-title").children('svg').css('fill', 'rgba(26, 245, 26, 0.45)');
                }
            }
        }

    });
    for ( let x = 0; x < 10; x++) {
        arrInputs[x].blur(function () {
            if (!arrInputs[x].val()) {
                arrInputs[x].css('box-shadow', '0 0 5px 1px rgba(232, 12, 47, 0.75)');
                arrInputs[x].css('borderColor', 'rgba(232, 12, 47, 0.75)');
                arrInputs[x].parent('.order-input').children(".order-input-title").children('svg').css('fill', 'rgba(232, 12, 47, 0.75)');
            } else {
                arrInputs[x].css('box-shadow', '0 0 5px rgba(26, 245, 26, 0.45)');
                arrInputs[x].css('borderColor', 'rgba(26, 245, 26, 0.45)');
                arrInputs[x].parent('.order-input').children(".order-input-title").children('svg').css('fill', 'rgba(26, 245, 26, 0.45)');
            }
        })
        arrInputs[x].focus( function () {
            arrInputs[x].css('box-shadow', '0 0 5px rgba(26, 245, 26, 0.45)');
            arrInputs[x].css('borderColor', 'rgba(26, 83, 168, 0.64)');
            arrInputs[x].parent('.order-input').children(".order-input-title").children('svg').css('fill', 'rgba(26, 83, 168, 0.64)');
        })
    };

    //Обратный звонок, попап, закрыть попап

    $('.open-modal').click(() => {

        $('#call-back-container').css('top', '0px');
    });

    $('#call-back-title-action').click(function () {


        let callNumber = $('#call-number');
        let callName = $('#call-name');

        if (callNumber.val() && callName.val()) {
            $.ajax({
                type: 'post',
                url: 'phone-call.php',
                data: 'callNumber=' + callNumber.val() + '&callName=' + callName.val(),
                success: () => {
                    $('#order-success-container').css('left', '0px');
                    $('#call-back-container').css('top', '-1599px');
                },
                error: () => {
                    $('#call-back-container').css('top', '-1599px');
                    alert('Ошибка бронирования. Свяжитесь, пожалуйста, по номеру телефона.');
                }

            });

            callNumber.css('box-shadow', '0 0 5px rgba(26, 245, 26, 0.45)');
            callNumber.css('borderColor', 'rgba(26, 245, 26, 0.45)');
            callNumber.parent('.order-input').children(".order-input-title").children('svg').css('fill', 'rgba(26, 245, 26, 0.45)');

            callName.css('box-shadow', '0 0 5px rgba(26, 245, 26, 0.45)');
            callName.css('borderColor', 'rgba(26, 245, 26, 0.45)');
            callName.parent('.order-input').children(".order-input-title").children('svg').css('fill', 'rgba(26, 245, 26, 0.45)');

        } else {
            if (!callNumber.val()) {
                callNumber.css('box-shadow', '0 0 5px 1px rgba(232, 12, 47, 0.75)');
                callNumber.css('borderColor', 'rgba(232, 12, 47, 0.75)');
                callNumber.parent('.order-input').children(".order-input-title").children('svg').css('fill', 'rgba(232, 12, 47, 0.75)');
            }
            if (callNumber.val()) {
                callNumber.css('box-shadow', '0 0 5px rgba(26, 245, 26, 0.45)');
                callNumber.css('borderColor', 'rgba(26, 245, 26, 0.45)');
                callNumber.parent('.order-input').children(".order-input-title").children('svg').css('fill', 'rgba(26, 245, 26, 0.45)');
            }

            if (!callName.val()) {
                callName.css('box-shadow', '0 0 5px 1px rgba(232, 12, 47, 0.75)');
                callName.css('borderColor', 'rgba(232, 12, 47, 0.75)');
                callName.parent('.order-input').children(".order-input-title").children('svg').css('fill', 'rgba(232, 12, 47, 0.75)');
            }
            if (callName.val()) {
                callName.css('box-shadow', '0 0 5px rgba(26, 245, 26, 0.45)');
                callName.css('borderColor', 'rgba(26, 245, 26, 0.45)');
                callName.parent('.order-input').children(".order-input-title").children('svg').css('fill', 'rgba(26, 245, 26, 0.45)');
            }
        }
    });
    let callNumber = document.getElementById('call-number');
    callNumber.onblur = function () {
        if (callNumber.value === '') {
            callNumber.style.boxShadow = '0 0 5px 1px rgba(232, 12, 47, 0.75)';
            callNumber.style.borderColor = 'rgba(232, 12, 47, 0.75)';
            callNumber.parentElement.firstElementChild.firstElementChild.style.fill = 'rgba(232, 12, 47, 0.75)'
        }
        if (callNumber.value) {
            callNumber.classList.add('invalid');
            callNumber.style.boxShadow = '0 0 5px 1px rgba(26, 245, 26, 0.45)';
            callNumber.style.borderColor = 'rgba(26, 245, 26, 0.45)';
            callNumber.parentElement.firstElementChild.firstElementChild.style.fill = 'rgba(26, 245, 26, 0.45)'
        }
    };
    callNumber.onfocus = function () {
        callNumber.style.boxShadow = '0 0 0 0 rgba(26, 245, 26, 0.45)';
        callNumber.style.borderColor = 'rgba(26, 83, 168, 0.64)';
    };
    let callName = document.getElementById('call-name');
    callName.onblur = function () {
        if (callName.value === '') {
            callName.style.boxShadow = '0 0 5px 1px rgba(232, 12, 47, 0.75)';
            callName.style.borderColor = 'rgba(232, 12, 47, 0.75)';
            callName.parentElement.firstElementChild.firstElementChild.style.fill = 'rgba(232, 12, 47, 0.75)'
        }
        if (callName.value) {
            callName.classList.add('invalid');
            callName.style.boxShadow = '0 0 5px 1px rgba(26, 245, 26, 0.45)';
            callName.style.borderColor = 'rgba(26, 245, 26, 0.45)';
            callName.parentElement.firstElementChild.firstElementChild.style.fill = 'rgba(26, 245, 26, 0.45)'
        }
    };
    callName.onfocus = function () {
        callName.style.boxShadow = '0 0 0 0 rgba(26, 245, 26, 0.45)';
        callName.style.borderColor = 'rgba(26, 83, 168, 0.64)';
    };

    $('#call-bak-close-cancel, #call-bak-close-cancel2, #call-back-container').click((e) => {
        if (e.target.id === 'call-back-close-cancel' || e.target.id === 'call-back-close-cancel2' || e.target.id === 'call-back-container') {
            $('#call-back-container').css('top', '-1599px');
        }
    });

    //Закрыть попап успешного заказа

    $('#order-success-close-cancel, #order-success-close-cancel2, #order-success-container').click((e) => {
        if (e.target.id === 'order-success-close-cancel' || e.target.id === 'order-success-close-cancel2' || e.target.id === 'order-success-container') {
            $('#order-success-container').css('left', '-1599px');
        }
    });

    // Строчки дугой в блоке О компании

    const upperWords1 = new CircleType(document.getElementById('upper-word1'));
    upperWords1.radius(130).dir(1);
    const lowerWord1 = new CircleType(document.getElementById('lower-word1'));
    lowerWord1.radius(130).dir(-1);
    const upperWords2 = new CircleType(document.getElementById('upper-word2'));
    upperWords2.radius(130).dir(1);
    const lowerWord2 = new CircleType(document.getElementById('lower-word2'));
    lowerWord2.radius(130).dir(-1);
    const upperWords3 = new CircleType(document.getElementById('upper-word3'));
    upperWords3.radius(130).dir(1);
    const lowerWord3 = new CircleType(document.getElementById('lower-word3'));
    lowerWord3.radius(130).dir(-1);
    const upperWords4 = new CircleType(document.getElementById('upper-word4'));
    upperWords4.radius(130).dir(1);
    const lowerWord4 = new CircleType(document.getElementById('lower-word4'));
    lowerWord4.radius(130).dir(-1);

    //Меню открыть/закрыть
    $('#menu-btn button').click(function () {
        $('#menu').css('display', 'flex');
    })

    function checkWidth() {
        var windowWidth = $('body').innerWidth()
        if (windowWidth < 563) {
            $('#menu a').click(function () {
                $('#menu').css('display', 'none');
            });
        }
        ;

    }

    checkWidth(); // проверит при загрузке страницы


    $('#menu #menu-close').click(function () {
        $('#menu').css('display', 'none');
    })

    // Карусель по услугам
    $('#services-content').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1070,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: true
                }
            }
        ]
    });


    // Inputs

    // Медленный скролл к блокам
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