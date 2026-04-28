<!-- database connection code -->

<!-- variables to store the configuration -->
<?php 
$server = 'localhost';
$username = 'root';
$password = '';
$dbname = 'student_db';

// creating a connection 
$conn = mysqli_connect($server, $username, $password, $dbname);

if(!$conn){
    die('Connection Failed!!' . mysqli_connect_error());
}


?>