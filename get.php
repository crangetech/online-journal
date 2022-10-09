// reaches to sql to get the data for entries ideally
<?php

    $servername = "localhost";
    $username = "root";
    $password = "root";
    $dbname = "polo13water";
    header('Content-Type:application/json');
    $conn = mysqli_connect($servername,$username,$password,$dbname);
   
    $sql = "SELECT * FROM userentries";
    $result = mysqli_query($conn,$sql);
    $data = array();
    foreach ($result as $row){
        $data[] = $row;
}

echo json_encode($data);


?>