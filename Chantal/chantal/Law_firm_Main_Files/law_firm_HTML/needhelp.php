<?php
if($_POST!='' && isset($_POST)){
	
	if($_REQUEST['inputEmail2']!='' )
	{
		$to = "chantal@dc-legal.com"; 
		$from = strip_tags($_REQUEST['inputEmail2']); 
		$headers = 'From:'.$from. "\r\n" .
		'Reply-To:'.$from. "\r\n" .
		'X-Mailer: PHP/' . phpversion();	
		$headers .= 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";	
		
		$subject = "You have a message sent from your site";
		
		$body   = '<html>';
		$body  .= '<body>';
		$body  .= 'Hello Chantal,<br><br> The below email address would like you to contact them.<br><br>';
		$body  .= 'Email: '.$from.'<br>';
		$body  .= '</body>';
		$body  .= '</html>';
			
		$send = @mail($to, $subject, $body, $headers);
		
		if($send == true)
		{
			header('location:index.html#success');
		}
		else
		{
			header('location:index.html#failed');
		}
	}
	else
	{
		header('location:index.html#data-missing');
	}		
}
?>