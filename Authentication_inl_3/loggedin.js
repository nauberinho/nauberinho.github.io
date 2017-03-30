
let sessionUser = JSON.parse(localStorage.getItem('sessionUser'));

console.log(sessionUser);


function listenForLoginOrLogOut() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            userinout = user.email;
            let userid;
            firebase.database().ref('/users/').once('value').then(function (snapshot) {
                for (var prop in snapshot.val()) {
                    if (snapshot.val()[prop].email == userinout) {
                        userid = prop;
                        sessionID = prop;
                        console.log(userid + '=userid, ' + sessionID + '=sessionID')
                        console.log('Before update uerid: ' + userid)
                        onlineTrueFalse(userid, true);
                        window.location = "loggedin.html";
                    }
                }
            });
            console.log('user is signed in: ' + user.email);
        }
        else {

            window.location='index.html';
        }
    });
}
listenForLoginOrLogOut();

    function signOut() {
        let userid;
        firebase.auth().signOut().then(function () {
            //sessionID=undefined;
            localStorage.removeItem('sessionUser');
        }, function (error) {
            console.error('Sign Out Error', error);
        });
    };


let logoutbtn = document.getElementsByClassName('logoutbtn')[0]

logoutbtn.addEventListener('click', function(){
    
    
    signOut();
    
})

let userImage = document.getElementById('profileimage')
let userInfo = document.getElementById('userinfo')
function displayUser (){
    
    if(sessionUser.displayName){
        
        userInfo.innerHTML = sessionUser.displayName
        
        
    }
else{
    userInfo.innerHTML = "No name found, are you sure you've got a name?"
};
    let imageurl = sessionUser.photoURL;
  userImage.src= imageurl;

  //profileimage.src=localStorage.getItem('sessionUser').photoURL;
//console.log(JSON.parse(localStorage.getItem('sessionUser')))
    
}

displayUser()

let body = document.getElementsByTagName('body')[0];
let changeBackgroundBtn = document.getElementById('changebackground');

let backgroundcolors = ['blue', 'green', 'orange', 'black', 'lightblue']

function changeBackground(){
    
    let newColor = backgroundcolors[Math.floor(Math.random() * backgroundcolors.length)]
    
    if(newColor!=body.style.backgroundColor){
        
        if(newColor=='black'){
            
            body.style.color='white';
        }
    
    body.style.backgroundColor= newColor;
        
    }
    
    else{
        
        changeBackground();
        
    }
    
    
};

changeBackgroundBtn.addEventListener('click', changeBackground)