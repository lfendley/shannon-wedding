<?php
	$name = $_POST["name"];
	$email = $_POST["email"];
	$attending = $_POST["yesno"];
	$meal = $_POST["one-food"];
	$guest2 = $_POST["guest2"];
	$guest2food = $_POST["two-food"];
	$guest3 = $_POST["guest3"];
	$guest3food = $_POST["guest3-food"];
	$guest4 = $_POST["guest4"];
	$guest4food = $_POST["guest4-food"];

    $message = "Full Name: " . $name . "\r\n" . "Email Address: " . $email . "\r\n" . "Attending: " . $attending . "\r\n" . "Meal Choice: " . $meal . "\r\n" . "\r\n" . "Second Guest: " . $guest2 . "\r\n" . "Second Guest Meal: " . $guest2food . "\r\n" . "\r\n" . "Third Guest: " . $guest3 . "\r\n" . "Third Guest Meal: " . $guest3food . "\r\n" . "\r\n" . "Fourth Guest: " . $guest4 . "\r\n" . "Fouth Guest Meal: " . $guest4food . "\r\n";

	$message = wordwrap($message, 70, "\r\n");

	mail('leefendleygib@gmail.com', 'Wedding RSVP', $message);
// 	header("Location: rsvp.php");
?> 