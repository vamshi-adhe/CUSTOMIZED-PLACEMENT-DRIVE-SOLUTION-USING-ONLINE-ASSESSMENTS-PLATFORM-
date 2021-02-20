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
$firstname=$_POST["companyfirstname"];
$lastname=$_POST["companylastname"];
$dob=$_POST["eob"];
$email= $_POST["companyemail"];
$password_reg=$_POST["password"];
$address=$_POST["address"];
$address2=$_POST["address2"];
$city=$_POST["city"];
$state=$_POST["state"];
$zip=$_POST["zip"];
$registration_number=$_POST["registration"];
$sql = "INSERT INTO jrecuiter (companyfirstname,companylastname,eob,companyemail,password,address,address2,city,state,zip,registrationnumber) VALUES ('$firstname','$lastname','$dob','$email','$password_reg','$address','$address2','$city','$state',$zip,'$registration_number')";
if (mysqli_query($conn, $sql)) {
    echo "successfully completed registration in dream job";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
    header("refresh:5;url=index.html");
    ?>
</body>
</html>