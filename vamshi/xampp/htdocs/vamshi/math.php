<html>
    <head>
    
    </head>
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
    $register=$_POST["registrationnumber"];
    $count=0;
    $answers=array("C","B","A","D","B","C","B","B","A","D");
    $length=count($answers);
    $optionanswers[0]=$_POST["option1"];
    $optionanswers[1]=$_POST["option2"];
    $optionanswers[2]=$_POST["option3"];
    $optionanswers[3]=$_POST["option4"];
    $optionanswers[4]=$_POST["option5"];
    $optionanswers[5]=$_POST["option6"];
    $optionanswers[6]=$_POST["option7"];
    $optionanswers[7]=$_POST["option8"];
    $optionanswers[8]=$_POST["option9"];
    $optionanswers[9]=$_POST["option10"];
    for($i=0;$i<$length;$i++)
    {
       if($answers[$i]==$optionanswers[$i])
       {
           $count++;
       }
    }
    echo "yor score is"   .$count;
    $sql = "INSERT INTO registrationnumber(registrationnumber,math) VALUES ('$register',$count)";
    if (mysqli_query($conn, $sql)) {
    echo "successfully completed math exam then enter into english test \n";
    echo "after one minute wrte th test";
        header("refresh:60;url=verbal.php");
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
         header("refresh:10;url=index.html");
}
   
    
    header("refresh:60;url=verbal.php");
    
    ?>
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

window.location="verbal.php";
</script>
    
    
    </body>
</html>
