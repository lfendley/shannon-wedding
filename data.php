<?php
	$name = $_POST["name"];
	$email = $_POST["email"];
	$attending = $_POST["attending"];
	$guests = $_POST["number"];
	$text = $_POST["message"];


    $message = "Full Name: " . $name . "\r\n" . "Email Address: " . $email . "\r\n" . "Attending: " . $attending . "\r\n" . "# of Guests: " . $guests . "\r\n" . "\r\n" . "Detais: " . $text;

	$message = wordwrap($message, 70, "\r\n");

	mail('leefendleygib@gmail.com', 'Wedding RSVP', $message);
	// mail('shannonpdavison@gmail.com', 'Wedding RSVP', $message);
?> 
