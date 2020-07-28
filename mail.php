<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fromTo = $_POST['fromTo'];
    $tonSize = $_POST['tonSize'];
    $goodName = $_POST['goodName'];
    $date = $_POST['date'];
    $price = $_POST['price'];
    $clientName = $_POST['clientName'];
    $companyName = $_POST['companyName'];
    $clientPhone = $_POST['clientPhone'];
    $comment = $_POST['comment'];
    $clientMail = $_POST['clientMail'];

    $content = $clientName . ' остаавил заявку на на перевозку.\n ' . $fromTo . ' ' . $goodName . '  ' . $tonSize . '.\n Планируемая погрузка/выгрузка - ' . $date . '.\n Желаемая стоимость - ' . $price . '.\n Комментарий от заказчика - ' . $comment . '.\n ' . $clientName . ' из компании ' . $companyName . '.\n Контактная информация - телефон: ' . $clientPhone . ', e-mail:' . '. e-mail: ' . $clientMail . '.';

    $success = mail("leha.0906@yandex.ru", 'Заявка на перевозку', $content);

    if ($success) {
        http_response_code(200);
        echo "Письмо отправлено";
    } else {
        http_response_code(500);
        echo "Письмо не отправлено";
    }
} else {
    http_response_code(403);
    echo "Данный метод запроса не поддерживается сервером";
}