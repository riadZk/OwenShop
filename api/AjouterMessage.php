<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: access"); 
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-with"); 




include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$nom  = $_POST['user_name'];
$price = $_POST['user_email'];
$image =  $_POST['message'];

$stmt = $conn->prepare("INSERT INTO message (user,email,message) 
 VALUES ('$nom','$price','$image')");

if ($stmt->execute()) {

    $response = array('message' => 'New record inserted successfully');
    echo json_encode($response);
} else {

    $response = array('error' => 'Error inserting record');
    echo json_encode($response);
}

$stmt->close();
$conn->close();
?>
