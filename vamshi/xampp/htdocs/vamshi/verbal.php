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
       </head>
    <body>
    <nav class="navbar navbar-light bg-dark" >
  <a class="navbar-brand" id="nav_font">Dream Job</a>
</nav>  
        <div class="siginbody">
        <div class="row">
          
            
        <div class="col">
            <?php
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
      <form action="verbalans.php" method="post">
          <label>Registartion Number</label>
         <input type="text" class="form-control" id="FIleName" name="registrationnumber"><br>
          <p class="text-lg-left">1.GIGANTIC (opposite)
         
</p>
          a. Huge b. Invisible c. Zero d. Tiny
    
          <select name="option1" class="form-control">
              <option>..choose..</option>
               <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
          </select>
          
         <p class="text-lg-left">2.Stationary (opposite)
      
</p>  
      A. Mobile  B. Rapid  C. Active D. Busy    
          <select name="option2" class="form-control">
              <option>..choose..</option>
               <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
          </select>
              <p class="text-lg-left">3.Archaic (opposite)
  
</p>
          A. Fresh  B.Modern  C.Ancient  D.Present
          <select name="option3" class="form-control">
              <option>..choose..</option>
               <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
          </select>
              <p class="text-lg-left">4. Castigate(opposite)
   
</p>
          A.Trape  B.Discard  C.Complement  D.Berate
          <select name="option4" class="form-control">
              <option>..choose..</option>
               <option>A</option>
0<option>B</option>
              <option>C</option>
              <option>D</option>
          </select>
              <p class="text-lg-left">5.. Credulous (Meaning)
     
</p> 
          A.Credible  B.Discipline  C.Gullible  D. Incredible
          <select name="option5" class="form-control">
              <option>..choose..</option>
               <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
          </select>
              <p class="text-lg-left">6.Rude (opposite)
     

</p> 
          A.Detest B.Love C.Respectful D. Disrespectful
          <select name="option6" class="form-control">
              <option>..choose..</option>
               <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
          </select>
              <p class="text-lg-left">7.CORPULENT
</p>
          A. Lean   B.Gaunt  C .Emaciated    D. Obese
          
          <select name="option7" class="form-control">
              <option>..choose..</option>
               <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
          </select>
         <p class="text-lg-left">8.BRIEF
          </p>
          A. 	Limited  B. 	Small C. 	Little  D. 	Short
          <select name="option8" class="form-control">
              <option>..choose..</option>
               <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
          </select>
          <p class="text-lg-left"> 9.EMBEZZLE
             </p>
           A. 	Misappropriate  B. Balance   C. Remunerate   D. Clear
          <select name="option9" class="form-control">
              <option>..choose..</option>
               <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
          </select>
          <p class="text-lg-left">10.VENT
            </p>
            A. 	Opening   B. 	Stodge   C. 	End  D. 	Past tense of go
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
        <?php 
        
        
        header("refresh:1200;url=verbal.php");
        ?>

        
        
        
        
        
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