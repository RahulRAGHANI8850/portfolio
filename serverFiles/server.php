<?php

$name = $_POST['name'];
$email = $_POST['email'];
$msg = $_POST['msg'];
$phone = $_POST['number'];

$conn = mysqli_connect('localhost', 'root', '', 'portfolio', 4306) or die("error");
$sql = "insert into contact_us(name,email,phone,msg) values('{$name}','{$email}','{$phone}','{$msg}')";
$data = mysqli_query($conn, $sql);
header("location:http://localhost/my%20portfolio/thanks.php");
?>