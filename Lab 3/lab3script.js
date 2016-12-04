//-----------------------------Created by Niklas Nauber in November 2016------------------------------------------//
    //-----------------------------Contact: nauber91@hotmail.com---------------------------------------------------------//
      //-----------------------------LAB 3 - CANVAS-project------------------------------------------//

window.addEventListener('load', function(event){ 

let canvas = document.getElementById("myCanvas"); 
let c = canvas.getContext('2d');
var rect = canvas.getBoundingClientRect();
let lineWidth;
c.lineWidth = lineWidth

let cons = document.getElementById('consoled'); 

 
let selectedColor = document.getElementById('selectColor'); 

let jsonlist = []; 

function selectColor() { 
var x = selectedColor.value; 

return x 

}; 

let chosenColor = document.getElementById('showcolor');
selectedColor.addEventListener('click', function(){ 
c.strokeStyle = selectColor()
chosenColor.style.backgroundColor = selectColor()
}); 
let addbutton = document.getElementById('addbutton');
let stopdrawing = document.getElementById('stop'); 
let drawCircle = document.getElementById('drawcircle'); 
let drawTriangle = document.getElementById('drawtriangle');
let drawRectangle = document.getElementById('drawrectangle'); 
let clear1 = document.getElementById('clear');
let json = document.getElementById('json');
let JSONDIV = document.getElementById('jayson');
let dropdownbutton = document.getElementById('myBtn');
let drawWhatever = document.getElementById('drawwhatever');
    
let userColor; 
let inputtext = document.getElementById('inputtext');
let hexColors = '^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$'; 
let widthValues = '([0-9]{1}|10{2})$';
let inputWidth = document.getElementById('inputWidth')

let colorisOk;
let widthisok;

inputWidth.addEventListener('keyup',function(event){ 

if(inputWidth.value.match(widthValues) !== null){ 
widthisok = true; 
cons.innerHTML ="valid width:" + widthValues; 
addWidth.disabled= false; 
} 

else if(inputWidth.value.match(widthValues) == null || inputWidth.value == ''){ 
widthisOk = false; 
cons.innerHTML="Not Valid"; 
addWidth.disabled= true; 
} 
}) 

let addWidth = document.getElementById('addWidth')
addWidth.addEventListener('click', function(event){ 

lineWidth = inputWidth;
cons.innerHTML =lineWidth;

}); 

    
    //ADD COLORS BELOW------------------------------
inputtext.addEventListener('keyup',function(event){ 

if(inputtext.value.match(hexColors) !== null){ 
colorisOk = true; 
cons.innerHTML ="valid color"; 
addbutton.disabled= false;
var text = 'Add color'
text.bold();
addbutton.innerHTML = text
} 

else if(inputtext.value.match(hexColors) == null || inputtext.value == ''){ 
colorisOk = false; 
cons.innerHTML="Not Valid"; 
addbutton.disabled= true; 
} 
}) 

addbutton.addEventListener('click', function(event){ 

if(colorisOk == true){ 

userColor = inputtext.value.toLowerCase(); 
let newOption = document.createElement('option'); 
newOption.value = userColor; 
selectedColor.appendChild(newOption); 
newOption.innerHTML = userColor; 
} 
});
    
//--------------------DROPDOWN MENU---------------------------------------- 
let myBtn = document.getElementById("myBtn")
myBtn.addEventListener('click', function() { 
toggleFunction() 
}); 

function toggleFunction() { 
document.getElementById("dropdown").classList.toggle("show"); 
}; 

function toggle1Function() { 
document.getElementById("dropdown").classList.toggle("show"); 
}; 



//---------------------------KONSTRUKTORER--------------------------------- 

function Circle( centerX, centerY, radius ){ 
this.centerX = centerX; 
this.centerY = centerY; 
this.radius = radius; 
}; 

function Rectangle( x1, y1, x2, y2 ) { 
this.x1 = x1; 
this.y1 = y1; 
this.x2 = x2; 
this.y2 = y2; 
this.x3 = x1; 
this.y3 = y2; 
this.x4 = x2; 
this.y4 = y1; 

} 

function Triangle( x1, y1, x2, y2, x3, y3 ){ 
this.x1 = x1; 
this.y1 = y1; 
this.x2 = x2; 
this.y2 = y2; 
this.x3 = x3; 
this.y3 = y3; 
} 

var clicks = 0 
var pressedCircle = false; 
var pressedRectangle = false; 
var pressedTriangle = false; 
var pressedStop = false; 
var pressedWhatever = false;
var pressedEraser = false;
let mouseup;
var centerX; 
var centerY; 
var rx1; 
var ry1; 
var ry2; 
var ry2; 
var radius; 
var yourCircle; 
var yourRectangle; 
var yourTriangle; 


//---------------------------------------------STATUSBAR - what elements do when mouse is over them------------------------------------------// 
if(pressedCircle !== true ||
pressedRectangle !== true ||
pressedTriangle !== true ||
pressedStop !== true ||
pressedWhatever !== true){
hidden1.addEventListener('mouseover', function(){ 
cons.innerHTML = "A circle has a center point (x, y) and a radius. Draw two points where the first point is the center point and the second sets the radius of the circle. A circle's parameters in Javascript CANVAS are: c.arc (20, 40, 30, 300, 0.5 * Math.PI) "

hidden1.addEventListener('mouseleave', function(){
cons.innerHTML = "Hover your mouse around to learn about your new drawing tool."
});
}); 


hidden2.addEventListener('mouseover', function(){ 

cons.innerHTML = "A rectangle is a quadrilateral with four right angles. Draw to points on the canvas and JS will take care of the rest." 
hidden3.addEventListener('mouseleave', function(){ 
cons.innerHTML = "Hover your mouse around to learn about your new drawing tool."
}); 

}); 

hidden3.addEventListener('mouseover', function(){ 
cons.innerHTML = "A triangle is a polygon with three edges and three vertices. Draw three points on the canvas and JS will take care of the rest." 
hidden3.addEventListener('mouseleave', function(){ 
cons.innerHTML = "Hover your mouse around to learn about your new drawing tool." 
}); 

}); 


stopdrawing.addEventListener('mouseover', function(event){ 
cons.innerHTML = "When you want to cancel your current drawing." 
stopdrawing.addEventListener('mouseleave', function(){ 
cons.innerHTML = "Hover your mouse around to learn about your new drawing tool."
}); 
}); 
    

drawCircle.addEventListener('mouseover', function(event){ 
cons.innerHTML = "Click here to draw a circle." 
drawCircle.addEventListener('mouseleave', function(){

cons.innerHTML = "Hover your mouse around to learn about your new drawing tool." 
}); 
});
    
drawRectangle.addEventListener('mouseover', function(event){ 
cons.innerHTML = "Click here to draw a circle" 
drawRectangle.addEventListener('mouseleave', function(){ 
cons.innerHTML = "Hover your mouse around to learn about your new drawing tool." 
}); 
});
    
drawTriangle.addEventListener('mouseover', function(event){ 
cons.innerHTML = "Click here to draw a triangle." 
drawTriangle.addEventListener('mouseleave', function(){ 
cons.innerHTML = "Hover your mouse around to learn about your new drawing tool."
}); 
});
    
clear1.addEventListener('mouseover', function(event){ 
cons.innerHTML = "Click here to clear canvas." 
clear1.addEventListener('mouseleave', function(){ 
cons.innerHTML = "Hover your mouse around to learn about your new drawing tool."
}); 
});
    
json.addEventListener('mouseover', function(event){ 
cons.innerHTML = "Lets you save the coordinates of your figure(s)." 
json.addEventListener('mouseleave', function(){ 
cons.innerHTML = "Hover your mouse around to learn about your new drawing tool."
}); 
});
    
JSONDIV.addEventListener('mouseover', function(event){ 
cons.innerHTML = "This is where your JSON data will show when you click 'Export to JSON'." 
JSONDIV.addEventListener('mouseleave', function(){ 
cons.innerHTML = "Hover your mouse around to learn about your new drawing tool." 
}); 
});
    
dropdownbutton.addEventListener('mouseover', function(event){ 
cons.innerHTML = "Click here to navigate during your drawing session." 
dropdownbutton.addEventListener('mouseleave', function(){ 
cons.innerHTML = "Hover your mouse around to learn about your new drawing tool." 
}); 
});
    
drawWhatever.addEventListener('mouseover', function(event){ 
cons.innerHTML = "This is where you can explore, draw whatever you like." 
dropdownbutton.addEventListener('mouseleave', function(){ 
cons.innerHTML = "Hover your mouse around to learn about your new drawing tool." 
}); 
});

}
    
//------------------------------When clicking on "drawing"-buttons-----------------------
    //-----------------------------Circle below-----------------------------------//

drawWhatever.addEventListener('click', function(){//Enables "draw circle", sets variables to init and disables other figures.

cons.innerHTML = "Start drawing your circle on the canvas."

toggle1Function();  
clicks = 0; 
pressedCircle = false; 
pressedRectangle = false; 
pressedTriangle = false; 
pressedWhatever = true; 
pressedEraser = false; 
});     
    
drawCircle.addEventListener('click', function(){//Enables "draw circle", sets variables to init and disables other figures.

cons.innerHTML = "Start drawing your circle on the canvas."

toggle1Function()
    
clicks = 0; 
pressedCircle = true; 
pressedRectangle = false; 
pressedTriangle = false; 
pressedWhatever = false;
pressedEraser = false;
centerY = 0; 
centerX = 0; 
radius = 0; 
 
}); 
    //---------------------------------Rectangle below---------------------------------//
 

drawRectangle.addEventListener('click', function(){//Enables "draw rectangle", sets variables to init and disables other figures.
    
toggle1Function()

clicks = 0; 
pressedCircle = false; 
pressedRectangle = true; 
pressedTriangle = false; 
pressedWhatever = false; 
var rx1 = 0; 
var ry1 = 0; 
var rx2 = 0; 
var ry2 = 0; 

}); 

    //---------------------------------Triangle below---------------------------------//
 

drawTriangle.addEventListener('click', function(){//Enables "draw triangle", sets variables to init and disables other figures. 

toggle1Function()
    
clicks = 0 
pressedCircle = false; 
pressedRectangle = false; 
pressedTriangle = true; 
pressedWhatever = false;
pressedEraser = false;
var tx1 = 0 
var ty1 = 0 
var tx2 = 0 
var ty2 = 0 
var tx3 = 0 
var ty3 = 0 

}); 



//---------------------------------DRAW WHATEVER - WHEN MOUSE DOWN ON CANVAS-----------------------------------

    
    canvas.addEventListener('mousedown', function(event){
        
     let move=0
     mouseup = false;
       
    
    if(pressedWhatever == true && mouseup == false){
        move++
        if(move==1 && mouseup == false){
        let wx = event.clientX - rect.left; 
        let wy = event.clientY - rect.top;
        c.beginPath(); 
        c.moveTo(wx,wy)
        }
        
        
            canvas.addEventListener('mousemove', function(event){
        if(pressedWhatever == true && mouseup == false){
        
                if(move>move-1 && mouseup == false){

                let wx = event.clientX - rect.left; 
                let wy = event.clientY - rect.top;  

                    c.lineTo(wx,wy)
                    c.stroke();
                    

                };

            };
        });
        
                canvas.addEventListener('mouseup', function(event){
        mouseup = true;
        pressedWhatever == false;
        cons.innerHTML = 'WOW! Youve got creative veins!'
        c.closePath()
        }); 
        };
        
        

        
      
        
  });

 
//-------------------------------WHEN CLICKING ON CANVAS-------------------------------------------------------------------------------------- 
canvas.addEventListener('click', function(event){ 



            //----------------------RECTANGLE DRAW BELOW----------------------------

    
    
if(pressedRectangle == true){ 
clicks++ 

if(clicks == 1){//Saving coordinates for first click. 

rx1 = event.clientX - rect.left; 
ry1 = event.clientY - rect.top; 

} 
//Saving coordinates for second click, creating rectangle object with the rectangle object constructor and then drawing rectangle. 
else if(clicks == 2){ 

rx2 = event.clientX - rect.left; 
ry2 = event.clientY - rect.top; 

yourRectangle = new Rectangle(rx1, ry1, rx2, ry2)
jsonlist.push(yourRectangle);

c.beginPath(); 
c.moveTo(yourRectangle.x1,yourRectangle.y1) 
c.lineTo(yourRectangle.x3, yourRectangle.y3) 
c.lineTo(yourRectangle.x2, yourRectangle.y2) 
c.lineTo(yourRectangle.x4, yourRectangle.y4) 
c.lineTo(yourRectangle.x1, yourRectangle.y1) 
c.stroke(); 
c.closePath(); 

}; 

}; 
//--------------CIRCLE DRAW BELOW------------------------------------------------------------------------------------- 
    
  

if(pressedCircle == true){ 
  
clicks++ 

if(clicks == 1){//Saving coordinates for first click. 

centerX = event.clientX - rect.left; 
centerY = event.clientY - rect.top; 


} 

else if(clicks == 2){//Saving coordinates for second click, creating circle object with the circle object constructor and then drawing // circle. 

var a = (centerX - (event.clientX - rect.left )) 
var b = (centerY - (event.clientY - rect.top)) 
radius = Math.sqrt((a*a) + (b*b)); 

yourCircle = new Circle(centerX, centerY, radius) 
jsonlist.push(yourCircle); 
    
c.beginPath(); 
c.arc(yourCircle.centerX, yourCircle.centerY, yourCircle.radius, 0, 2*Math.PI); // 2*PI motsvarar 360 grader 
c.stroke(); 

}; 
}; 

//--------------------- TRIANGLE DRAW BELOW---------------------------------------------------------------- 

if(pressedTriangle == true){ 

clicks++ 

if(clicks == 1){ //Saving coordinates for first click. 

tx1 = event.clientX - rect.left; 
ty1 = event.clientY - rect.top; 


} 

else if(clicks == 2){ //Saving coordinates for second click. 

tx2 = event.clientX - rect.left; 
ty2 = event.clientY - rect.top; 

}; 

if(clicks == 3){ //Saving coordinates for third click, creating triangle object with the triangle object constructor and then drawing triangle. 

tx3 = event.clientX - rect.left; 
ty3 = event.clientY - rect.top; 

yourTriangle = new Triangle(tx1,ty1, tx2,ty2, tx3,ty3); 
jsonlist.push(yourTriangle); 

c.beginPath(); 
c.moveTo(yourTriangle.x1,yourTriangle.y1) 
c.lineTo(yourTriangle.x2,yourTriangle.y2) 
c.lineTo(yourTriangle.x3,yourTriangle.y3) 
c.lineTo(yourTriangle.x1,yourTriangle.y1) 
c.stroke(); 
c.closePath(); 

}; 
}; 
}); 

//--------------------------------------ERASE BUTTON---------------------------------- 
let eraser = document.getElementById('erase')
let mouseuperaser = false;
eraser.addEventListener('click', function(event){
    
toggle1Function()
    
clicks = 0 
pressedCircle = false; 
pressedRectangle = false; 
pressedTriangle = false; 
pressedWhatever = false;
pressedEraser = true;
let moves=0;
mouseuperaser = false;
    
      canvas.addEventListener('mousedown', function(event){

    
        
       
        
        if(pressedEraser == true && mouseuperaser == false){
            moves++
            canvas.addEventListener('mousemove', function(event){
        
        
                if(moves>moves-1 && mouseuperaser == false){

                let wx = event.clientX - rect.left; 
                let wy = event.clientY - rect.top;  

                c.clearRect(wx,wy,14,14)

                };

            });
        };
        
        
        canvas.addEventListener('mouseup', function(event){
        mouseuperaser = true;
        pressedEraser == false;
        cons.innerHTML = 'WOW! Youve got creative veins!'
        
        }); 
        
      
        
  });
});

 //--------------------------------------CLEAR BUTTON---------------------------------- 

clear1.addEventListener('click', function(event){ 
toggle1Function()
c.clearRect(0, 0, 700, 500)
jsonlist = []
JSONDIV.innerHTML = ''

}); 
       

//------------------------------------------------------------------------------------- 

//---------------------------------------STOP DRAWING-------------------------------------// //-------------Sets all bools + var clicks to false and 0---------------------// 

stopdrawing.addEventListener('click', function(event){ 
toggle1Function()
clicks = 0 
pressedCircle = false; 
pressedRectangle = false; 
pressedTriangle = false; 
pressedStop = false; 
pressedWhatever = false; 
}); 
  
//----------------------------------------EXPORT TO JSON-------------------------------------
json.addEventListener('click', function(event){
if(jsonlist.length>0){
toggle1Function()
let jsontext='' 
for(i=0;i<jsonlist.length;i++){ 
let obj = JSON.stringify(jsonlist[i], null, 2); 
jsontext = jsontext + obj 
JSONDIV.value = jsontext 
}; 
};
    if(jsonlist.length==0){
        JSONDIV.value = "There are no drawings to show, I'm afraid."
    }
}); 

}); 