<?php
// Check for empty fields
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['url'])     ||
   empty($_POST['description'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$name = $_POST['name'];
$email_address = $_POST['email'];
$url = $_POST['url'];
$description = $_POST['description'];
	
// Create the email and send the message
$to = 'info@irods.org'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "iRODS HUB Contact Form:  $name";
$email_body = "Message from the iRODS HUB form:\n\nName and Organization: $name\n\nEmail: $email_address\n\nURL(s): $url\n\nDescription:\n$description";
$headers = "From: website@irods.org\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);
return true;			
?>