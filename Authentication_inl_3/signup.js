//-----------------------MyChat-project, by Niklas Nauber in March 2017-----------//
//------------------------------THE SIGN UP/SIGN IN PAGE OF MyChat------------------//
//CONTENT: 1.GLOBAL VARIABLES-----------------------//
//          2. FUNCTIONS-----------------------------//
//           3. EVENTLISTENERS------------------------//
//-----1.-------------------------GLOBAL VARIABLES---------------------------//
let createAccountBtn = document.getElementById('createaccountbtn');
let userinout;
let loginbtn = document.getElementById('loginbtn');
let signupemail = document.getElementById('signupemail');
let signuppassword = document.getElementById('signuppassword');
let signuppassword2 = document.getElementById('signuppassword2');
let loginWithGitHubBtn = document.getElementById('login-with-github-btn')
let loginWithFaceBookBtn = document.getElementById('login-with-facebook-btn')
    //--------2.-----------------FUNCTIONS-------------------------------------
localStorage.removeItem('sessionUser');
//--------Stores currents session´s user (firstname and surname) in localStorage-----//
function storeLocally(objectname, objectvalue) {
    if (typeof (Storage) !== "undefined") {
        //Store
        localStorage.setItem(objectname, objectvalue);
        //Retrieve
        console.log(localStorage.getItem(objectname));
    }
    else {
        console.log('Sorry, browser does not support Web Storage.')
    }
}
//----------------------------------------------------------------------------
//-------Creates an object with the name of the user (firstname + surname) and sends it to firebase database---------------------------------------------------------------------//
function writeUserData(userid, username, email, firstname, surname, userteam) {
    let object = {
        username: username
        , email: email
        , firstname: firstname
        , surname: surname
        , activity: 0
        , online: false
    };
    firebase.database().ref('users/' + userid).set(object);
};
//-----------------------------------------------------------------------//
//------------Creates user in both firebase Database and in Firebase Authentication-----//
function createUser() {
    let email = document.getElementById('signupemail').value;
    let password = document.getElementById('signuppassword').value;
    let username = document.getElementById('username').value;
    let firstname = document.getElementById('firstname').value;
    let surname = document.getElementById('surname').value;
    console.log(email + ', ', password);
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
    });
    logIn(email, password);
    writeUserData(firstname + ' ' + surname, username, email, firstname, surname);
};
//-------------------Firebase function for verifying users email and password-------//
function logInWithGitHub(emailgithub, passwordgithub) {
    let provider = new firebase.auth.GithubAuthProvider();
    console.log('före raden')
    
    firebase.auth().signInWithPopup(provider).then(result => {
        console.log('user:',result.user);
        let user = result.user;
        console.log(result.user.providerData[0])
        let emailgithub = user.email;
        localStorage.setItem('sessionUser', JSON.stringify(user))
        //console.log(localStorage.getItem('sessionUser').providerData[0]);

        
        console.log(user);
        console.log('Logged in: ' + user);
        window.location = 'loggedin.html';
        
    }).catch(error => {
        console.log(error);
    });
}

function logInWithFaceBook (){
    var facebookprovider = new firebase.auth.FacebookAuthProvider()
    console.log(facebookprovider)
    
    firebase.auth().signInWithPopup(facebookprovider).then(function(result) {
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
        console.log(result.user)
        localStorage.setItem('sessionUser', JSON.stringify(user))
        window.location = 'loggedin.html';
  // ...
}).catch(function(error) {
        console.log('you got error')
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
        
        console.log('errorMessage:: ' + errorMessage)
  // The email of the user's account used.
  var email = error.email;
        
        console.log('erroremail: ' + email)
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
    
}

function loginAuth(emailauth, passwordauth) {
    firebase.auth().signInWithEmailAndPassword(emailauth, passwordauth).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorCode, errorMessage);
    });
    console.log(emailauth + ' is signed in');
};
//----------------------------------------------------------------------------------//
//---Sets users property 'online' to true or false, depending on what's requested-----//
function onlineTrueFalse(userid, bool) {
    firebase.database().ref().child('users').child(userid).update({
        online: bool
    });
}
//---------------------------------------------------------------------------------
//----------Uses 'function loginAuth()' to verify user and activates 'function OnlineTrueFalse()' to set user to online in the database-------//
function logIn(emaillogin, passwordlogin) {
    let userid;
    firebase.database().ref('/users/' /* + useridValue*/ ).once('value').then(function (snapshot) {
        for (var prop in snapshot.val()) {
            if (snapshot.val()[prop].email == emaillogin) {
                userid = prop;
                sessionID = prop;
                storeLocally('sessionUser', sessionID)
                console.log(userid + '=userid')
                console.log('Before update userid: ' + userid)
                onlineTrueFalse(userid, true);
            }
            else {
                console.log('User was not found.')
            }
        }
    });
    console.log('Before loginAuth() userid: ' + userid)
    loginAuth(emaillogin, passwordlogin)
};
//------------------------------CHECKS IF LOGGED IN OR LOGGED OUT------------------------------------------------------//
function listenForLoginOrLogOut() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            userinout = user.email;
            let userid;
            firebase.database().ref('/users/').once('value').then(function (snapshot) {
                for (var prop in snapshot.val()) {
                    if (snapshot.val()[prop].email == userinout) {
                        userid = prop;
                        console.log('Before update uerid: ' + userid)
                        window.location = "loggedin.html";
                    }
                }
            });
            console.log('user is signed in: ' + user.email);
        }
        else {
            console.log('signed out: ' + userinout)
        }
    });
}
listenForLoginOrLogOut();
//-----3.----------EVENTLISTENERS-------------------------------------
createAccountBtn.addEventListener('click', function () {
    if (signuppassword.value == signuppassword2.value) {
        createUser();
    }
});
loginbtn.addEventListener('click', function () {
    logIn(document.getElementById('loginemail').value, document.getElementById('loginpassword').value);
});
let emailgithub = document.getElementById('')
loginWithGitHubBtn.addEventListener('click', function () {
    logInWithGitHub();
})

loginWithFaceBookBtn.addEventListener('click', function(){
    
    
    logInWithFaceBook();
    
})