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
      <form action="technical.php" method="post">
          <label>Registartion Number</label>
         <input type="text" class="form-control" id="FIleName" name="registrationnumber"><br>
          <p class="text-lg-left">1. Which of the following are themselves a collection of different data types?</p>
            a) string
b) structures
c) char
d) all of the mentioned
          <select name="option1" class="form-control">
              <option>..choose..</option>
               <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
          </select>
          
         <p class="text-lg-left">2. User-defined data type can be derived by___________</p>  
            a) struct
b) enum
c) typedef
d) all of the mentioned
          <select name="option2" class="form-control">
              <option>..choose..</option>
               <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
          </select>
              <p class="text-lg-left"> Which operator connects the structure name to its member name?</p>  
          a) –
b) ->
c) .
d) Both 
          <select name="option3" class="form-control">
              <option>..choose..</option>
               <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
          </select>
              <p class="text-lg-left">4. Which of the following cannot be a structure member?</p>  
         a) Another structure
b) Function
c) Array
d) None of the mentioned
          <select name="option4" class="form-control">
              <option>..choose..</option>
               <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
          </select>
              <p class="text-lg-left">5. Which of the following structure declaration will throw an error?</p>  
          a)

   struct temp{}s;
   main(){}
b)

   struct temp{};
   struct temp s;
   main(){}
c)

   struct temp s;
   struct temp{};
   main(){}
d) None of the mentioned
          <select name="option5" class="form-control">
              <option>..choose..</option>
               <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
          </select>
              <p class="text-lg-left">6.C99 standard guarantees uniqueness of ____ characters for internal names.</p> 
         a) 31
b) 63
c) 12
d) 14
          <select name="option6" class="form-control">
              <option>..choose..</option>
               <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
          </select>
              <p class="text-lg-left">7.C99 standard guarantees uniqueness of _____ characters for external names.</p>
         a) 31
b) 6
c) 12
d) 14
          <select name="option7" class="form-control">
              <option>..choose..</option>
               <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
          </select>
         <p class="text-lg-left">8.Which of the following is not a valid variable name declaration?</p>
a) int __a3;
b) int __3a;
c) int __A3;
d) None of the mentioned
          <select name="option8" class="form-control">
              <option>..choose..</option>
               <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
          </select>
          <p class="text-lg-left"> 9.Which of the following is not a valid variable name declaration?</p>
       a) int _a3;
b) int a_3;
c) int 3_a;
d) int _3a
          <select name="option9" class="form-control">
              <option>..choose..</option>
               <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
          </select>
          <p class="text-lg-left">10.Why do variable names beginning with the underscore is not encouraged?</p>
       a) It is not standardized
b) To avoid conflicts since assemblers and loaders use such names
c) To avoid conflicts since library routines use such names
d) To avoid conflicts with environment variables of an operating system
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