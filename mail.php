<?php

    $name = $_POST['nombre'];
    $email = $_POST['correo'];
    $subject = $_POST['asunto'];
    $message = $_POST['mensaje'];

    $header = 'From: ' . $mail . "\r\n";
    $header = "X-Mailer: PHP/" . phpversion() . "\r\n";
    $header = "Mime-Version: 1.0 \r\n";
    $header = "Content-Type: text/plain";


    $message = "Este mensaje fue enviado por: " .$name . "\r\n";
    $message .="El correo es: " . $mail . "\r\n";
    $message .= "Mensaje: " . $_POST['message'] . "\r\n";
    $message .= "Enviado el: " . date('d/m/Y' , time());

    $para = 'tcode2319@gmail.com';
    
    mail($para, $subject, utf8_decode($message, $header));

    header("Location:index.html");
?>



    
    
    