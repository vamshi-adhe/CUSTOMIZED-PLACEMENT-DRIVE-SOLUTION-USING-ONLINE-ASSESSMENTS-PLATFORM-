<html>
<body>
<?php
if (isset($_POST["submit"])) 
$servername = "localhost";
$username = "jobseeker2";
$password = "Jobseeker";
$dbname = "jobseeker2";

// Create connection
$conn = mysqli_connect( $servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
$firstname=$_POST["firstname"];
$lastname=$_POST["lastname"];
$dob=$_POST["dob"];
$email= $_POST["email"];
$password_reg=$_POST["password"];
$address=$_POST["address"];
$address2=$_POST["address2"];
$college_name=$_POST["collegename"];
$city=$_POST["city"];
$state=$_POST["state"];
$zip=$_POST["zip"];
$percentage=$_POST["percentage"];
$registration_number=$_POST["registration"];
$gender=$_POST["gender"];
$sql = "INSERT INTO jsignup (firstname,lastname,dob,email,password,address,address2,city,state,zip,collegename,percentage,registrationnumber,gender) VALUES ('$firstname','$lastname','$dob','$email','$password_reg','$address','$address2','$city','$state','$zip','$college_name','$percentage','$registration_number','$gender')";
if (mysqli_query($conn, $sql)) {
    echo "successfully completed registration in dream job";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
header("refresh:2;url=index.html");

?>
</body>
</html>