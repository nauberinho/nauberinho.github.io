//-----------------------MyChat-project, by Niklas Nauber in March 2017-----------//
//------------------------------THE CHAT PAGE OF MyChat------------------//
//CONTENT: 1.GLOBAL VARIABLES-----------------------//
//      2. FUNCTIONS-----------------------------//
//      3. EVENTLISTENERS------------------------//
window.addEventListener('load', function (event) {
    
//--------1.------------------GLOBAL VARIABLES---------------------------------//
    let signedin = false;
    let signedout = true;
    let getUserBtn = document.getElementById('getuserbutton');
    let deletemessagesbtn = document.getElementById('deletemessagesbtn')
    let deleteusersbtn = document.getElementById('deleteusers');
    let sessionID;
    let getOnlineUsersbtn = document.getElementById('getonlineusersbtn');
    let messageDiv = document.getElementById('messagediv');
    let messageInput = document.getElementById('messageinput');
    let firstMessageSent = false;
    let userinout;
    let footinput = document.getElementById('footinput');
    let positioninput = document.getElementById('positioninput');
    let favplayerinput = document.getElementById('favplayerinput');
    let updateProfileBtn = document.getElementById('updateprofilebtn');
    let allMessagesDisplayed = false;
    let onlineusersdiv = document.getElementById('showonlineusers');
    let displayed = false;
    let signOutbtn = document.getElementById('signoutbtn')
//---------------------------------------------------------------------------//

    function ScrollToBottom(scrollelement) {
        scrollelement.scrollTop = scrollelement.scrollHeight;
    }

    function deleteUsers() {
        firebase.database().ref('users/').set({});
        console.log('Users deleted')
    };
   
    function getUser() {
        let useridValue = document.getElementById('getuserid').value;
        let userteamValue = document.getElementById('getuserteam').value;
        return firebase.database().ref('/users/' /* + useridValue*/ ).once('value').then(function (snapshot) {
            for (var prop in snapshot.val()) {
                //console.log(snapshot.val()[prop].email)
                if (snapshot.val()[prop].email == useridValue && snapshot.val()[prop].team == userteamValue) {
                    console.log('Du lyckades!')
                    console.log(snapshot.val()[prop].team);
                }
                else {
                    console.log('User was not found.')
                }
            }
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

    function onlineTrueFalse(userid, bool) {
        firebase.database().ref().child('users').child(userid).update({
            online: bool
        });
    }

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
                            console.log('Before update userid: ' + userid)
                            onlineTrueFalse(userid, true);
                        }
                    }
                });
                console.log('user is signed in: ' + user.email);
            }
            else {
                console.log('signed out: ' + userinout)
                window.location = 'index.html';
            }
        });
    }
    listenForLoginOrLogOut();
    //------------------------------------------------------
    function signOut() {
        let userid;
        console.log(sessionID)
        onlineTrueFalse(sessionID, false);
        firebase.auth().signOut().then(function () {
            console.log('Signed Out: ' + sessionID);
            //sessionID=undefined;
            localStorage.removeItem('sessionUser');
        }, function (error) {
            console.error('Sign Out Error', error);
        });
    };

    function getOnlineUsers() {
        var UsersRef = firebase.database().ref('users/');
        UsersRef.on('value', (function (snapshot) {
            let stringOfUsers = '';
            let stringOfofflineUsers='';
            for (var user in snapshot.val()) {
                if (snapshot.val()[user].online == true) {
                    let star = ' <i class="fa fa-star" aria-hidden="true"></i> '
                    let emptystar = ' <i class="fa fa-star-o" aria-hidden="true"></i> '
                    let span = '<span class="stars-span">';
                    let endspan = '</span>'
                    let userspan;
                    if(user==localStorage.getItem('sessionUser')){
                        
                        userspan = '<span class="sessionuser-span">&nbsp&nbsp&nbsp&nbsp<span class="online-circle">•</span>&nbsp&nbsp&nbsp' + user + '</span>';
                        
                    }
                    
                    else{
                        
                        userspan = '<span class="user-span">&nbsp&nbsp&nbsp&nbsp<span class="online-circle">•</span>&nbsp&nbsp&nbsp' + user + '</span>';
                        
                    }
                    stringOfUsers += userspan;
                    if (snapshot.val()[user].activity <= 9) {
                        stringOfUsers += span + star + emptystar + emptystar + emptystar + emptystar + endspan + '<br>';
                    }
                    else if (snapshot.val()[user].activity > 9 && snapshot.val()[user].activity <= 18) {
                        stringOfUsers += span + star + star + emptystar + emptystar + emptystar + endspan + '<br>';
                    }
                    else if (snapshot.val()[user].activity > 18 && snapshot.val()[user].activity <= 27) {
                        stringOfUsers += span + star + star + star + emptystar + emptystar + endspan + '<br>';
                    }
                    else if (snapshot.val()[user].activity > 27 && snapshot.val()[user].activity <= 36) {
                        stringOfUsers += span + star + star + star + star + emptystar + endspan + '<br>';
                    }
                    else if (snapshot.val()[user].activity > 36) {
                        stringOfUsers += span + star + star + star + star + star + endspan + '<br>';
                    }
                    
                     
                else {
                    stringOfUsers += ''
                }
                    
                };
                
                               
                       if(snapshot.val()[user].online == false){
                                    
                    
                                        
                    let star = ' <i class="fa fa-star" aria-hidden="true"></i> '
                    let emptystar = ' <i class="fa fa-star-o" aria-hidden="true"></i> '
                    let span = '<span class="stars-span">';
                    let endspan = '</span>'
                    let userspan;
                    if(user==localStorage.getItem('sessionUser')){
                        
                        userspan = '<span class="sessionuser-span">&nbsp&nbsp&nbsp&nbsp<span class="offline-mark"><i class="material-icons offline-mark">highlight_off</i></span>&nbsp&nbsp&nbsp' + user + '</span>';
                        
                    }
                                        
                                         else{
                                             
                     userspan = '<span class="user-span">&nbsp&nbsp&nbsp&nbsp<span class="offline-mark"><i class="material-icons offline-mark">highlight_off</i></span>&nbsp&nbsp&nbsp' + user + '</span>';
                    
        
            }
                                               

                    
                    stringOfofflineUsers += userspan;
                    if (snapshot.val()[user].activity <= 9) {
                        stringOfofflineUsers += span + star + emptystar + emptystar + emptystar + emptystar + endspan + '<br>';
                    }
                    else if (snapshot.val()[user].activity > 9 && snapshot.val()[user].activity <= 18) {
                        stringOfofflineUsers += span + star + star + emptystar + emptystar + emptystar + endspan + '<br>';
                    }
                    else if (snapshot.val()[user].activity > 18 && snapshot.val()[user].activity <= 27) {
                        stringOfofflineUsers += span + star + star + star + emptystar + emptystar + endspan + '<br>';
                    }
                    else if (snapshot.val()[user].activity > 27 && snapshot.val()[user].activity <= 36) {
                        stringOfofflineUsers += span + star + star + star + star + emptystar + endspan + '<br>';
                    }
                    else if (snapshot.val()[user].activity > 36) {
                        stringOfofflineUsers += span + star + star + star + star + star + endspan + '<br>';
                    }
                                        
                                    else {
                    stringOfofflineUsers += ''
                }
                                        
                                   
     
                    
                }

            onlineusersdiv.innerHTML = stringOfUsers + stringOfofflineUsers;

        };
        if (displayed == true) {
            onlineusersdiv.style.height = '0%';
            getOnlineUsersbtn.innerHTML = '<i class="material-icons">people_outline</i> &nbsp&nbsp<i class="material-icons">keyboard_arrow_down</i>'
            displayed = false;
        }
        else {
            displayed = true;
            onlineusersdiv.style.height = '1800%';
            getOnlineUsersbtn.innerHTML = '<i class="material-icons">people_outline</i> &nbsp&nbsp<i class="material-icons">keyboard_arrow_up</i>'
        };
        
    }));
                              
                              };

    function updateProfile(sessionIDupdate, foot, position, favouriteplayer) {
        let newactivity;
        firebase.database().ref('/users/' + sessionIDupdate).once('value').then(function (snapshot) {
            newactivity = snapshot.val().activity + 1;
            firebase.database().ref().child('users').child(sessionIDupdate).update({
                activity: newactivity
            });
        });
    };

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

    function createMessage(e) {
        firebase.database().ref('/Messages/').once('value').then(function (snapshot) {
            if (snapshot.val() == undefined) {
                firebase.database().ref('Messages').set(0);
                firstMessageSent = true;
            };
        });
        if (e.keyCode == 13 || e.which == 13) {
            let messageid;
            let message;
            firebase.database().ref('/Messages/').once('value').then(function (snapshot) {
                messageid = Object.keys(snapshot.val()).length;
                //console.log('id: ' + messageid);
                message = {
                    id: messageid
                    , likes: 0
                    , dislikes: 0
                    , message: messageInput.value
                    , from: localStorage.getItem('sessionUser')
                    , time: Date()
                };
                firebase.database().ref('Messages/' + messageid).set(message);
            });
            setTimeout(function () {
                messageInput.value = '';
            }, 500)
            updateProfile(localStorage.getItem('sessionUser'), 'left', 'd', 'd')
        }
    };
    

    function getMessages() {
        firebase.database().ref('Messages/').on('value', function (snapshot) {
            if (snapshot.val() !== 0) {
                for (var message in snapshot.val()) {
                    console.log(allMessagesDisplayed)
                    if (allMessagesDisplayed !== true) {
                        let newMessage = document.createElement('DIV');
                        newMessage.className = 'newMessage';
                        let span = document.createElement('span')
                        span.className = 'message-span';
                        if (snapshot.val()[message].from == localStorage.getItem('sessionUser')) {
                            span.innerHTML = '<span class="fromsession-span">' + snapshot.val()[message].from + '</span>' + ': ' + snapshot.val()[message].message;
                        }
                        else {
                            span.innerHTML = '<span class="from-span">' + snapshot.val()[message].from + '</span>' + ': ' + snapshot.val()[message].message;
                        }
                        newMessage.appendChild(span);
                        newMessage.id = snapshot.val()[message].id;
                        let likesDiv = document.createElement('DIV');
                        likesDiv.className = 'likesDiv';
                        likesDiv.id = 'likesDiv' + snapshot.val()[message].id;
                        likesDiv.innerHTML = '<i class="fa fa-thumbs-up" aria-hidden="true"></i> ' + snapshot.val()[message].likes;
                        let dislikesDiv = document.createElement('DIV');
                        dislikesDiv.className = 'dislikesDiv';
                        dislikesDiv.id = 'dislikesDiv' + snapshot.val()[message].id;
                        dislikesDiv.innerHTML = '<i class="fa fa-thumbs-down" aria-hidden="true"></i> ' + snapshot.val()[message].dislikes;
                        newMessage.appendChild(likesDiv);
                        newMessage.appendChild(dislikesDiv);
                        likeAComment(likesDiv);
                        disLikeAComment(dislikesDiv);
                        messageDiv.appendChild(newMessage);
                        ScrollToBottom(messageDiv);
                    }
                }
                if (allMessagesDisplayed == true) {
                    console.log('Messages length: ' + snapshot.val().length)
                    let newMessage = document.createElement('DIV');
                    newMessage.className = 'newMessage';
                    let span = document.createElement('span')
                    span.className = 'message-span';
                    if (snapshot.val()[message].from == localStorage.getItem('sessionUser')) {
                        span.innerHTML = '<span class="fromsession-span">' + snapshot.val()[message].from + '</span>' + ': ' + snapshot.val()[message].message;
                    }
                    else {
                        span.innerHTML = '<span class="from-span">' + snapshot.val()[message].from + '</span>' + ': ' + snapshot.val()[message].message;
                    }
                    newMessage.appendChild(span);
                    newMessage.id = snapshot.val()[message].id;
                    let likesDiv = document.createElement('DIV');
                    likesDiv.className = 'likesDiv';
                    likesDiv.id = 'likesDiv' + snapshot.val()[message].id;
                    likesDiv.innerHTML = '<i class="fa fa-thumbs-up" aria-hidden="true"></i> ' + snapshot.val()[message].likes;
                    let dislikesDiv = document.createElement('DIV');
                    dislikesDiv.className = 'dislikesDiv';
                    dislikesDiv.id = 'dislikesDiv' + snapshot.val()[message].id;
                    dislikesDiv.innerHTML = '<i class="fa fa-thumbs-down" aria-hidden="true"></i> ' + snapshot.val()[message].dislikes;
                    newMessage.appendChild(likesDiv);
                    newMessage.appendChild(dislikesDiv);
                    likeAComment(likesDiv);
                    disLikeAComment(dislikesDiv)
                    if (snapshot.val().length == 1 && messageDiv.hasChildNodes() == false) {
                        console.log('length: ' + snapshot.val().length)
                        messageDiv.appendChild(newMessage);
                        ScrollToBottom(messageDiv);
                    }
                    else if (messageDiv.lastChild && messageDiv.lastChild.id !== newMessage.id) {
                        messageDiv.appendChild(newMessage);
                        ScrollToBottom(messageDiv);
                    };
                }
                allMessagesDisplayed = true;
            };
        })
    };
    getMessages();

    function getLikes(frequency, event) {
        var MsgRef = firebase.database().ref('Messages/');
        MsgRef[frequency](event, function (snapshot) {
            for (var message in snapshot.val()) {
                if (message == 'likes') {
                    console.log('Likes: ' + snapshot.val()[message])
                    let likesDiv = document.getElementById('likesDiv' + snapshot.val().id)
                    console.log(likesDiv)
                    likesDiv.innerHTML = '<i class="fa fa-thumbs-up" aria-hidden="true"></i> ' + snapshot.val()[message];
                };
                if (message == 'dislikes') {
                    console.log('Dislikes: ' + snapshot.val()[message])
                    let dislikesDiv = document.getElementById('dislikesDiv' + snapshot.val().id)
                    console.log(dislikesDiv)
                    dislikesDiv.innerHTML = '<i class="fa fa-thumbs-down" aria-hidden="true"></i> ' + snapshot.val()[message];
                };
            };
        });
    };
    getLikes('on', 'child_changed');

    function likeAComment(divToLike) {
        divToLike.addEventListener('click', function () {
            console.log(divToLike.parentElement.id);
            firebase.database().ref('/Messages/').once('value').then(function (snapshot) {
                console.log(snapshot.val()[divToLike.parentElement.id])
                let like = {
                    likes: (snapshot.val()[divToLike.parentElement.id].likes) + 1
                }
                firebase.database().ref('Messages/' + divToLike.parentElement.id).update(like);
                console.log(snapshot.val())
            })
        })
    }

    function disLikeAComment(divToDisLike) {
        divToDisLike.addEventListener('click', function () {
            console.log(divToDisLike.parentElement.id);
            firebase.database().ref('/Messages/').once('value').then(function (snapshot) {
                console.log(snapshot.val()[divToDisLike.parentElement.id])
                let dislike = {
                    dislikes: (snapshot.val()[divToDisLike.parentElement.id].dislikes) + 1
                }
                firebase.database().ref('Messages/' + divToDisLike.parentElement.id).update(dislike);
                console.log(snapshot.val())
            })
        })
    }

    function deleteMessages() {
        firebase.database().ref('Messages/').set(0);
        console.log('Messages deleted')
        while (messageDiv.hasChildNodes()) {
            messageDiv.removeChild(messageDiv.lastChild);
        }
    };

    function DisplaySessionUser() {
        let sessionUser = localStorage.getItem('sessionUser');
        let menusession = document.getElementById('menusession');
        menusession.innerHTML = '&nbsp&nbsp&nbsp&nbsp&nbsp' + sessionUser;
        let menuspan = document.createElement('span');
        menuspan.id = 'menuspan';
        menusession.appendChild(menuspan);
        var UsersRef = firebase.database().ref('users/');
        UsersRef.on('value', function (snapshot) {
            for (var prop in snapshot.val()[sessionUser]) {
                if (prop == 'activity') {
                    let star = '<i class="fa fa-star" aria-hidden="true"></i>'
                    let emptystar = '<i class="fa fa-star-o" aria-hidden="true"></i>'
                    if (snapshot.val()[sessionUser].activity <= 9) {
                        menuspan.innerHTML = star + emptystar + emptystar + emptystar + emptystar;
                    }
                    else if (snapshot.val()[sessionUser].activity > 9 && snapshot.val()[sessionUser].activity <= 18) {
                        menuspan.innerHTML = star + star + emptystar + emptystar + emptystar;
                    }
                    else if (snapshot.val()[sessionUser].activity > 18 && snapshot.val()[sessionUser].activity <= 27) {
                        menuspan.innerHTML = star + star + star + emptystar + emptystar;
                    }
                    else if (snapshot.val()[sessionUser].activity > 27 && snapshot.val()[sessionUser].activity <= 36) {
                        menuspan.innerHTML = star + star + star + star + emptystar;
                    }
                    else if (snapshot.val()[sessionUser].activity > 36) {
                        menuspan.innerHTML = star + star + star + star + star;
                    };
                }
            }
        });
    };
    DisplaySessionUser()
    
    
//---3.---------------------EVENTLISTENERS------------------------------------------//
    deleteusersbtn.addEventListener('click', deleteUsers);
    signOutbtn.addEventListener('click', signOut);
    getOnlineUsersbtn.addEventListener('click', getOnlineUsers);
    deletemessagesbtn.addEventListener('click', function () {
        deleteMessages();
    })
    messageInput.addEventListener('keydown', function (event) {createMessage(event)});
    
    //--------------------------------------------------------------------------------
}); //--------------------------------WINDOW ON LOAD ENDS--------------------------------------------------//