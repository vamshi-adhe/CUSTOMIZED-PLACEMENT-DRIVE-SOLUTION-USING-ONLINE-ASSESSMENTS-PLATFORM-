<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="bootstrap-4.1.3-dist/css/bootstrap-grid.min.css">
    <link rel="stylesheet" href="bootstrap-4.1.3-dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="jloginstyle.css">
    <link rel="icon" href="images/job1.jpg">
    <title> job potral</title>
       <link href="/fontawesome-free-5.4.1-web/fontawesome-free-5.4.1-web/css/all.min.css" rel="stylesheet">
      <script language="javascript" type="text/javascript">
      window.history.forward();
      </script>
       </head>
    <body>
    <nav class="navbar navbar-light bg-dark" >
  <a class="navbar-brand"id="nav_font">Dream Job Assessment Test</a>
</nav>  
        <div class="siginbody">
        <div class="row">
          
            
        <div class="col">
            <?php
            if (isset($_POST["submit"])) 
session_start();
?>
<div id="response"></div>




<script type="text/javascript">
setInterval(function(){
var xmlhttp=new XMLHttpRequest();
    xmlhttp.open("GET","response.php",false);
    xmlhttp.send(null);
    document.getElementById("response").innerHTML=xmlhttp.responseText;
},1000);
</script>
            
            
            </div>
        <div class="cards col-8">
            
            <div class="card sigincard">
  <div class="card-body">
      <form action="math.php" method="post">
          <label>Registartion Number</label>
         <input type="text" class="form-control" id="FIleName" name="registrationnumber"><br>
          <p class="text-lg-left">1. Ten years ago, P was half of Q's age. If the ratio of their present ages is 3:4, what will be the total of their present ages? </p>
            A.45      B. 40   C. 35   D. 30
          <select name="option1" class="form-control">
              <option>..choose..</option>
               <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
          </select>
          
         <p class="text-lg-left">2.An error 2% in excess is made while measuring the side of a square. What is the percentage of error in the calculated area of the square?</p>  
          A. 4.04%  B. 2.02%  C. 4%   D. 2%
          <select name="option2" class="form-control">
              <option>..choose..</option>
               <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
          </select>
              <p class="text-lg-left">3. What day of the week does May 28 2006 fall on</p>  
          A. Saturday	B. Monday  C. Sunday  D. Thursday
          <select name="option3" class="form-control">
              <option>..choose..</option>
               <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
          </select>
              <p class="text-lg-left">4. An accurate clock shows 8 o'clock in the morning. Through how may degrees will the hour hand rotate when the clock shows 2 o'clock in the afternoon?</p>  
          A. 154°	B. 180° C. 170°	D. 160°
          <select name="option4" class="form-control">
              <option>..choose..</option>
               <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
          </select>
              <p class="text-lg-left">5. Pipes A and B can fill a tank in 5 and 6 hours respectively. Pipe C can empty it in 12 hours. If all the three pipes are opened together, then the tank will be filled in:</p>  
          A. 3917hours	B. 11317hours  C. 2811hours	D. 412hours
          <select name="option5" class="form-control">
              <option>..choose..</option>
               <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
          </select>
              <p class="text-lg-left">6.Two pipes A and B can fill a cistern in 3712 minutes and 45 minutes respectively. Both pipes are opened. The cistern will be filled in just half an hour, if pipe B is turned off after</p> 
          A. 5 min	B. 9 min  C. 10 min	D. 15 min
          <select name="option6" class="form-control">
              <option>..choose..</option>
               <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
          </select>
              <p class="text-lg-left">7. Two numbers are in the ratio 2 : 3. If their L.C.M. is 48. what is sum of the numbers?</p>
          A. 28	B. 40 C. 64	D. 42
          <select name="option7" class="form-control">
              <option>..choose..</option>
               <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
          </select>
         <p class="text-lg-left">8. What is the greatest number of four digits which is divisible by 15, 25, 40 and 75 ?</p>
A. 9800	B.  9600 C. 9400  D. 9200
          <select name="option8" class="form-control">
              <option>..choose..</option>
               <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
          </select>
          <p class="text-lg-left"> 9.A clock is started at noon. By 10 minutes past 5, the hour hand has turned through</p>
          A. 155°	B. 145° C. 152°	D. 140°
          <select name="option9" class="form-control">
              <option>..choose..</option>
               <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
          </select>
          <p class="text-lg-left">10.Out of 7 consonants and 4 vowels, how many words of 3 consonants and 2 vowels can be formed?</p>
          A. 24400	B. 21300 C. 210	D. 25200
          <select name="option10" class="form-control">
              <option>..choose..</option>
               <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
          </select>
          <br>
         <button type="submit" class="btn btn-danger" name="submit" onclick="return check();">Submit</button>  
</form>
      
      
      
      
      
  </div>
</div>
            
            </div>
            
            
            <div class="col">
            
                
            </div>
        </div>
        
        </div>

        <meta http-equiv="refresh" content="1200;url=math.php" />

        
        
        
        
        
     <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="bootstrap-4.1.3-dist/js/bootstrap.min.js">    
        function sigup(){
            window.location="http://www.tutorialspoint.com";
            
            
        }

            function check()
            {
                if (document.getElementById('FileName').value==""
                 || document.getElementById('FileName').value==undefined)
                {
                    alert ("Please Enter a File Name");
                    return false;
                }
                return true;
            }
        
        
        
        
        
        
      </script>
    </body>



</html>