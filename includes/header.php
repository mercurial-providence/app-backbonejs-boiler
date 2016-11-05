
<?php

require ("dbconnect.php");
	$connection = mysqli_connect(DB_SERVER,DB_USER,DB_PASS,DB_NAME) or die("Error " . mysqli_error($connection));
	session_start();
?>