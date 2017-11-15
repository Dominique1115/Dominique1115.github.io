<?php 
if(isset($_POST['submit'])){
    $to = "dominique1115@yahoo.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $name = $_POST['name'];
    $subject = "Email Submission from: tennisbywarren.com";
    $message = $name . " " . $last_name . " wrote the following:" . "\n\n" . $_POST['message'];
    $message2 = "Here is a copy of your message " . $name . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Mail Sent. Thank you " . $name . ", I will contact you shortly.";
    header( 'Location: http://www.tennisbywarren.com/index.html' ) ;
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    // You cannot use header and echo together. It's one or the other.
    }
?>

<?php
    mail("dominique1115@yahoo.com",
        "This is the message subject",
        "This is the message body",
        "From: warren@tennisbywarren.com" . "\r\n" . "Content-Type: text/plain; charset=utf-8",
        "-fwarren@tennisbywarren.com");
    header( 'Location: http://www.tennisbywarren.com/index.html' ) ;
?>

?>