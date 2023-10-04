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

$sql = "SELECT * FROM product ";
$result = $conn->query($sql);

$data = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}
$json_data = json_encode($data);

header('Content-Type: application/json');
echo $json_data;
?>
