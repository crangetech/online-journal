<?php
header('Content-Type:application/json');


$servername = "localhost";
$username = "root";
$password = "polo13water";
$dbname = "journal_db";

$conn = mysqli_connect($servername,$username,$password,$dbname) or die("Connection failed:" . mysqli_connect_error());

$sql = "SELECT * FROM entries";
$result = mysqli_query($conn,$sql);
$data = array();
foreach ($result as $row){
    $data[] = $row;
}

echo json_encode($data);
echo "stuff"
?>