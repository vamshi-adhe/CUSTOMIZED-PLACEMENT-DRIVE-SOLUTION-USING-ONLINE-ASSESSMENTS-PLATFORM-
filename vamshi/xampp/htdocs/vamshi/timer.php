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

window.location="timer2.php";
</script>
