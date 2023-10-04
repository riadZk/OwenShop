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

$nom  = $_POST['nom'];
$price = $_POST['price'];
$image =  $_POST['image'];
$category =  $_POST['category'];
$page =  $_POST['page'];
$description =  $_POST['description'];

$stmt = $conn->prepare("INSERT INTO product (productName,price,productImage,category,page,description) 
 VALUES ('$nom','$price','$image', '$category', '$page', '$description')");
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