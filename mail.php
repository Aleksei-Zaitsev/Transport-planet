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

    $first_line = $clientName . " оставил заявку на на перевозку.\r\n";
    $second_line = $fromTo . ", " . $goodName . ", " . $tonSize . ".\r\n";
    $third_line = "Планируемая погрузка/выгрузка - " . $date . ".\r\n";
    $forth_line = "Желаемая стоимость - " . $price . ".\r\n";
    $fith_line = "Комментарий от заказчика - " . $comment . ".\r\n";
    $sixth_line = $clientName . " из компании " . $companyName . ".\r\n";
    $seventh_line = "Контактная информация - телефон: " . $clientPhone . ". e-mail: " . $clientMail . ".";

    $content = "<html>
    <body>
        <h1 style='color: #1a53a8; text-align: center; font-size: 30px; font-family: sans-serif;'>Заявка</h1>
        <p style='font-size: 23px; font-family: sans-serif;'>$first_line</p>
        <p style='font-size: 23px; font-family: sans-serif;'>$second_line</p>
        <p  style='font-size: 23px; font-family: sans-serif;'>$third_line</p>
        <p style='font-size: 23px; font-family: sans-serif;'>$forth_line</p>
        <p style='font-size: 23px; font-family: sans-serif;'>$fith_line</p>
        <p style='font-size: 23px; font-family: sans-serif;'>$sixth_line</p>
        <p style='font-size: 23px; font-family: sans-serif;'>$seventh_line</p>
    </body>
    </html>
    ";


    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

    $success = mail("LogisticsPlanet1@mail.ru, Aleksei.Zaitsev.V@yandex.ru", 'Заявка на перевозку', $content, $headers);

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
