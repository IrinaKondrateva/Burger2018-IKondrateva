<?php
  
function sendMail() {
	$poststring = '';
	foreach ($_POST as $key => $value) {
		if ( isset($value) && $value !="") {
	    	$poststring += "$key : $value \n";
	    } else {
	    	echo "не введены данные:".$key;
	    	return "не введены данные:";
	    };
	};

	$to = "anirikon@mail.ru";
	$subject = "Новый пользователь";
	$massage = $poststring;
	$headers  = "Content-type: text/html; charset=utf-8 \r\n";
	$headers .= "From: Отправитель <irakonrdratyeva@gmail.com>\r\n";

	if ( mail($to, $subject, $message, $headers) ) { 
		return true; 
	} else { 
		return false;
	};
}

?>
