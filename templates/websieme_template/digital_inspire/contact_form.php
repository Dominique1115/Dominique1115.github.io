<?php

if(isset($_POST['email_input'])) {
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "jianum94@gmail.com";
    $email_subject = "Digital Inspire Contact Form";
    function died($error) {
        // your error code can go here
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }
    // validation expected data exists
    if(!isset($_POST['name_input']) || !isset($_POST['email_input']) ||  !isset($_POST['textarea_input'])) {
        echo 'We are sorry, but there appears to be a problem with the form you submitted.';       
    }
    $name = $_POST['name_input']; // required
    $email = $_POST['email_input']; // required
    $message = $_POST['textarea_input']; // required
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
  if(!preg_match($email_exp,$email)) {
    $error_message .= 'The email address you entered does not appear to be valid.<br>';
  }
    $string_exp = "/^[A-Za-z .'-]+$/";
  if(!preg_match($string_exp,$name)) {
    $error_message .= 'The name you entered does not appear to be valid.<br>';
  }
  if(!preg_match($string_exp,$message)) {
    $error_message .= 'The message you entered does not appear to be valid.<br>';
  }
  if(strlen($error_message) > 0) {
    echo json_encode($error_message);
	die();
  }
    $email_message = "Form details below.\n\n";
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
    $email_message .= "Name: ".clean_string($first_name)."\n";
    $email_message .= "Email: ".clean_string($email)."\n";
    $email_message .= "Message: ".clean_string($message)."\n";
	// create email headers
	$headers = 'From: '.$email."\r\n".
	'Reply-To: '.$email."\r\n" .
	'X-Mailer: PHP/' . phpversion();
	@mail($email_to, $email_subject, $message, $headers);  
	?>
	<!-- include your own success html here -->
	Thank you for contacting us. We will be in touch with you very soon.
	<?php
}
?>