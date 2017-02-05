
   
//---------------------PRE STYLES WHEN PAGE LOADED--------------------------- 

//------------------------------------------FOR MOBILE DEVICES-----------------------------------------------------------//
/*
let contentarray = []

function toggleDown(element){
    element.style.height='50vh'
    contentarray.push(element)
    
    }
    
    function toggleUp(){
    console.log(contentarray[0])

    contentarray[0].style.height='0vh'
    contentarray.pop()
    }

    function elementToggle(btn, mainelement){
        
btn.addEventListener('click', function(){
    toggleUp()
    
        toggleDown(mainelement)
    
    


});
        }

let menubtns = document.getElementsByClassName('menubtn')
let maincontentarray = document.getElementsByClassName('maincontenthidden')
maincontentarray[0].style.height='50vh'
maincontentarray[4].style.height='0vh'

contentarray.push(maincontentarray[0])

passwordarray= []

//-------------------giving clickeevents to every btn and mainelement, for them to toggle------------------------------//
for(i=0;i<maincontentarray.length;i++){
    maincontentarray[i].style.transition='1s ease;'
    elementToggle( menubtns[i], maincontentarray[i])
}*/
//------------------------------------------MOBILE END-----------------------------------------------------------//

           function whenloaded(){
               
           

var contactbtn = document.getElementById('contactbtn'),
    aboutbtn = document.getElementById('aboutbtn'),
    workbtn = document.getElementById('workbtn'),
    homebtn = document.getElementById('homebtn'),
    slide = document.getElementById('scrolls').style;
      let clickedhomeonce = false;
    let logoframe = document.createElement('DIV')
    
    let pressedhome = false;
        let pressedabout = false;
        let pressedwork = false;
        let pressedcontact = false;

      let navigation = document.getElementsByClassName('navigation')[0]
home()
           }
        let aboutsymbols = document.getElementsByClassName('aboutsymbol')
        
 
       
        for(i=0;i<aboutsymbols.length;i++){
            aboutsymbols[i].style.top = '0vh'
            aboutsymbols[i].style.opacity = '0'
            aboutsymbols[i].style.border = '2px solid black'
            aboutsymbols[i].style.width = '15vw'
        }

    function changeBackground(img){
        let background = document.getElementById('background')
        
        background.style.transition = '2s ease'
        background.style.backgroundImage = 'none'
        
        background.style.backgroundImage = img
    }

    let degrees = 0
    function backgroundTransition(btn, imagestring, btnnumber, firstdegstring, seconddegstring, degs){
     
        degrees = degs
        console.log('Degrees är: ' + degrees)
    
    background.style.transform = firstdegstring;
        
        setTimeout(function(){ 
        background.style.transition = '0.3s cubic-bezier(.07,.54,.74,1.05)'
        background.style.transform = seconddegstring;
    
    changeBackground(imagestring)
                         },700)
        goTo(btnnumber)
    setTimeout(function(){ 
        background.style.transition = '0.7s cubic-bezier(.07,.54,.74,1.05)'
    
    changeBackground(imagestring)
                         },1400)
  
    }

function home(){
    let homeportfolio = document.createElement('A')
    let homeme = document.createElement('A')
    let homecontact = document.createElement('A')
    let homedivtext = document.getElementById('hometext')
    let homedivremoveadd = document.getElementById('removeadd')
    let pressedskipintro = false;
    
    function appendHomeMenu(){
            let homemaindiv = document.createElement('DIV')
    homemaindiv.className = 'homemaindiv'
    homedivremoveadd.appendChild(homemaindiv)
    homemaindiv.style.opacity = '0'
    setTimeout(function(){ 
    homemaindiv.style.opacity = '1'
    homemaindiv.style.width = '60vw'
    homemaindiv.style.height = '50vh'
    homemaindiv.style.left = '20vw'
    }, 50);
        setTimeout(function(){
        let homearray = []
    let homeme = document.createElement('DIV')
        homearray.push(homeme)
        homeme.style.position = 'absolute'
        homeme.style.bottom = '-20vh'
        homeme.style.left = '0vw'
        homeme.style.width = '20vw'
        homeme.style.height= '30vh'
        homeme.style.transition= '2s ease'
        homeme.style.backgroundImage= 'url(homeabout.png)'
        homeme.style.backgroundSize= '100%'
        homeme.style.backgroundRepeat= 'no-repeat'
    let homeportfolio = document.createElement('DIV')
        homearray.push(homeportfolio)
        homeportfolio.style.position = 'absolute'
        homeportfolio.style.bottom = '-20vh'
        homeportfolio.style.left = '20vw'
        homeportfolio.style.width = '20vw'
        homeportfolio.style.height= '30vh'
        homeportfolio.style.transition= '2s ease'
        homeportfolio.style.backgroundImage= 'url(homeportfolio.png)'
        homeportfolio.style.backgroundRepeat= 'no-repeat'
        homeportfolio.style.backgroundSize= '100%'
    let homecontact = document.createElement('DIV')
        homearray.push(homecontact)
        homecontact.style.position = 'absolute'
        homecontact.style.bottom = '-20vh'
        homecontact.style.left = '40vw'
        homecontact.style.width = '20vw'
        homecontact.style.height= '30vh'
        homecontact.style.transition= '2s ease'
        homecontact.style.backgroundImage = 'url(homecontact.png)'
        homecontact.style.backgroundRepeat= 'no-repeat'
        homecontact.style.backgroundSize= '100%'
        homemaindiv.appendChild(homeme)
        homemaindiv.appendChild(homeportfolio)
        homemaindiv.appendChild(homecontact)
            setTimeout(function(){ 
            homeportfolio.style.bottom = '0vh'
            homeme.style.bottom = '0vh'
            homecontact.style.bottom = '0vh'
            homeportfolio.style.padding = '8vh'
            homeportfolio.style.fontSize = '2em'
            homeme.style.padding = '8vh'
            homeme.style.fontSize = '2em'
            homecontact.style.padding = '8vh'
            homecontact.style.fontSize = '2em'
 
homeportfolio.addEventListener('click', function(){ 
work()
})
homeme.addEventListener('click', function(){ 
about()
})

homecontact.addEventListener('click', function(){ 
contact()
})

    for(i=0;i<homearray.length;i++){
        let btn = homearray[i]
                btn.addEventListener('mouseover', function(){
                       btn.className ='homebtns'                       
                })
                btn.addEventListener('mouseleave', function(){
                        btn.className =''                       
                })
            }


            }, 10);

        }, 1500);
    }
    if (pressedhome==false){
        console.log(clickedhomeonce)
        
    let menu = document.getElementsByClassName('navigation')[0]

    navigation.style.backgroundColor = '#7b827c';
    
    pressedhome = true;
    
    
    if(clickedhomeonce!==true){
    menu.className='container-fluid text-center navigationup colwhite'
    let body = document.getElementsByTagName('body')[0]
      
    let logodiv = document.createElement('DIV')
    logodiv.style.transition = '0.8s cubic-bezier(.07,.54,.74,1.05)'
    logodiv.style.position = 'fixed'
    logodiv.style.top = '-15vh'
    logodiv.style.left = '38vw'
    logodiv.style.width = '20vw'
    logodiv.style.height = '30vh'
    logodiv.style.backgroundImage = 'url(logomain.png)'
    logodiv.style.backgroundSize = '100%'
    logodiv.style.backgroundRepeat = 'no-repeat'
    logodiv.style.opacity = '0'
    body.appendChild(logodiv)
    
    logoframe.style.position = 'absolute'
    logoframe.style.top = '-50vh'
    logoframe.style.backgroundRepeat = 'no-repeat'
    logoframe.style.width = '99%'
    logoframe.style.height = '99%'
    logoframe.style.left = '00.9px'
    logoframe.style.transition = '0.7s cubic-bezier(.07,.54,.74,1.05)'
    logoframe.style.opacity = '0'
    logoframe.style.backgroundImage='url(logoframe.png)'
    logoframe.style.backgroundSize='100%'
    logodiv.appendChild(logoframe)
    let logotext = document.createElement('DIV')
    logodiv.appendChild(logotext)
    let skipintro = document.createElement('DIV')
     
    setTimeout(function(){
        setTimeout(function(){
    skipintro.style.position='absolute'
    skipintro.style.transition='1.7s ease'
    skipintro.style.width='50%';
    skipintro.style.height='50%';
    skipintro.style.top='25%';
    skipintro.style.left='0';
    skipintro.style.opacity='0';
    skipintro.style.backgroundImage='url(skipintro.png)'
    skipintro.style.backgroundSize='100%'
    skipintro.style.backgroundRepeat='no-repeat'
    skipintro.className='cursor skipintro'
    logodiv.appendChild(skipintro)
    setTimeout(function(){
        skipintro.style.left='20vw'
        skipintro.style.opacity='1';
        logodiv.style.left='28vw'
    }, 50)
        }, 800)
       
    skipintro.addEventListener('click', function(){
        homedivtext.style.transition='1s ease'
        homedivtext.style.left='-100vw'
        skipintro.style.left='300vw'
        appendHomeMenu()
        logodiv.style.transform = 'scale(0.6)'
        logodiv.style.top = '75vh'
        logodiv.style.left = '38vw'
        menu.className = 'container-fluid text-center navigation colwhite'

        
        pressedskipintro = true
    })
  
    logodiv.style.top = '35vh'
    logodiv.style.opacity = '1'
    setTimeout(function(){

    setTimeout(function(){
        logoframe.style.top = '0.3vh'
        logoframe.style.opacity = '1'
    }, 100)
        setTimeout(function(){
    
    logotext.style.position = 'absolute'
    logotext.style.width = '100%'
    logotext.style.height = '100%'
    logotext.style.top = '-15vh'
    logotext.style.transition = '0.7s cubic-bezier(.07,.54,.74,1.05)'
    logotext.style.opacity = '1'
    logotext.style.backgroundImage='url(logotext.png)'
    logotext.style.backgroundSize='100%'
    logotext.style.backgroundRepeat = 'no-repeat'
    setTimeout(function(){
        logotext.style.top = '0'
        logotext.style.opacity = '1'
    }, 100 )
   
    }, 300)
       
    }, 400)
       
    }, 100)
    clickedhomeonce = true;
               setTimeout(function(){ 
    logoframe.style.transition = '0.8s cubic-bezier(1,0,.83,.67)'
   
    //logoframe.style.transform = 'scale(1.5)'
    //logoframe.style.transform = 'rotateZ(45deg)'
    setTimeout(function(){ 
  
    logodiv.style.transition =  '2s cubic-bezier(.07,.54,.74,1.05)';
    
        if(pressedskipintro!==true){
           setTimeout(function(){
    logodiv.style.transform = 'scale(0.6)'
    logodiv.style.top = '75vh'
    logodiv.style.left='38vw'
    skipintro.style.left='0'
    skipintro.opacity='0'
    setTimeout(function(){
        logodiv.removeChild(skipintro)
    }, 600)
    
    
    }, 0010);
            }
    
    }, 0010);
           
    setTimeout(function(){ 
  
    logoframe.style.transform = 'scale(1)'
    logoframe.style.transform = 'rotateZ(0deg)'
    }, 1000); 
    menu.className='container-fluid text-center navigation colwhite';
                   console.log(clickedhomeonce)
    
    }, 13000); 
    }
 
     if(pressedabout == true || pressedcontact == true || pressedwork ==  true){
         navigation.style.backgroundColor = '#738070';
    
         let degreebackstring = degrees.toString()
         let degreetostring = (degrees + 20).toString();
         let skewstring = 'skewY(' + degreetostring + 'deg)'
         console.log(skewstring)
         let skewback = 'skewY(' + degreebackstring  + 'deg)'
         console.log(skewstring)
         
    pressedabout = false;
    pressedwork = false;
    pressedcontact = false;
        backgroundTransition(homebtn, 'url(background.png)', 1, skewstring, skewback, degrees)
         setTimeout(function(){
             //logoframe.style.transform = 'rotateZ(-60deg)'
         }, 200)
    }
    
    
setTimeout(function(){
    
    
    let hometext = "I'm Niklas, a Front End Development student based in Gothenburg."
   
    homedivtext.style.transition='1s ease'
    homedivtext.style.fontSize = '200%'
    homedivtext.style.backgroundColor = 'rgba(0,0,0,0)'
    //homediv.style.boxShadow = '5px 5px 10px #282f3a'
    homedivtext.style.borderRadius = '0px'
    homedivtext.focus()

    letterByLetter(hometext, homedivtext, 50, 650)
      
    setTimeout(function(){ 
   
    letterByLetterRemove(hometext, homedivtext, 50, 450)
 
    }, 5500);

   setTimeout(function(){ 
if(pressedskipintro!==true){
   homedivremoveadd.removeChild(homedivtext)
   appendHomeMenu()
   }
    }, 10500);
    

}, 2500)
}
}
function about(){
navigation.style.backgroundColor = '#7b827c';   

pressedabout = true;

    if(pressedhome == true){
            let degreebackstring = degrees.toString()
         let degreetostring = (degrees - 20).toString();
         let skewstring = 'skewY(' + degreetostring + 'deg)'
         console.log(skewstring)
         let skewback = 'skewY(' + degreebackstring  + 'deg)'
         console.log(skewstring)
         
    pressedhome = false;
    pressedwork = false;
    pressedcontact = false;
        backgroundTransition(homebtn, 'url(background.png)', 2, skewstring, skewback, degrees)
         setTimeout(function(){
             //logoframe.style.transform = 'rotateZ(60deg)'
         }, 200)
   };

    if(pressedwork == true || pressedcontact == true){

         let degreebackstring = degrees.toString()
         let degreetostring = (degrees + 20).toString();
         let skewstring = 'skewY(' + degreetostring + 'deg)'
         console.log(skewstring)
         let skewback = 'skewY(' + degreebackstring  + 'deg)'
         console.log(skewstring)
         
    pressedhome = false;
    pressedwork = false;
    pressedcontact = false;
        backgroundTransition(homebtn, 'url(background.png)', 2, skewstring, skewback, degrees)
         setTimeout(function(){
             //logoframe.style.transform = 'rotateZ(-60deg)'
         }, 200)
    }

    let aboutremoveadd = document.getElementsByClassName('aboutremoveadd')[0]
    
    if(pressedaboutonce!==true){
//-----------------studiesbtn declared----------------------------------
    let studiesbtn = document.createElement('A')
    studiesbtn.style.top = '25vh'
    studiesbtn.style.right = '63.5vw'
    studiesbtn.style.animationDuration =  '2s';
    studiesbtn.style.animation =  'studiescurved 2s ease';
    
//-----------------mebtn declared--------------------------
    let mebtn = document.createElement('A')
    mebtn.style.top = '25vh'
    mebtn.style.right = '43.5vw'
    mebtn.style.animationDuration =  '2s';
    mebtn.style.animation =  'mecurved 2s ease';
    
//-------------------futurebtn declared--------------------
    /*let futurebtn = document.createElement('A')
    futurebtn.style.top = '25vh'
    futurebtn.style.right = '35vw'
    futurebtn.style.animationDuration =  '2s';
    futurebtn.style.animation =  'futurecurved 2s ease';*/
    
    
//resumebtn declared------------------------------------
    let resumebtn = document.createElement('A')
    resumebtn.style.top = '25vh'
    resumebtn.style.right = '22.5vw'
    resumebtn.style.animationDuration =  '2s';
    resumebtn.style.animation =  'resumecurved 2s ease';
    
//----------------------------------------------------------
    
    let btnarray = []
    btnarray.push(studiesbtn, mebtn, resumebtn)
    for(i=0;i<btnarray.length;i++){
    aboutremoveadd.appendChild(btnarray[i])
    btnarray[i].style.position =  'absolute'
    btnarray[i].setAttribute('href',"#")
    btnarray[i].style.height = '4px'
    btnarray[i].style.width = '4px'
    btnarray[i].style.border= '2px solid #47603c'
    btnarray[i].style.borderRadius =  '50%';
    btnarray[i].style.transition =  '1s ease';
    }
        
    setTimeout(function(){
        for(i=0;i<btnarray.length;i++){
        indexbtn = btnarray[i]
        btnarray[i].className = 'aboutbtnsbefore'
        btnarray[i].style.height = '30vh'
        btnarray[i].style.width = '19vw'
        btnarray[i].style.border= 'none'
        btnarray[i].style.backgroundSize = '100%'
        btnarray[i].style.backgroundRepeat = 'no-repeat'
        btnarray[i].style.backgroundColor = 'none'
        btnarray[i].style.opacity =  '1';
        btnarray[i].style.borderRadius =  '0%';


        //futurebtn.style.right =  '32.5vw';

        }
        
        setTimeout(function(){
            studiesbtn.style.backgroundImage = 'url(studiesbtn.png)'
            resumebtn.style.backgroundImage = 'url(resumebtn.png)'
            /*futurebtn.style.backgroundImage = 'url(futurebtn.png)'*/
            mebtn.style.backgroundImage = 'url(mebtn.png)'
        },200)
       
    }, 2000)
    
    function higherMenu(){
    for(i=0;i<btnarray.length;i++){
      btnarray[i].style.color = 'white'
      btnarray[i].style.fontFamily = 'PT Mono' 
      btnarray[i].style.padding = '3px 2px 2px 2px'
      btnarray[i].style.fontSize = '1.7em'
      btnarray[i].style.textDecoration = 'none'
    }
        
    studiesbtn.style.top = '11vh'
    studiesbtn.style.backgroundImage = 'url(studiesbtn2.png)'
    studiesbtn.style.height = '8vh'
    mebtn.style.top = '11vh'
    mebtn.style.backgroundImage = 'url(mebtn2.png)'
    mebtn.style.height = '8vh'
    /*futurebtn.style.top = '15vh'
    futurebtn.style.backgroundImage = 'url(futurebtn2.png)'
    futurebtn.style.height = '8vh'*/
    resumebtn.style.top = '11vh'
    resumebtn.style.backgroundImage = 'url(resumebtn2.png)'
    resumebtn.style.height = '8vh'
}

let studiesclicked;
let meclicked;
let resumeclicked;

studiesbtn.addEventListener('click', function(){
    studiesclicked=true;
    meclicked=false;
    resumeclicked=false;
    higherMenu()
    studiesbtn.className='aboutmouseover'
    for(i=0; i<btnarray.length; i++){
        if(i!==0){
       btnarray[i].className='aboutmouseleave'
        }
    }
})

mebtn.addEventListener('click', function(){
    studiesclicked=false;
    meclicked=true;
    resumeclicked=false;
    higherMenu()
    mebtn.className='aboutmouseover'
    for(i=0; i<btnarray.length; i++){
        if(i!==1){
        btnarray[i].className='aboutmouseleave'
        }
    }
})



resumebtn.addEventListener('click', function(){
    studiesclicked=false;
    meclicked=false;
    //futureclicked=false;
    resumeclicked=true;
    higherMenu()
    resumebtn.className='aboutmouseover'
    for(i=0; i<btnarray.length; i++){
        if(i!==3){
        btnarray[i].className='aboutmouseleave'
        }
    }
})

    for(i=0; i<btnarray.length; i++){
        let btn = btnarray[i]
        
            btn.addEventListener('mouseover', function(){
            btn.className = 'aboutmouseover'
            
            })
            btn.addEventListener('mouseleave', function(){
            btn.className = 'aboutmouseleave'
            
            
            })
                                  }
let pressedresume = false;
let pressedme = false;
let pressedstudies = false;
    let about1 = document.createElement('DIV')
    let about2 = document.createElement('DIV')
    let about3 = document.createElement('DIV') 
    
function newDivs(classname1, classname2, classname3, about1left, about2left, about3left){

    let aboutmaindiv = document.createElement('DIV')
    aboutmaindiv.className = 'aboutmaindiv'
    aboutremoveadd.appendChild(aboutmaindiv)
    aboutmaindiv.style.opacity = '0'
    setTimeout(function(){ 
    aboutmaindiv.style.opacity = '1'
    aboutmaindiv.style.width = '85vw'
    aboutmaindiv.style.height = '43vh'
    aboutmaindiv.style.left = '4vw'
    }, 50);
        setTimeout(function(){ 
        about1.className=classname1
        about2.className=classname2
        about3.className=classname3
        aboutmaindiv.appendChild(about1)
         aboutmaindiv.appendChild(about2)
         aboutmaindiv.appendChild(about3)
            setTimeout(function(){
            about3.style.left = about3left
            setTimeout(function(){ 
            
            
            about2.style.left = about2left
            

            }, 1000);
            setTimeout(function(){ 
            
            
            about1.style.left = about1left
            

            }, 2000);

            }, 150);
            
        }, 20);
    }    

        let wordarray=[]
        
 function wordForWord(){
    if(pressedsummaryonce!==true){
        let intervalresumes=0
        let declininginterval=600;
        let name;
        let wordimagearray = ['url(word1.png)', 'url(word2.png)', 'url(word3.png)', 'url(word4.png)', 'url(word5.png)', 'url(word6.png)', 'url(word7.png)', 'url(word8.png)', 'url(word9.png)', 'url(word10.png)', 'url(word11.png)', 'url(word12.png)', 'url(word13.png)', 'url(word14.png)' ]
        for(i=0;i<wordimagearray.length;i++){
            name = 'word' + (i+1).toString()
            console.log(name)
        let word = name
            word = document.createElement('DIV')
            declininginterval -= 50
            intervalresumes += declininginterval
            word.style.backgroundImage = wordimagearray[i]
            word.style.position = 'absolute'
            word.style.backgroundSize = '100%'
            word.style.transition='1.5s ease'
            word.style.left= '-65vw'
            word.style.width='100%'
            word.style.height='100%'
            word.style.top='0'
            word.style.backgroundRepeat='no-repeat'
            
            about2.appendChild(word)
            setTimeout(function(){
                word.style.left= '0vw'
                console.log(intervalresumes)
                wordarray.push(word)
                console.log(word)
            }, intervalresumes)
            
        }
    pressedsummaryonce=true;
    }
    
    else{
        let intervalresumes=0
        let declininginterval=600;
        for(let i=0;i<wordarray.length;i++){
            declininginterval -= 50
            intervalresumes += declininginterval
            setTimeout(function(){
                console.log('Wordarray längd: ' + wordarray.length)
        wordarray[i].style.left = '0vw'
        console.log(wordarray[i])
            }, intervalresumes)
        
    }
    }
          }
        
    function wordForWordBack(){
        console.log('wordForWordBack initiated')
         let intervalresumes=0
        let declininginterval=600;
        
        for(let i=wordarray.length-1;i>=0;i--){
        
            
            declininginterval -= 50
            intervalresumes += declininginterval

            setTimeout(function(){
                wordarray[i].style.left='-65vw'
                console.log(wordarray[i])
            }, intervalresumes)
            
        }
    }        
        
      
studiesbtn.addEventListener('click', function(){
    if(pressedstudies!==true){
        
        if(pressedme==true){
            about1.style.left = '-30.5vw'
            about2.style.left = '-30.5vw'
            about3.style.left = '-30.5vw'
                 setTimeout(function(){
        newDivs('studies1', 'studies2', 'studies3','2vw',  '20vw', '52vw')
               pressedstudies=true;
               pressedme = false;
               pressedresume=false;
            }, 1500)
                }
        
         else if(pressedresume==true){
            wordForWordBack()
            
            setTimeout(function(){
            about1.style.left = '-30.5vw'
            about2.style.left = '-30.5vw'
            about3.style.left = '-30.5vw'
                 setTimeout(function(){
        newDivs('studies1', 'studies2', 'studies3','2vw',  '20vw', '52vw')

               pressedstudies=true;
               pressedme = false;
               pressedresume=false;
            }, 1500)
            }, 2000)
    
                }
        
             else{setTimeout(function(){
        newDivs('studies1', 'studies2', 'studies3','2vw',  '20vw', '52vw')
               pressedstudies=true;
               pressedme = false;
               pressedresume=false;
            }, 1000)
        }
        
    }
})

mebtn.addEventListener('click', function(){
    if(pressedme!==true){
        
          if(pressedstudies==true){
            about1.style.left = '-30.5vw'
            about2.style.left = '-30.5vw'
            about3.style.left = '-30.5vw'
                 setTimeout(function(){
        newDivs('me1', 'me2', 'me3', '2vw', '34vw', '66vw')

               pressedstudies=false;
               pressedme = true;
               pressedresume=false;
            }, 1500)
                }
        
        else if(pressedresume==true){
            wordForWordBack()
            
            setTimeout(function(){
                   about1.style.left = '-30.5vw'
            about2.style.left = '-30.5vw'
            about3.style.left = '-30.5vw'
                 setTimeout(function(){
        newDivs('me1', 'me2', 'me3', '2vw', '34vw', '66vw')

               pressedstudies=false;
               pressedme = true;
               pressedresume=false;
            }, 1500)
            }, 2000)
    
                }
        
        
        else{
            setTimeout(function(){
             
        newDivs('me1', 'me2', 'me3', '2vw', '34vw', '66vw')

               pressedstudies=false;
               pressedme = true;
               pressedresume=false;
            }, 800)
            }
        }
 
})
let pressedsummaryonce=false;


resumebtn.addEventListener('click', function(){
    if(pressedresume==false && pressedsummaryonce==true){
        
          if(pressedstudies==true||pressedme==true){
            about1.style.left = '-30.5vw'
            about2.style.left = '-30.5vw'
            about3.style.left = '-30.5vw'
                 setTimeout(function(){
        newDivs('', 'resume2', '22.5vw','27.5vw',  '25vw', '52vw')
               pressedstudies=false;
               pressedme = false;
               pressedresume=true;
            }, 900)
                 
                 wordForWord()

    
                }
    }
        
        else if(pressedresume==false && pressedsummaryonce==false){
        if(pressedstudies==true||pressedme==true){
            about1.style.left = '-30.5vw'
            about2.style.left = '-30.5vw'
            about3.style.left = '-30.5vw'
            
            setTimeout(function(){
                
                wordForWord()
             
        newDivs('', 'resume2', '22.5vw','2vw',  '25vw', '52vw')

               pressedstudies=false;
               pressedme = false;
               pressedresume=true;
            }, 900)
            }
            
            else{
                setTimeout(function(){
                
                wordForWord()
             
        newDivs('', 'resume2', '22.5vw','2vw',  '25vw', '52vw')

               pressedstudies=false;
               pressedme = false;
               pressedresume=true;
            }, 900)
            }
        }
})





pressedaboutonce=true
}//--------------if pressedaboutonce ends----------------------
    
    if(pressedaboutonce==true){
       
    }
}
let pressedworkonce = false;
function work(){
    navigation.style.backgroundColor = '#7b827c';
    
    pressedwork = true;

     if(pressedhome == true|| pressedabout == true){
 
         let degreebackstring = degrees.toString()
         let degreetostring = (degrees - 20).toString();
         let skewstring = 'skewY(' + degreetostring + 'deg)'
         console.log(skewstring)
         let skewback = 'skewY(' + degreebackstring  + 'deg)'
         console.log(skewstring)
         
    pressedabout = false;
    pressedhome = false;
    pressedcontact = false;
        backgroundTransition(homebtn, 'url(background.png)', 3, skewstring, skewback, degrees)
         setTimeout(function(){
             //logoframe.style.transform = 'rotateZ(60deg)'
         }, 200)
    }
    
    if(pressedcontact == true){
             let degreebackstring = degrees.toString()
         let degreetostring = (degrees + 20).toString();
         let skewstring = 'skewY(' + degreetostring + 'deg)'
         console.log(skewstring)
         let skewback = 'skewY(' + degreebackstring  + 'deg)'
         console.log(skewstring)
         
    pressedabout = false;
    pressedhome = false;
    pressedcontact = false;
        backgroundTransition(homebtn, 'url(background.png)', 3, skewstring, skewback, degrees)
         setTimeout(function(){
             //logoframe.style.transform = 'rotateZ(.60deg)'
         }, 200)
    }
      
    
    if(pressedworkonce!==true){
    workremoveadd.style.position = 'absolute'
    workremoveadd.style.width = '0vw'
    workremoveadd.style.transition = '1s cubic-bezier(.07,.54,.74,1.05)'
    workremoveadd.style.left = '14vw'
    setTimeout(function(){
        workremoveadd.style.width = '70vw'
    }, 1000)
    workremoveadd.style.height = '33vw'
    workremoveadd.style.top = '15vh'
    workremoveadd.style.overflow = 'hidden'
    //workremoveadd.style.borderLeft='2px solid #b9beb8'
    //workremoveadd.style.borderRight='2px solid #b9beb8'    

    let workarray = []
    let workrightarray = []
    let workimagearray = []
    let textdivarray = []
    let workrighttextarray=[' A javascript focused project in which canvas is explored. The criterias was that it had to feature a circle, a rectangle, a triangle, a clear and a ‘export to JSON’ tool.<br><br><br>• HTML5 <br>• CSS3<br>• Javascript<br>• Bootstrap ', ' A school project with the idea of getting familiar with the process of planning a project with the client as well as learning relevant graphic design tools. <br><br>• HTML5<br>• CSS3 <br>• Javascript<br>• Photoshop<br>• Balsamique<br>• Bootstrap', "Learning about API's, I did a 'search your place'- app by connecting the users wish to google.<br><br><br><br><br>• HTML5<br>• CSS3 <br>• Javascript<br>• Photoshop<br>", 'A school assignment with the goal of learning about forms and button.<br><br><br><br><br>• HTML5<br>• CSS3 ']
    let backgroundimagearray = ['url(canvasBW.png)', 'url(caseimageMGC.png)', 'url(caseimagegoogleapi.png)', 'url(formsandbuttons.png)']
let childrenappended;
    if(childrenappended!==true){
        
function createCase(casename){
        casename = document.createElement('DIV')
        casename.style.transition = '1s cubic-bezier(.07,.54,.74,1.05)'
        casename.style.opacity = '1'
        workarray.push(casename)
        workremoveadd.appendChild(casename)
    }
    
    for(i=1;i<=4;i++){
        let casename = 'case' + i.toString
    createCase(casename)
        }
        
    function createCaseImage(caseimagename, caseToAppend, backgroundimage){
            caseimagename = document.createElement('DIV')
            caseToAppend.appendChild(caseimagename)
            workimagearray.push(caseimagename)
            caseimagename.style.backgroundImage = backgroundimage
            caseimagename.style.position = 'absolute'
            caseimagename.style.transition = '1s ease'
            caseimagename.style.height = '100%'
            caseimagename.style.width = '100%'
            caseimagename.style.backgroundRepeat = 'no-repeat'
            caseimagename.style.backgroundSize = '100%'
            caseimagename.style.zIndex = '300'
            caseimagename.style.filter= 'brightness(0.45) blur(3px)'
    }
    
    for(i=0;i<workarray.length;i++){
    let caseimagename = 'caseimage' + (i+1).toString
            createCaseImage(caseimagename, workarray[i], backgroundimagearray[i])

        }
    
    function createWorkRight(name, workrighttext, caseToAppend){
        name = document.createElement('DIV')
        name.className='workright'
        name.style.borderBottom='2px solid #6e1c2a'
        name.style.borderLeft='2px solid #6e1c2a'
        name.style.borderTop='2px solid #6e1c2a'
        name.style.borderRight='2px solid #6e1c2a'
        name.style.backgroundColor='rgb(185, 190, 184)'
        name.innerHTML=workrighttext
        name.style.color='#40473e'
        name.style.fontSize='0.95vw'
        name.style.fontSWeight='700'
        name.style.textAlign='left'
        name.style.fontFamily="'Open Sans Condensed', sans-serif"
        name.style.padding='4vh 3vw'
        name.style.backgroundRepeat = 'no-repeat'
        name.style.position = 'absolute'
        name.style.width = '16vw'
        name.style.height = '100%'
        name.style.right = '0'
        name.style.top = '0'
        name.style.zIndex = '301'
        workrightarray.push(name)
        caseToAppend.appendChild(name)
    }
        
        for(i=0; i<workrighttextarray.length;i++){
            let itoString = (i+1).toString()
            let workrightname  = 'workright' + itoString
            createWorkRight(workrightname, workrighttextarray[i], workarray[i])
        }
        
let linkarray = ['www.fcbarcelona.com', 'www.aftonbladet.se', 'www.fcbarcelona.com', 'www.fcbarcelona.com']

    function createwatchproject(workrightToAppend, linkarrayindex){
let watchproject = document.createElement('A')
    watchproject.innerHTML='see it live'
    watchproject.className = 'watchproject'
    watchproject.href=linkarrayindex
    workrightToAppend.appendChild(watchproject)
}

    for(i=0;i<linkarray.length;i++){
    createwatchproject(workrightarray[i], linkarray[i])
}
    
    textarray = ["Picasso's Legacy: a canvas project", 'From wireframe to mockup: The Music Gear Company', 'Interactive map: connecting API with user', 'Forms and buttons: just as it sounds', '', '', '', '']
    
    function createCaseText(nameelement, text, parentdiv){
        nameelement = document.createElement('DIV')
        nameelement.style.position='absolute'
        nameelement.style.transition='0.5s ease'
        nameelement.innerHTML = text
        nameelement.style.left = '7vw'
        nameelement.style.color = '#e8e5e5'
        nameelement.style.width='30vw'
        nameelement.style.height='0'
        nameelement.style.top='11vw'
        nameelement.style.fontFamily="'Open Sans Condensed', sans-serif"
        nameelement.style.fontSize='1.5vw'
        nameelement.style.zIndex='500'
        textdivarray.push(nameelement)
        parentdiv.appendChild(nameelement)
    }

    function makeElementDarker(imageelement, textelement){
        imageelement.addEventListener('mouseover', function(){
            imageelement.style.filter='brightness(1.0) blur(0px)'
            textelement.zIndex=''

                textelement.style.left='-200vw'       
        })
    }
    
    function makeElementBrighter(imageelement, textelement){
        imageelement.addEventListener('mouseleave', function(){
            imageelement.style.filter='brightness(0.45) blur(3px)';
            textelement.style.left='7vw'
            
                textelement.zIndex='500'
            textelement.style.opacity='1'
      
        })
    }
        
    for(i=0;i<workarray.length;i++){
        createCaseText('casetext' + i.toString(), textarray[i], workarray[i])

    }
    
    for(i=0;i<workimagearray.length;i++){
        makeElementDarker(workimagearray[i], textdivarray[i])

    }
    
    for(i=0;i<workimagearray.length;i++){

        makeElementBrighter(workimagearray[i], textdivarray[i])
        console.log(workimagearray[i])
    }
    
    console.log(workarray)
    
    let leftvalue = -61;
    let leftvaluearray = []
    
    for(i=0;i<workarray.length; i++){
    
    leftvalue += 66
    leftvaluearray.push(leftvalue)
    
    newleftvalue = leftvalue.toString() + 'vw'
    
    workarray[i].className='col-xs-4'
    workarray[i].style.position = 'absolute'
    workarray[i].style.top = '4vh'
    workarray[i].style.outline='3.5px solid #b9beb8'
    workarray[i].style.height = '85%'
    workarray[i].style.width = '60vw'
    workarray[i].style.padding = '0 0'
    //workarray[i].style.backgroundImage = "url(canvasBW.png)";
    workarray[i].style.backgroundSize = "100%"
    workarray[i].style.opacity='1'
    workarray[i].style.left=newleftvalue
    
    workarray[i].style.transition='1.5s ease'
    workarray[i].style.float='left'
    
    }
    
    let workleftarrow = document.getElementById('workleftarrow')
    
    let workrightarrow = document.getElementById('workrightarrow')
       
        let leftclicks = 0;
        let rightclicks = 0;
        
        workleftarrow.addEventListener('click', function(){
             
        var leftvalue1 = 0
        
        if(rightclicks>0 && leftclicks<4){
            
            leftclicks++
            rightclicks--
            
            for(i=0;i<workarray.length; i++){
               
                for(i=0;i<leftvaluearray.length;i++){
                    leftvaluearray[i]+=66
                    console.log('det här är leftvaluearray: ' + leftvaluearray)
                    leftvalue1 = leftvaluearray[i]
                let newleftvalue1 = leftvalue1.toString() + 'vw'

                workarray[i].style.left=newleftvalue1
                }
                
                workarray[i].style.left=newleftvalue1
            }
        }
            console.log(rightclicks, leftclicks)
    })

    
    workrightarrow.addEventListener('click', function(){
         var leftvalue1 = 0
               
        if(leftclicks<=3 && rightclicks<3){
         rightclicks++
         
         if(leftclicks !== 0){
         leftclicks-- 
         }
         console.log(rightclicks, leftclicks)
         if(leftclicks<=4 && rightclicks<=3){
            for(i=0;i<workarray.length; i++){
               
                for(i=0;i<leftvaluearray.length;i++){
                    leftvaluearray[i]-=66
                    console.log('det här är leftvaluearray: ' + leftvaluearray)
                    leftvalue1 = leftvaluearray[i]
                let newleftvalue1 = leftvalue1.toString() + 'vw'

                workarray[i].style.left=newleftvalue1
                }


                workarray[i].style.left=newleftvalue1

            }
         };
        }
    })

        pressedworkonce = true;

}
}
}
     
let pressedcontactonce = false;
function contact(){
    
        navigation.style.backgroundColor = '#7b827c';
    
pressedcontact = true;

  if(pressedhome == true || pressedabout == true || pressedwork == true){
         let degreebackstring = degrees.toString()
         let degreetostring = (degrees - 20).toString();
         let skewstring = 'skewY(' + degreetostring + 'deg)'
         console.log(skewstring)
         let skewback = 'skewY(' + degreebackstring  + 'deg)'
         console.log(skewstring)
         
    pressedhome = false;
    pressedwork = false;
    pressedabout = false;
        backgroundTransition(homebtn, 'url(background.png)', 4, skewstring, skewback, degrees)
         setTimeout(function(){
             //logoframe.style.transform = 'rotateZ(60deg)'
         }, 200)
    }
    
    if(pressedcontactonce==false){
    setTimeout(function(){
        
    
    let contactdivremoveadd = document.getElementById('contactremoveadd')
    let contactmaindiv = document.createElement('DIV')
    contactmaindiv.className = 'contactmaindiv'
    contactdivremoveadd.appendChild(contactmaindiv)
    contactmaindiv.style.opacity = '0'
    setTimeout(function(){ 
    contactmaindiv.style.opacity = '1'
    contactmaindiv.style.width = '60vw'
    contactmaindiv.style.height = '60vh'
    contactmaindiv.style.left = '21.5vw'
    }, 50);
        setTimeout(function(){ 
    let contactlinkedin = document.createElement('A')
        contactlinkedin.href = 'https://www.linkedin.com/in/niklasnauber'
        contactlinkedin.style.position = 'absolute'
        contactlinkedin.style.top = '4.65vh'
        contactlinkedin.style.left = '-20.5vw'
        contactlinkedin.style.width = '15vw'
        contactlinkedin.style.height= '23vh'
        contactlinkedin.style.transition= '2s ease'
        contactlinkedin.style.backgroundImage= 'url(contactlinkedin.png)'
        contactlinkedin.style.backgroundRepeat = 'no-repeat'
        contactlinkedin.style.backgroundSize= '100%'
    let contactmail = document.createElement('DIV')
        contactmail.href = '#'
        contactmail.style.position = 'absolute'
        contactmail.style.top = '31.3vh'
        contactmail.style.left = '-20.5vw'
        contactmail.style.width = '15vw'
        contactmail.style.height= '23vh'
        contactmail.style.transition= '2s ease'
        contactmail.style.backgroundImage='url(contactmail.png)'
        contactmail.style.backgroundRepeat = 'no-repeat'
        contactmail.style.backgroundSize= '100%'
        contactmail.innerHTML=' nauber91@hotmail.com'
        contactmail.style.fontSize='1vw'
        contactmail.style.fontFamily="'Open Sans Condensed', sans-serif";
        contactmail.style.padding='4.5vw 1.3vw 4.5vw 1.3vw'
        contactmail.style.textDecoration='none'
        contactmail.style.color='#003300'
    let contactmap = document.createElement('DIV')
        contactmap.id='map';
        contactmap.href = '#'
    let mapframe = document.createElement('IMG')
        mapframe.src='url(logoframe.png)'
        mapframe.style.position = 'absolute'
        mapframe.style.left = '0'
        mapframe.style.right = '0'
        mapframe.style.width='100%'
        mapframe.style.height='100%'
        contactmap.style.position = 'absolute'
        contactmap.style.top = '10vh'
        contactmap.style.left = '-20.5vw'
        contactmap.style.width = '30vw'
        contactmap.style.height= '40vh'
        contactmap.style.border= '2px solid #b9beb8'
        contactmap.style.transition= '2s ease'
        contactmap.style.backgroundImage = 'url(logoframe.png)'
        contactmap.style.backgroundSize= '100%'
        contactmaindiv.appendChild(contactlinkedin)
        contactmaindiv.appendChild(contactmail)
        contactmaindiv.appendChild(contactmap)
            setTimeout(function(){ 
            contactlinkedin.style.left = '2vw'
            contactmail.style.left = '2vw'
            contactmap.style.left = '24.5vw'
            contactlinkedin.style.padding = '8vh'
            contactlinkedin.style.fontSize = '2em'
            contactmap.style.padding = '8vh'
            contactmap.style.fontSize = '2em'
            
                function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(57.6826198, 12.0007051),
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
                    
        var marker = new google.maps.Marker({
          position: {lat: 57.6826198, lng: 12.0007051},
          map: map
        });
      }

                
myMap()          
            
            }, 150);
            
        }, 20);
         pressedcontactonce = true;
    }, 1000);
        
    }
            
}



       //----------------------------------------------------------------- 
    

        
        var letterByLetter = function(string, element, interval, timestart) {
            let text = ''
            let time = timestart;
            
            function doSetTimeout (text, time){
                setTimeout(function(){ element.value = text}, time);
            }
            
            for(let i=0;i<=string.length;i++){
                let j = string.charAt(i)
                
                text += j
                
                time += interval
                doSetTimeout(text,time)
}
        } 
        
        var letterByLetterRemove = function(string, element, interval, timestart) {
            
            let text = ''
            let time = timestart;
            
            function doSetTimeout (text, time){
                setTimeout(function(){ element.value = text}, time);
            }
            
            for(let i=0;i<=string.length;i++){
                let j = string.charAt(i)
                
                text = string.substring(0, string.length-i)
                
                time += interval
                doSetTimeout(text,time)
}     
            
        } 
        
    
        
//--------------------WHEN HOMEBUTTON IS CLICKED----------------------------
   
homebtn.addEventListener('click', function(){

home()

    });

//---------------------------------WHEN ABOUTBUTTON IS CLICKED------------------
let pressedaboutonce;
aboutbtn.addEventListener('click', function(){
    
    about()
    
});

//-----------------------------WHEN WORKBUTTON IS CLICKED------------------->


let workremoveadd = document.getElementById('workremoveadd')

workbtn.addEventListener('click', function(){

work()

});

//ANNANDAG JUL, 2016-----------------------------------------------------------------

//---------------WHEN CONTACTBTN IS CLICKED---------------------
contactbtn.addEventListener('click', function(){
contact()


})

//-----------------------------WHEN SWITCHING PAGE------------------------

function goTo(num) {

    resetClasses();
    switch(num) {
        case 1:
            homebtn.className += ' active';
            slide.left = '0';
            break;
        case 2:
            aboutbtn.className += ' active';
            slide.left = '-100vw';
            break;
        case 3:
            workbtn.className += ' active';
            slide.left = '-200vw';
            break;
        case 4:
            contactbtn.className += ' active';
            slide.left = '-300vw';
            break;

    };
};  

function resetClasses() {
    homebtn.className = aboutbtn.className = workbtn.className = contactbtn.className = 'col-xs-3 navhover scroll';
};
     
 
     


