
    //window.addEventListener('onload', function(event){
//---------------------PRE STYLES WHEN PAGE LOADED----------------------------
        
        let homemoon = document.getElementById('homemoon')
            homemoon.style.position = 'relative'
            homemoon.style.top = '25vh'
            homemoon.style.transition = '2s ease';
            
        let moondiv = document.getElementsByClassName('moon')[0]
            moondiv.style.paddingBottom = '200px'
            
        let astronautdiv = document.getElementsByClassName('astronaut')[0]
            astronautdiv.style.paddingBottom = '200px'
            
        let codeworlddiv = document.getElementsByClassName('codeworld')[0]
            codeworlddiv.style.paddingBottom = '200px'
            
        let homeastronaut = document.getElementById('homeastronaut')
            homeastronaut.style.opacity='0'
            homeastronaut.style.position = 'relative'
            homeastronaut.style.top = '5vh'
            homeastronaut.style.left='-28vw'
            homeastronaut.style.transition = '2s ease';
        
        let homecodeworld = document.getElementById('homecodeworld')
            homecodeworld.style.opacity='0'
            homecodeworld.style.position = 'relative'
            homecodeworld.style.top = '5vh'
            homecodeworld.style.left='28vw'
            homecodeworld.style.transition = '2s ease';

        let aboutastronaut = document.getElementsByClassName('aboutastronaut')[0]
            aboutastronaut.style.position = 'relative'
            aboutastronaut.style.top = '25vh'
            aboutastronaut.style.transition = '2s ease';
            aboutastronaut.style.paddingBottom = '200px';
            aboutastronaut.style.border = '1px solid white';


        
        

       //----------------------------------------------------------------- 
    function focusonload () {
    document.getElementsByClassNameById('focusonload')[0].focus();
};
        
        var letterByLetter = function(string, element, interval, timestart) {
            let text = ''
            let time = timestart;
            
            function doSetTimeout (text, time){
                setTimeout(function(){ element.innerHTML = text}, time);
                
            }
            for(let i=0;i<=string.length;i++){
                let j = string.charAt(i)
                
                text += j
                
                time += interval
                doSetTimeout(text,time)
    
}
        }
        
    let upperleft = document.getElementById('niklasnauber')
 
    var contactbtn = document.getElementById('contactbtn'),
    aboutbtn = document.getElementById('aboutbtn'),
    workbtn = document.getElementById('workbtn'),
    homebtn = document.getElementById('homebtn'),
    slide = document.getElementById('scrolls').style;
        
//--------------------WHEN HOMEBUTTON IS CLICKED----------------------------
        
homebtn.addEventListener('click', function(){
    let homedivtext = document.getElementById('hometext')
    let hometext = "Click the moon to bring life to space."
    homedivtext.style.color = '#f7f7f7';
    homedivtext.style.margin =  "50vh 0vw 50vh 0vw";
    homedivtext.style.fontSize = '100%'
    homedivtext.style.backgroundColor = 'black'
    //homediv.style.boxShadow = '5px 5px 10px #282f3a'
    homedivtext.style.borderRadius = '5px'


    
    letterByLetter(hometext, homedivtext, 50, 850)
    
    let mouseoverbool = false;
    
    homemoon.addEventListener('mouseover', function(){
    mouseoverbool = true;
        
               
    if(mouseoverbool == true){
        
    homemoon.style.height = '200px'
    homemoon.style.width = '200px'
    }
    });
                              
    homemoon.addEventListener('mouseleave', function(){
    mouseoverbool = false;
    homemoon.style.height = '150px'
    homemoon.style.width = '150px'
    });
    
    //--------------------WHEN CLICKING ON HOMEMOON----------------------------
    
    homemoon.addEventListener('click', function(){
        
    homeastronaut.style.opacity='1'
    homeastronaut.style.width='290px'
    homeastronaut.style.height='150px'
    
    homedivtext.innerHTML = ''
    
    let astronauttextdiv = document.getElementById('astronauttext')
    let astronauttext = "Hi! I'm Niklas, an astronaut on a mission."
    
    let codeworldtextdiv = document.getElementById('codeworldtext')
    let codeworldtext = "I'm trying to reach the world of Front End."
    
    astronauttextdiv.style.color = '#f7f7f7';
    astronauttextdiv.style.margin =  "50vh 0vw 50vh 0vw";
    astronauttextdiv.style.fontSize = '100%'
    astronauttextdiv.style.backgroundColor = 'black'
    //homediv.style.boxShadow = '5px 5px 10px #282f3a'
    astronauttextdiv.style.borderRadius = '5px'
    
    codeworldtextdiv.style.color = '#f7f7f7';
    codeworldtextdiv.style.margin =  "50vh 0vw 50vh 0vw";
    codeworldtextdiv.style.fontSize = '100%'
    codeworldtextdiv.style.backgroundColor = 'black'
    //homediv.style.boxShadow = '5px 5px 10px #282f3a'
    codeworldtextdiv.style.borderRadius = '5px'
    codeworldtextdiv.style.paddingRight =  "0px";

    letterByLetter(astronauttext, astronauttextdiv, 50, 1150)
    
    
    
    setTimeout(function(){ 
        
    homecodeworld.style.opacity='1'
    letterByLetter(codeworldtext, codeworldtextdiv, 50, 1150)
    
    }, 5000);
        
    });
        
    
 
    });

//---------------------------------WHEN ABOUTBUTTON IS CLICKED------------------

aboutbtn.addEventListener('click', function(){
    let aboutastronauttext = document.getElementById('aboutastronauttext')
    let abouttext = "Click me to find out about who I am and what I do."
    aboutastronauttext.style.color = '#f7f7f7';
    aboutastronauttext.style.margin =  "75vh 0vw 75vh 0vw";
    aboutastronauttext.style.fontSize = '100%'
    aboutastronauttext.style.backgroundColor = 'black'
    //homediv.style.boxShadow = '5px 5px 10px #282f3a'
    aboutastronauttext.style.borderRadius = '5px'
    aboutastronauttext.style.height = '2em'
    aboutastronauttext.style.border= '1px solid white'
    
    let aboutastronaut1 = document.getElementById('aboutastronaut')
    aboutastronaut1.style.transition = '2s ease'


    
    letterByLetter(abouttext, aboutastronauttext, 50, 850)
    
    let mouseoverbool = false;
    
    aboutastronaut1.addEventListener('mouseover', function(){
    mouseoverbool = true;
        
               
    if(mouseoverbool == true){
        
    aboutastronaut1.style.border = '1px solid white'
    aboutastronaut1.style.height = '130px'
    aboutastronaut1.style.width = '200px'
    }
    });
                              
    aboutastronaut1.addEventListener('mouseleave', function(){
    mouseoverbool = false;
    aboutastronaut1.style.position = 'relative'
    aboutastronaut1.style.height = '112px'
    aboutastronaut1.style.width = '182px'
    });
    
    aboutastronaut1.addEventListener('click', function(){
        
    });
    
});


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


        

 
    //});
 