 <?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: access"); 
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,
Access-Control-Allow-Headers, Authorization, X-Requested-with"); 

$host = 'localhost';
$dbname = 'e-commerce';
$username = 'root';
$password = '';

try {
  $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}

$id = $_GET['id'];
$stmt = $pdo->prepare(" DELETE FROM archiveproduct WHERE id = :id");
$stmt->bindParam(':id', $id);
$stmt->execute();

?>