<?php
  
$name = $_POST['name'];
$phone = $_POST['phone'];
$street = $_POST['street'];
$house = $_POST['house'];
$building = $_POST['building'];
$apartment = $_POST['apartment'];
$floor = $_POST['floor'];
$comment = $_POST['comment'];
$payment = $_POST['payment'];

$callback = $_POST['callback'];
$callback = isset($callback) ? 'Нет' : 'Да';

$to = 'irakonrdratyeva@gmail.com';
$subject = 'Новый заказ';

$massage = '
<html>
<head>
	<title>Новый заказ</title>
</head>
<body>
	<h2>Данные заказа</h2>
	<ul>
		<li>Имя:  ' .$name. '</li>
		<li>Телефон:  ' .$phone. '</li>
		<li>Улица:  ' .$street. '</li>
		<li>Дом:  ' .$house. '</li>
		<li>Корпус:  ' .$building. '</li>
		<li>Квартира:  ' .$apartment. '</li>
		<li>Этаж:  ' .$floor. '</li>
		<li>Способ оплаты:  ' .$payment. '</li>
		<li>Перезвонить?  ' .$callback. '</li>
		<li>Комментарии к заказу:  ' .$comment. '</li>
	</ul>
</body>
</html>';

$headers = "From: Администратор сайта <irakonrdratyeva@gmail.com>\r\n".
                "MIME-Version: 1.0" . "\r\n" .
                "Content-type: text/html; charset=UTF-8" . "\r\n";

$mail = mail($to, $subject, $massage, $headers);

$data = [];

if ($mail) {
    $data['status'] = "OK";
    $data['mes'] = "Сообщение отправлено";
} else {
    $data['status'] = "NO";
    $data['mes'] = "На сервере произошла ошибка";
}

echo json_encode($data);

?>