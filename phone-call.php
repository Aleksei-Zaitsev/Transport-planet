<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $callNumber = $_POST['callNumber'];
    $callName = $_POST['callName'];

    $content = $callName . ' оставил заявку на обратный звонок. \n' . ' Телефон - ' . $callNumber . '.';

    $success = mail('admin@teaberry.com' , 'Запрос на обратный звонок', $content);

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