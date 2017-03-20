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
//--------2.-----------------FUNCTIONS-------------------------------------
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
    writeUserData(firstname + ' ' + surname, username, email, firstname, surname);
};
//-------------------Firebase function for verifying users email and password-------//
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
                        sessionID = prop;
                        console.log(userid + '=userid, ' + sessionID + '=sessionID')
                        console.log('Before update uerid: ' + userid)
                        onlineTrueFalse(userid, true);
                        window.location = "chat.html";
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
    if (signuppassword.value == signuppassword2.value){
        
    createUser();
    logIn(signupemail.value, signuppassword.value);
    }
    
});
loginbtn.addEventListener('click', function () {
    logIn(document.getElementById('loginemail').value, document.getElementById('loginpassword').value);
});