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
    $answers=array("C","B","A","D","B","B","A","D","C","C");
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
    $sql = "INSERT INTO technical(registrationnumber,technical) VALUES ('$register',$count)";
    if (mysqli_query($conn, $sql)) {
    echo "successfully completed assessment then enter into home page \n";

        header("refresh:60;url=verbal.php");
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
         header("refresh:10;url=index.html");
}
   
    
    header("refresh:60;url=index.html");
    
    ?>
    
    
    </body>
</html>
