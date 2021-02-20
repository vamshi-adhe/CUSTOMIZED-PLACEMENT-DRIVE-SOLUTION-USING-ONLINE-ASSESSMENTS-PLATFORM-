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
$username=$_POST["email"];
$password=$_POST["password"];
$sql = "SELECT firstname,email,password FROM jsignup";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
            if($username==$row["email"] && $password==$row["password"]){
                echo "success";
                $username1=$row["firstname"];
                header("refresh:1;url=assessmentmath.php");
            }
        else
        {
            echo"enter the correct details \n";
            header("refresh:1;url=jlogin.html");
        }
    }
}
    
?>
    
    
    //timer page    
    <?php
session_start();
$link=mysqli_connect("localhost","jobseeker2","Jobseeker");
mysqli_select_db($link,"jobseeker2");
$duration="";
$res=mysqli_query($link,"select * from tabel1");
while($row=mysqli_fetch_array($res))
{
    
    $duration=$row["duration"];
}


$_SESSION["duration"]=$duration;
$_SESSION["start_time"]=date("Y-m-d H:i:s");

$end_time=$end_time=date('Y-m-d H:i:s',strtotime('+'.$_SESSION["duration"].'minutes',strtotime($_SESSION["start_time"])));

$_SESSION["end_time"]=$end_time;
?>

<script type="text/javascript">

window.location="assessmentmath.php";
</script>
    
</body>
</html>
