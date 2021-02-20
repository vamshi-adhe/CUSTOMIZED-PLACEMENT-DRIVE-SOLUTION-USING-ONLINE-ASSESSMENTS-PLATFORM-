  <?php    
    
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
$username=$_POST["companyemail"];
$password=$_POST["password"];
$sql = "SELECT companyfirstname,companyemail,password FROM jrecuiter";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
            if($username==$row["companyemail"] && $password==$row["password"]){
                
            }
        else{
            echo " invalid details \n enter the correct details";
            header("refresh:1;url=jrecuiterlogin.html");
        }
    }
}
    
?>
                        



<html>
       <head> 
  
        <link rel="stylesheet" href="recuiterloginstyle.css">
        <link rel="stylesheet" href="bootstrap-4.1.3-dist/css/bootstrap-grid.min.css">
    <link rel="stylesheet" href="bootstrap-4.1.3-dist/css/bootstrap.min.css">
    </head>
    <body>
            <nav class="navbar navbar-light bg-dark" >
  <a class="navbar-brand" id="nav_font">Dream Job</a>
                 
                <div class="username">
                <form class="form-inline my-2 my-lg-0">
                    <a class="navbar-brand"  id="main">
                        <?php    
    
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
$username=$_POST["companyemail"];
$password=$_POST["password"];
$sql = "SELECT companyfirstname,companyemail,password FROM jrecuiter";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
            if($username==$row["companyemail"] && $password==$row["password"]){
                $gig=$row["companyfirstname"];
                echo $gig;
                
            }
    }
}
    
?>
                        
                        
        </a>
            
      
      <button type="button" onclick="myFunction()" class="btn btn-light">SignOut</button>
    </form>
                    </div>
</nav>
     
        
        
        
       <script type="text/javascript">
        
        
        function myFunction(){
            
            window.location="jrecuiterlogin.html";
        }
        </script> 
        
    </body>
</html>
    