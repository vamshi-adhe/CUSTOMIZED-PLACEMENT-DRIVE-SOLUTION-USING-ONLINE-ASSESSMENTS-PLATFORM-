  
<html>
    <body>
<link rel="stylesheet" href="timer.css">
</body>
<div class="timer">




<?php
session_start();


$from_time1=date('Y-m-d H:i:s');
$to_time1=$_SESSION["end_time"];



$timefirst=strtotime($from_time1);
$timesecond=strtotime($to_time1);

$differenceinseconds=$timesecond-$timefirst;

$view=gmdate("i:s",$differenceinseconds);
    echo $view;
    if($view==00.00)
    {
        exit(0);
    }
?>
    </div>
    </html>