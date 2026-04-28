<!-- creating / inserting data -->

<?php 
require 'config.php';

if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $name = $_POST['user_name'];
    $email = $_POST['user_email'];
    $course = $_POST['course_name'];

    // echo $name;
    // echo $email;
    // echo $course;

    $sql = "INSERT INTO `students` (`name`, `email`, `course`) VALUES ('$name', '$email', '$course')" ;

    mysqli_query($conn, $sql);
    header('Location: index.php');
    exit();
}



?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="create.php" method="POST">
       <div>
            <label for="uname">Enter your name: </label>
            <input type="text" id="uname" name="user_name">
       </div>
       <div>
            <label for="uemail">Enter your email: </label>
            <input type="email" id="uemail" name="user_email">
        </div>
        <div>
            <label for="course">Enter your course name</label>
            <input type="text" id="course" name="course_name">
        </div>

        <button type="submit">Submit Form</button>

    </form>
</body>
</html>