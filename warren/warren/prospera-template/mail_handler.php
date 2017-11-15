<?php
    $message=$_POST['message'];
    $from=$_POST['name'];
    $contact=$_POST['email'];
    mail("dominique1115@yahoo.com",
        "Email Submission from tennisbywarren.com",
        "MESSAGE: " . $message . ".\n\n\n Sent from:" .  $from . "\n\n Contact email: " . $contact,
        "From: webmaster@tennisbywarren.com" . "\r\n" . "Content-Type: text/plain; charset=utf-8",
        "-fwebmaster@tennisbywarren.com");
    header( 'Location: http://www.tennisbywarren.com/index.html' ) ;
?>