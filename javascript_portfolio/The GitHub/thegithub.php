<html>
    <head>
       
       <meta charset="utf-8"/>
        <title>
           
            The Github
        </title>

    <script src="https://use.fontawesome.com/28fa0f3d25.js"></script>
        
    <link rel="stylesheet" type="text/css" href="thegithub.css">
    
 
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
   
    <link href="https://fonts.googleapis.com/css?family=PT+Mono" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Nova+Mono" rel="stylesheet">
    
    <style>
@import url('https://fonts.googleapis.com/css?family=Space+Mono');
        
                html {
            overflow:hidden; font-family: 'Redressed', cursive;
            
        }
        
        html, body {
            margin: 0; padding: 0; font-family: 'PT Mono', monospace;
</style>
  
    
    </head>
    
    
    
    <body>
      
      <div class="container-fluid text-center navigation colwhite">
    
            <div class="row">
           
                
                   <nav class="col-xs-8" id='menu'>
                        
                        <div class="row hundra">
                        
                        <a href="#" class="col-xs-3 navhover scroll focusonload focus menubtnsindex active" id='homebtn'><i class="fa fa-home" aria-hidden="true"></i><span class="hiddenspan"> HOME</span></a>

                        <a href="#" class="col-xs-3 navhover scroll menubtnsindex" id='aboutbtn'><i class="fa fa-info-circle" aria-hidden="true"></i><span class="hiddenspan"> ABOUT</span></a>
                        
                        <a href="#" class="col-xs-3 navhover scroll menubtnsindex" id='workbtn'  > <i class="fa fa-code" aria-hidden="true"></i><span class="hiddenspan"> WORK</span></a>
                        
                        <a href="#" class="col-xs-3 navhover scroll menubtnsindex" id="contactbtn"> <i class="fa fa-address-card-o" aria-hidden="true"></i><span class="hiddenspan"> CONTACT</span></a>
                        
                        </div>
                    </nav>
            </div>
          
      </div>
      
        
<div id="scrolls"><!---------SCROLLS == CONTENTDIV THAT SLIDES-------------->
      
      
       <!--------------------HOME------------------------------------->
    <div class='background' id='background'></div>
       <div class="container-fluid text-center home" id='gotohome'>
           <h2>Home</h2>
           <div class="row">
           
            <div class='col-xs-12'>

                
               
           
            <div class='col-xs-12 hometextdiv' id='removeadd'>
            
                <textarea spellcheck="false" class="col-xs-4" id="hometext"></textarea>
                
            
            
            </div>
            
            </div>   
            
           </div>
       </div>
      
       <!------------------------------------------------------------------>
       <!-----------------------------ABOUT-------------------------------->
      
       <div class="container-fluid text-center about" id=gotoabout>
           <h2></h2>
           <div class="row">
           
                <div class='col-xs-12'>
                    
                     

                <div class='col-xs-12 aboutremoveadd'>
                            
                    
                       
                 </div>

                    
                        
                        



                    <div class='col-xs-12 abouttextdiv'>

                        <div class="col-xs-12" id="aboutastronauttext">
                        </div>

                    </div>
                    
                </div>
            
            </div>  
               
           </div>

       
       <!------------------------------------------------------------------>
       <!--
       <div class="container-fluid scroll text-center"><a href='#gotowork'>work</a>
       -->
       
       <!-----------------------WORK---------------------------------------->
       
      
       
       <div class="container-fluid text-center work" id="gotowork">
          
        
           <div class='col-xs-12'>
               
               <a href='#' class='arrowtags arrowleft' id='workleftarrow'><i class="fa fa-angle-double-left arrowssize"  aria-hidden="true"></i></a>
                   

                        <div class='col-xs-12 workremoveadd' id ='workremoveadd'>
                      
                        </div>
               
               <a href='#' class='arrowtags arrowright' id='workrightarrow'><i class="fa fa-angle-double-right arrowssize"  aria-hidden="true"></i></a>

                    
                        
                        



                    <div class='col-xs-12 worktextdiv'>

                        <div class="col-xs-12" id="workspaceshiptext">
                        </div>

                    </div>
                    
                </div>
            
            </div>  
               
    
           
<!------------------------------------------------------------------------>
<!-----------------------------CONTACT------------------------------------>
      
     
       
       <div class="container-fluid text-center contact" id="gotocontact">
           
           <h1>CONTACT FORM</h1>
        
           <form class='emailform' action='thankyou.php' method='post'>
           Name: <input type='text' name="fullname"><br>
               
           Email: <input type='text' name="email"><br>
               
           Message: <textarea name="message"></textarea><br>
           
               <input type='submit' value='Submit'>
           </form>
           
           <div class="row"></div>
       </div>
       
   
       
</div><!--SCROLLSDIV CLOSED------------------------------------------------>


    
    </body>

    <script type="text/javascript" src="thegithub.js"></script>
</html>
