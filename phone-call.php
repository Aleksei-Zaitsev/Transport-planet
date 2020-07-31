<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $callNumber = $_POST['callNumber'];
    $callName = $_POST['callName'];

    $content = $callName . ' оставил заявку на обратный звонок.' . "\r\n" . ' Телефон - ' . $callNumber . '.';

    $headers  = 'MIME-Version: 1.0' . "\r\n";
  $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

    $success = mail('LogisticsPlanet1@mail.ru' , 'Запрос на обратный звонок', $content, $headers);

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
