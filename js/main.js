$(document).ready(function () {

    //блок с заявкой

    $('#order-main-action-btn').click(function () {

        fromTo = $('#from-to');
        tonSize = $('#ton-size');
        goodName = $('#good-name');
        date = $('#date');
        price = $('#price');
        comment = $('#comment');
        clientName = $('#client-name');
        companyName = $('#company-name');
        clientPhone = $('#client-phone');
        clientMail = $('#client-mail');
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

            fromTo.css('box-shadow', '0 0 5px rgba(26, 245, 26, 0.45)');
            fromTo.css('borderColor', 'rgba(26, 245, 26, 0.45)');
            fromTo.parent('.order-input').children(".order-input-title").children('svg').css('fill', 'rgba(26, 245, 26, 0.45)');

            tonSize.css('box-shadow', '0 0 5px rgba(26, 245, 26, 0.45)');
            tonSize.css('borderColor', 'rgba(26, 245, 26, 0.45)');
            tonSize.parent('.order-input').children(".order-input-title").children('svg').css('fill', 'rgba(26, 245, 26, 0.45)');

            goodName.css('box-shadow', '0 0 5px rgba(26, 245, 26, 0.45)');
            goodName.css('borderColor', 'rgba(26, 245, 26, 0.45)');
            goodName.parent('.order-input').children(".order-input-title").children('svg').css('fill', 'rgba(26, 245, 26, 0.45)');

            date.css('box-shadow', '0 0 5px rgba(26, 245, 26, 0.45)');
            date.css('borderColor', 'rgba(26, 245, 26, 0.45)');
            date.parent('.order-input').children(".order-input-title").children('svg').css('fill', 'rgba(26, 245, 26, 0.45)');

            price.css('box-shadow', '0 0 5px rgba(26, 245, 26, 0.45)');
            price.css('borderColor', 'rgba(26, 245, 26, 0.45)');
            price.parent('.order-input').children(".order-input-title").children('svg').css('fill', 'rgba(26, 245, 26, 0.45)');

            comment.css('box-shadow', '0 0 5px rgba(26, 245, 26, 0.45)');
            comment.css('borderColor', 'rgba(26, 245, 26, 0.45)');
            comment.parent('.order-input').children(".order-input-title").children('svg').css('fill', 'rgba(26, 245, 26, 0.45)');

            clientName.css('box-shadow', '0 0 5px rgba(26, 245, 26, 0.45)');
            clientName.css('borderColor', 'rgba(26, 245, 26, 0.45)');
            clientName.parent('.order-input').children(".order-input-title").children('svg').css('fill', 'rgba(26, 245, 26, 0.45)');

            companyName.css('box-shadow', '0 0 5px rgba(26, 245, 26, 0.45)');
            companyName.css('borderColor', 'rgba(26, 245, 26, 0.45)');
            companyName.parent('.order-input').children(".order-input-title").children('svg').css('fill', 'rgba(26, 245, 26, 0.45)');

            clientPhone.css('box-shadow', '0 0 5px rgba(26, 245, 26, 0.45)');
            clientPhone.css('borderColor', 'rgba(26, 245, 26, 0.45)');
            clientPhone.parent('.order-input').children(".order-input-title").children('svg').css('fill', 'rgba(26, 245, 26, 0.45)');

            clientMail.css('box-shadow', '0 0 5px rgba(26, 245, 26, 0.45)');
            clientMail.css('borderColor', 'rgba(26, 245, 26, 0.45)');
            clientMail.parent('.order-input').children(".order-input-title").children('svg').css('fill', 'rgba(26, 245, 26, 0.45)');

        } else {
            if (!fromTo.val()) {
                fromTo.css('box-shadow', '0 0 5px 1px rgba(232, 12, 47, 0.75)');
                fromTo.css('borderColor', 'rgba(232, 12, 47, 0.75)');
                fromTo.parent('.order-input').children(".order-input-title").children('svg').css('fill', 'rgba(232, 12, 47, 0.75)');
            }
            if (fromTo.val()) {
                fromTo.css('box-shadow', '0 0 5px rgba(26, 245, 26, 0.45)');
                fromTo.css('borderColor', 'rgba(26, 245, 26, 0.45)');
                fromTo.parent('.order-input').children(".order-input-title").children('svg').css('fill', 'rgba(26, 245, 26, 0.45)');
            }

            if (!tonSize.val()) {
                tonSize.css('box-shadow', '0 0 5px 1px rgba(232, 12, 47, 0.75)');
                tonSize.css('borderColor', 'rgba(232, 12, 47, 0.75)');
                tonSize.parent('.order-input').children(".order-input-title").children('svg').css('fill', 'rgba(232, 12, 47, 0.75)');
            }
            if (tonSize.val()) {
                tonSize.css('box-shadow', '0 0 5px rgba(26, 245, 26, 0.45)');
                tonSize.css('borderColor', 'rgba(26, 245, 26, 0.45)');
                tonSize.parent('.order-input').children(".order-input-title").children('svg').css('fill', 'rgba(26, 245, 26, 0.45)');
            }
            if (!goodName.val()) {
                goodName.css('box-shadow', '0 0 5px 1px rgba(232, 12, 47, 0.75)');
                goodName.css('borderColor', 'rgba(232, 12, 47, 0.75)');
                goodName.parent('.order-input').children(".order-input-title").children('svg').css('fill', 'rgba(232, 12, 47, 0.75)');
            }
            if (goodName.val()) {
                goodName.css('box-shadow', '0 0 5px rgba(26, 245, 26, 0.45)');
                goodName.css('borderColor', 'rgba(26, 245, 26, 0.45)');
                goodName.parent('.order-input').children(".order-input-title").children('svg').css('fill', 'rgba(26, 245, 26, 0.45)');
            }
            if (!date.val()) {
                date.css('box-shadow', '0 0 5px 1px rgba(232, 12, 47, 0.75)');
                date.css('borderColor', 'rgba(232, 12, 47, 0.75)');
                date.parent('.order-input').children(".order-input-title").children('svg').css('fill', 'rgba(232, 12, 47, 0.75)');
            }
            if (date.val()) {
                date.css('box-shadow', '0 0 5px rgba(26, 245, 26, 0.45)');
                date.css('borderColor', 'rgba(26, 245, 26, 0.45)');
                date.parent('.order-input').children(".order-input-title").children('svg').css('fill', 'rgba(26, 245, 26, 0.45)');
            }
            if (!price.val()) {
                price.css('box-shadow', '0 0 5px 1px rgba(232, 12, 47, 0.75)');
                price.css('borderColor', 'rgba(232, 12, 47, 0.75)');
                price.parent('.order-input').children(".order-input-title").children('svg').css('fill', 'rgba(232, 12, 47, 0.75)');
            }
            if (price.val()) {
                price.css('box-shadow', '0 0 5px rgba(26, 245, 26, 0.45)');
                price.css('borderColor', 'rgba(26, 245, 26, 0.45)');
                price.parent('.order-input').children(".order-input-title").children('svg').css('fill', 'rgba(26, 245, 26, 0.45)');
            }
            if (!comment.val()) {
                comment.css('box-shadow', '0 0 5px 1px rgba(232, 12, 47, 0.75)');
                comment.css('borderColor', 'rgba(232, 12, 47, 0.75)');
                comment.parent('.order-input').children(".order-input-title").children('svg').css('fill', 'rgba(232, 12, 47, 0.75)');
            }
            if (comment.val()) {
                comment.css('box-shadow', '0 0 5px rgba(26, 245, 26, 0.45)');
                comment.css('borderColor', 'rgba(26, 245, 26, 0.45)');
                comment.parent('.order-input').children(".order-input-title").children('svg').css('fill', 'rgba(26, 245, 26, 0.45)');
            }
            if (!clientName.val()) {
                clientName.css('box-shadow', '0 0 5px 1px rgba(232, 12, 47, 0.75)');
                clientName.css('borderColor', 'rgba(232, 12, 47, 0.75)');
                clientName.parent('.order-input').children(".order-input-title").children('svg').css('fill', 'rgba(232, 12, 47, 0.75)');
            }
            if (clientName.val()) {
                clientName.css('box-shadow', '0 0 5px rgba(26, 245, 26, 0.45)');
                clientName.css('borderColor', 'rgba(26, 245, 26, 0.45)');
                clientName.parent('.order-input').children(".order-input-title").children('svg').css('fill', 'rgba(26, 245, 26, 0.45)');
            }
            if (!companyName.val()) {
                companyName.css('box-shadow', '0 0 5px 1px rgba(232, 12, 47, 0.75)');
                companyName.css('borderColor', 'rgba(232, 12, 47, 0.75)');
                companyName.parent('.order-input').children(".order-input-title").children('svg').css('fill', 'rgba(232, 12, 47, 0.75)');
            }
            if (companyName.val()) {
                companyName.css('box-shadow', '0 0 5px rgba(26, 245, 26, 0.45)');
                companyName.css('borderColor', 'rgba(26, 245, 26, 0.45)');
                companyName.parent('.order-input').children(".order-input-title").children('svg').css('fill', 'rgba(26, 245, 26, 0.45)');
            }
            if (!clientPhone.val()) {
                clientPhone.css('box-shadow', '0 0 5px 1px rgba(232, 12, 47, 0.75)');
                clientPhone.css('borderColor', 'rgba(232, 12, 47, 0.75)');
                clientPhone.parent('.order-input').children(".order-input-title").children('svg').css('fill', 'rgba(232, 12, 47, 0.75)');
            }
            if (clientPhone.val()) {
                clientPhone.css('box-shadow', '0 0 5px rgba(26, 245, 26, 0.45)');
                clientPhone.css('borderColor', 'rgba(26, 245, 26, 0.45)');
                clientPhone.parent('.order-input').children(".order-input-title").children('svg').css('fill', 'rgba(26, 245, 26, 0.45)');
            }
            if (!clientMail.val()) {
                clientMail.css('box-shadow', '0 0 5px 1px rgba(232, 12, 47, 0.75)');
                clientMail.css('borderColor', 'rgba(232, 12, 47, 0.75)');
                clientMail.parent('.order-input').children(".order-input-title").children('svg').css('fill', 'rgba(232, 12, 47, 0.75)');
            }
            if (clientMail.val()) {
                clientMail.css('box-shadow', '0 0 5px rgba(26, 245, 26, 0.45)');
                clientMail.css('borderColor', 'rgba(26, 245, 26, 0.45)');
                clientMail.parent('.order-input').children(".order-input-title").children('svg').css('fill', 'rgba(26, 245, 26, 0.45)');
            }
        }
    });

    let fromTo = document.getElementById('from-to');
    fromTo.onblur = function () {
        if (fromTo.value === '') {
            fromTo.style.boxShadow = '0 0 5px 1px rgba(232, 12, 47, 0.75)';
            fromTo.style.borderColor = 'rgba(232, 12, 47, 0.75)';
            fromTo.parentElement.firstElementChild.firstElementChild.style.fill = 'rgba(232, 12, 47, 0.75)'
        }
        if (fromTo.value) {
            fromTo.classList.add('invalid');
            fromTo.style.boxShadow = '0 0 5px 1px rgba(26, 245, 26, 0.45)';
            fromTo.style.borderColor = 'rgba(26, 245, 26, 0.45)';
            fromTo.parentElement.firstElementChild.firstElementChild.style.fill = 'rgba(26, 245, 26, 0.45)'
        }
    };
    fromTo.onfocus = function () {
        fromTo.style.boxShadow = '0 0 0 0 rgba(26, 245, 26, 0.45)';
        fromTo.style.borderColor = 'rgba(26, 83, 168, 0.64)';
    };
    let tonSize = document.getElementById('ton-size');
    tonSize.onblur = function () {
        if (tonSize.value === '') {
            tonSize.style.boxShadow = '0 0 5px 1px rgba(232, 12, 47, 0.75)';
            tonSize.style.borderColor = 'rgba(232, 12, 47, 0.75)';
            tonSize.parentElement.firstElementChild.firstElementChild.style.fill = 'rgba(232, 12, 47, 0.75)'
        }
        if (tonSize.value) {
            tonSize.classList.add('invalid');
            tonSize.style.boxShadow = '0 0 5px 1px rgba(26, 245, 26, 0.45)';
            tonSize.style.borderColor = 'rgba(26, 245, 26, 0.45)';
            tonSize.parentElement.firstElementChild.firstElementChild.style.fill = 'rgba(26, 245, 26, 0.45)'
        }
    };
    tonSize.onfocus = function () {
        tonSize.style.boxShadow = '0 0 0 0 rgba(26, 245, 26, 0.45)';
        tonSize.style.borderColor = 'rgba(26, 83, 168, 0.64)';
    };
    let goodName = document.getElementById('good-name');
    goodName.onblur = function () {
        if (goodName.value === '') {
            goodName.style.boxShadow = '0 0 5px 1px rgba(232, 12, 47, 0.75)';
            goodName.style.borderColor = 'rgba(232, 12, 47, 0.75)';
            goodName.parentElement.firstElementChild.firstElementChild.style.fill = 'rgba(232, 12, 47, 0.75)'
        }
        if (goodName.value) {
            goodName.style.boxShadow = '0 0 5px 1px rgba(26, 245, 26, 0.45)';
            goodName.style.borderColor = 'rgba(26, 245, 26, 0.45)';
            goodName.parentElement.firstElementChild.firstElementChild.style.fill = 'rgba(26, 245, 26, 0.45)'
        }
    };
    goodName.onfocus = function () {
        goodName.style.boxShadow = '0 0 0 0 rgba(26, 245, 26, 0.45)';
        goodName.style.borderColor = 'rgba(26, 83, 168, 0.64)';
    };
    let date = document.getElementById('date');
    date.onblur = function () {
        if (date.value === '') {
            date.style.boxShadow = '0 0 5px 1px rgba(232, 12, 47, 0.75)';
            date.style.borderColor = 'rgba(232, 12, 47, 0.75)';
            date.parentElement.firstElementChild.firstElementChild.style.fill = 'rgba(232, 12, 47, 0.75)'
        }
        if (date.value) {
            date.classList.add('invalid');
            date.style.boxShadow = '0 0 5px 1px rgba(26, 245, 26, 0.45)';
            date.style.borderColor = 'rgba(26, 245, 26, 0.45)';
            date.parentElement.firstElementChild.firstElementChild.style.fill = 'rgba(26, 245, 26, 0.45)'
        }
    };
    date.onfocus = function () {
        date.style.boxShadow = '0 0 0 0 rgba(26, 245, 26, 0.45)';
        date.style.borderColor = 'rgba(26, 83, 168, 0.64)';
    };
    let price = document.getElementById('price');
    price.onblur = function () {
        if (price.value === '') {
            price.style.boxShadow = '0 0 5px 1px rgba(232, 12, 47, 0.75)';
            price.style.borderColor = 'rgba(232, 12, 47, 0.75)';
            price.parentElement.firstElementChild.firstElementChild.style.fill = 'rgba(232, 12, 47, 0.75)'
        }
        if (price.value) {
            price.style.boxShadow = '0 0 5px 1px rgba(26, 245, 26, 0.45)';
            price.style.borderColor = 'rgba(26, 245, 26, 0.45)';
            price.parentElement.firstElementChild.firstElementChild.style.fill = 'rgba(26, 245, 26, 0.45)'
        }
    };
    price.onfocus = function () {
        price.style.boxShadow = '0 0 0 0 rgba(26, 245, 26, 0.45)';
        price.style.borderColor = 'rgba(26, 83, 168, 0.64)';
    };
    let comment = document.getElementById('comment');
    comment.onblur = function () {
        if (comment.value === '') {
            comment.style.boxShadow = '0 0 5px 1px rgba(232, 12, 47, 0.75)';
            comment.style.borderColor = 'rgba(232, 12, 47, 0.75)';
            comment.parentElement.firstElementChild.firstElementChild.style.fill = 'rgba(232, 12, 47, 0.75)'
        }
        if (comment.value) {
            comment.classList.add('invalid');
            comment.style.boxShadow = '0 0 5px 1px rgba(26, 245, 26, 0.45)';
            comment.style.borderColor = 'rgba(26, 245, 26, 0.45)';
            comment.parentElement.firstElementChild.firstElementChild.style.fill = 'rgba(26, 245, 26, 0.45)'
        }
    };
    comment.onfocus = function () {
        comment.style.boxShadow = '0 0 0 0 rgba(26, 245, 26, 0.45)';
        comment.style.borderColor = 'rgba(26, 83, 168, 0.64)';
    };
    let companyName = document.getElementById('company-name');
    companyName.onblur = function () {
        if (companyName.value === '') {
            companyName.style.boxShadow = '0 0 5px 1px rgba(232, 12, 47, 0.75)';
            companyName.style.borderColor = 'rgba(232, 12, 47, 0.75)';
            companyName.parentElement.firstElementChild.firstElementChild.style.fill = 'rgba(232, 12, 47, 0.75)'
        }
        if (companyName.value) {
            companyName.classList.add('invalid');
            companyName.style.boxShadow = '0 0 5px 1px rgba(26, 245, 26, 0.45)';
            companyName.style.borderColor = 'rgba(26, 245, 26, 0.45)';
            companyName.parentElement.firstElementChild.firstElementChild.style.fill = 'rgba(26, 245, 26, 0.45)'
        }
    };
    companyName.onfocus = function () {
        companyName.style.boxShadow = '0 0 0 0 rgba(26, 245, 26, 0.45)';
        companyName.style.borderColor = 'rgba(26, 83, 168, 0.64)';
    };
    let clientName = document.getElementById('client-name');
    clientName.onblur = function () {
        if (clientName.value === '') {
            clientName.classList.add('invalid');
            clientName.style.boxShadow = '0 0 5px 1px rgba(232, 12, 47, 0.75)';
            clientName.style.borderColor = 'rgba(232, 12, 47, 0.75)';
            clientName.parentElement.firstElementChild.firstElementChild.style.fill = 'rgba(232, 12, 47, 0.75)'
        }
        if (clientName.value) {
            clientName.classList.add('invalid');
            clientName.style.boxShadow = '0 0 5px 1px rgba(26, 245, 26, 0.45)';
            clientName.style.borderColor = 'rgba(26, 245, 26, 0.45)';
            clientName.parentElement.firstElementChild.firstElementChild.style.fill = 'rgba(26, 245, 26, 0.45)'
        }
    };
    clientName.onfocus = function () {
        clientName.style.boxShadow = '0 0 0 0 rgba(26, 245, 26, 0.45)';
        clientName.style.borderColor = 'rgba(26, 83, 168, 0.64)';
    };
    let clientMail = document.getElementById('client-mail');
    clientMail.onblur = function () {
        if (clientMail.value === '') {
            clientMail.classList.add('invalid');
            clientMail.style.boxShadow = '0 0 5px 1px rgba(232, 12, 47, 0.75)';
            clientMail.style.borderColor = 'rgba(232, 12, 47, 0.75)';
            clientMail.parentElement.firstElementChild.firstElementChild.style.fill = 'rgba(232, 12, 47, 0.75)'
        }
        if (clientMail.value) {
            clientMail.classList.add('invalid');
            clientMail.style.boxShadow = '0 0 5px 1px rgba(26, 245, 26, 0.45)';
            clientMail.style.borderColor = 'rgba(26, 245, 26, 0.45)';
            clientMail.parentElement.firstElementChild.firstElementChild.style.fill = 'rgba(26, 245, 26, 0.45)'
        }
    };
    clientMail.onfocus = function () {
        clientMail.style.boxShadow = '0 0 0 0 rgba(26, 245, 26, 0.45)';
        clientMail.style.borderColor = 'rgba(26, 83, 168, 0.64)';
    };
    let clientPhone = document.getElementById('client-phone');
    clientPhone.onblur = function () {
        if (clientPhone.value === '') {
            clientPhone.classList.add('invalid');
            clientPhone.style.boxShadow = '0 0 5px 1px rgba(232, 12, 47, 0.75)';
            clientPhone.style.borderColor = 'rgba(232, 12, 47, 0.75)';
            clientPhone.parentElement.firstElementChild.firstElementChild.style.fill = 'rgba(232, 12, 47, 0.75)'
        }
        if (clientPhone.value) {
            clientPhone.classList.add('invalid');
            clientPhone.style.boxShadow = '0 0 5px 1px rgba(26, 245, 26, 0.45)';
            clientPhone.style.borderColor = 'rgba(26, 245, 26, 0.45)';
            clientPhone.parentElement.firstElementChild.firstElementChild.style.fill = 'rgba(26, 245, 26, 0.45)'
        }
    };
    clientPhone.onfocus = function () {
        clientPhone.style.boxShadow = '0 0 0 0 rgba(26, 245, 26, 0.45)';
        clientPhone.style.borderColor = 'rgba(26, 83, 168, 0.64)';
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
    $('#menu a').click(function () {
        $('#menu').css('display', 'none');
    })
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