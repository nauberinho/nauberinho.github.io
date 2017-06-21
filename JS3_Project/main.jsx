class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        loggedIn: false,
        currentUser: {username: 'nauber'}
    }
      
      this.setCurrentUser = this.setCurrentUser.bind(this);
      this.listenForLoginOrLogOut = this.listenForLoginOrLogOut.bind(this);
      this.onlineTrueFalse = this.onlineTrueFalse.bind(this);
      this.returnCurrentUser = this.returnCurrentUser.bind(this);
      this.updateAndSendUserToFirebase = this.updateAndSendUserToFirebase.bind(this);
  }
    
returnCurrentUser(){
    
    return this.state.currentUser;
}

onlineTrueFalse(userid, bool) {
    firebase.database().ref().child('users').child(userid).update({
        online: bool
    });
}
    
    listenForLoginOrLogOut() {
        let self = this;
    firebase.auth().onAuthStateChanged(function (user) {
        console.log('auth changed')
        if (user) {
            let userinout = user.email;
            let userid;
            let currentUser;
            
            firebase.database().ref('/users/').once('value').then(function (snapshot) {
                for (var prop in snapshot.val()) {
                    if (snapshot.val()[prop].email == userinout) {
                        currentUser = snapshot.val()[prop];
                        userid = prop;
                        console.log('Before update uerid: ' + userid);
                        self.setCurrentUser(currentUser);
                        self.onlineTrueFalse(self.state.currentUser.username, true)
                        self.setState({loggedIn: true})
                        console.log('currentUser är: ' + currentUser.email);
                    }
                }
            });
            console.log('user is signed in: ' + user.email);
        }
        else {
            self.onlineTrueFalse(self.state.currentUser.username, false)
            self.setState({loggedIn: false})
        }
    });
}
    
setCurrentUser(user){
            this.setState({currentUser: user})
}
    
updateAndSendUserToFirebase(userObject, key){
    console.log('Just inside updateAndSendUserToFirebase')
   if(userObject != undefined){
       console.log('inside updateAndSendUserToFirebase and object not undefined')
    let newUser = this.state.currentUser;
    newUser[key] = userObject;
    let self = this;
    firebase.database().ref().child('users').child(newUser.username).child(key).set(userObject).then(function(){self.setState({currentUser: newUser});});
   }
};

    render(){
         if(this.state.loggedIn==false){
             
             return(
                 
             <div>
                     
                <Authenticate listenForLoginorLogOut={this.listenForLoginOrLogOut} onlineTrueFalse={this.onlineTruefalse} setCurrentUser={this.setCurrentUser}/>
             </div>
             )
              
         };
         
         if(this.state.loggedIn == true){
             return(
                 
                <div>
                
             <SignedIn updateAndSendUserToFirebase={this.updateAndSendUserToFirebase} listenForLoginorLogOut={this.listenForLoginOrLogOut} sentUser={this.state.currentUser} onlineTrueFalse={this.onlineTrueFalse}/>
                 
                </div>
                 )
         }
    }
}

class Authenticate extends React.Component {
      constructor(props) {
    super(props);
    this.state = {
        mode: 'choose'        
    };
          this.updateMode = this.updateMode.bind(this);
          this.loginAuth = this.loginAuth.bind(this);
          this.logIn = this.logIn.bind(this);
  };
    
logIn(emaillogin, passwordlogin) {
    console.log('hej ' + emaillogin, passwordlogin)
    var self = this;
    firebase.database().ref('/users/' /* + useridValue*/ ).once('value').then(function (snapshot) {
        for (var prop in snapshot.val()) {
            if (snapshot.val()[prop].email == emaillogin) {
                console.log('det matchade');
                self.props.setCurrentUser(snapshot.val()[prop]);
                self.loginAuth(emaillogin, passwordlogin)
                self.props.listenForLoginorLogOut();
            }
            else {
                console.log('User was not found.')
            }
        }
    });
    
};

loginAuth(emailauth, passwordauth) {
    console.log(emailauth, passwordauth)
    firebase.auth().signInWithEmailAndPassword(emailauth, passwordauth).catch(function (error) {
        console.log(emailauth + ' is signed in');
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorCode, errorMessage);
    });
};

    
updateMode(e){
        this.setState({mode: e.target.id});
    }

render(){

    if(this.state.mode=='choose'){
        return(
            <div>
               
                <Choose updateMode={this.updateMode}/>
            </div>
            )
    };
    
    if(this.state.mode=='signin'){
        return(
            <div>
                <SignIn logIn={this.logIn}/>
            </div>
            )
            }
    
    if(this.state.mode=='signup'){
        return(
            <div>
                <SignUp logIn={this.logIn}/>
            </div>
            )
    }
}
    
}

class Choose extends React.Component{
    render(){
        
        return(
            <div>
            
            <button id='signin' onClick={this.props.updateMode}>Sign In</button>
            <button id='signup' onClick={this.props.updateMode}>Sign Up</button>
            </div>
        )
    }
}

class SignIn extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
          email: 'nauber9100@hotmail.com',
          password: '910000',
          answer: ' ', 
          online: false
      }
      this.signIn = this.signIn.bind(this);
      this.updateState = this.updateState.bind(this);
  }
    
    signIn(){
        this.props.logIn(this.state.email, this.state.password)
    }
    
    updateState(e){
        switch(e.target.id){
            case 'email': this.setState({email: e.target.value})
            break;
            case 'password': this.setState({password: e.target.value})
            break;
            case 'answer': this.setState({answer: e.target.value})
            break;
        }
        
    }

    render(){
        
        return(
            <div>
            <input className='signin-input' id='email' onKeyUp={this.updateState} placeholder='Your email adress' type="text"/>
            <input className='signin-input' id='password' onKeyUp={this.updateState} placeholder='Your password' type="text"/>
            
            
            <button className='signin-input' id='true' onClick={this.signIn}>Sign In</button>
            </div>
        )
    }
}

class SignUp extends React.Component{
      constructor(props) {
      super(props);
      this.state = {
          user:
          {
          email: '',
          username: '',
          password: '',
          confirmedPassword: '',
          answer: ''
          }
      }
      this.writeUserData = this.writeUserData.bind(this);
      this.createUser = this.createUser.bind(this);
      this.updateState = this.updateState.bind(this);
  }
writeUserData(email, username, answer) {
    console.log('in writeuserdata')
        let object = {
          username: username
        , email: email
        , userMessage: ''
        , userProfile: {
            
            firstname: '',
            surname: '',
            activity: 0,
            online: false,
            team: '',
            city: '',
            position: '',
            favplayer: '',
            favdribble: '',
            favarena: '',
            username: username,
            favlineup: '',
            imageUrl: ''
          }
        , userMedia: {
            mediaImages: [''],
            mediaVideos: ['']
        }, 
            answer: answer
};
    firebase.database().ref('users/' + username).set(object);
}
createUser() {
    console.log('in userdata')
    if(this.state.user.password == this.state.user.confirmedPassword){
        var self = this;
        var email = this.state.user.email;
        var username = this.state.user.username;
        var password = this.state.user.password;
        var answer = this.state.user.answer;
        firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
            self.writeUserData(email, username, answer);
            self.props.logIn(email, password);
        }).catch(function (error){
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(error.message)
        });
        
    };
    
}
    
updateState(e){
    console.log(this.state.user)
    let user = this.state.user;
        switch(e.target.id){
            case 'email': user.email = e.target.value;
            break;
            case 'username': user.username = e.target.value;
            break;
            case 'password': user.password = e.target.value;
            break;
            case 'confirmedPassword': user.confirmedPassword = e.target.value;
            break;
            case 'answer': user.answer = e.target.value;
            break;
        }
    this.setState({user: user});
}

    render(){
        
        return(
            
            <div>
            <input className='signup-input' id='email' onKeyUp={this.updateState} placeholder='Your email adress' type="text"/>
            <input className='signup-input' id='username' onKeyUp={this.updateState} placeholder='Your username' type="text"/>
            <input className='signup-input' id='password' onKeyUp={this.updateState} placeholder='Your password, at least 6 characters' type="text"/>
            <input className='signup-input' id='confirmedPassword' onKeyUp={this.updateState} placeholder='Confirm your password' type="text"/>
            <span className='signup-span'>'I never was, am always to be. No one ever saw me, nor ever will. And yet I am the confidence of all, To live and breathe on this terrestrial ball. What am I?'</span>
            <input className='signup-input' id='answer' onKeyUp={this.updateState} placeholder='Your answer' type="text"/>
            <button className='signup-input signup-button' onClick={this.createUser} id='true'>Sign Up</button>
            </div>
        
        )
    }
}

class SignedIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentUser: props.sentUser,
            question:''
        };
        this.signOut = this.signOut.bind(this);
        this.whatsinhere = this.whatsinhere.bind(this);
        this.onlineTrueFalse = this.props.onlineTrueFalse.bind(this);
        this.returnCurrentUser = this.returnCurrentUser.bind(this);
        this.updateCurrentUser = this.updateCurrentUser.bind(this);
        this.deleteUsers = this.deleteUsers.bind(this);
        this.updateStateQuestion = this.updateStateQuestion.bind(this);
        console.log(props.sentUser)
    };
        
signOut() {
        let userid;
        this.onlineTrueFalse(this.state.currentUser.username, false);
        firebase.auth().signOut().then(function () {
            console.log('Signed Out currentUser');
        }, function (error) {
            console.error('Sign Out Error', error);
        });
};
    
    
whatsinhere(){
    console.log(this.state);
}
    
returnCurrentUser(){
        
        return this.state.currentUser;
}
    
updateCurrentUser(user){
        this.setState({currentUser: user});
}
    
deleteUsers() {
        firebase.database().ref('users/').set({});
        console.log('Users deleted')
};
    
updateStateQuestion(object){
    
    this.setState({question: object})
    
}
    render(){  
        return(
        
            
            <div>
        <div className='session-div'>
            <div className='session-username'>{this.state.currentUser.username}
            <span className='company-name'>Simmidimbadadum - a question simulator</span>
            
            
            </div>
            
            
            
            <button className='signout-button' onClick={this.signOut} id='false'>Sign out</button>
        
        
        </div>
            
            <div>
            
            <CountryComponent updateStateQuestion={this.state.updateStateQuestion}/>
           </div>
            </div>
        )
    }
};


class CountryComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        questions: [],
        currentCountry: 'No Country',
        currentCountryPopulation: 3,
        smallCountries: [],
        largeCountries: [],
        filter: 'allCountries',
        editText: 'Edit',
        changedQuestion: {},
        editable: false,
        byCharacters: []
    }
    this.getCountry = this.getCountry.bind(this);
    this.getCountryPopulation = this.getCountryPopulation.bind(this);
    this.setCurrentCountry = this.setCurrentCountry.bind(this);
    this.setCurrentCountryPopulation = this.setCurrentCountryPopulation.bind(this);
    this.returnQuestionAndAnswers = this.returnQuestionAndAnswers.bind(this);
    this.simulateQuestions=this.simulateQuestions.bind(this);
    this.changeQuestion = this.changeQuestion.bind(this);
    this.editable = this.editable.bind(this);
    this.filterByCharacter = this.filterByCharacter.bind(this);
  }

getCountry(){
    let country;
    let url = 'http://api.population.io/1.0/countries'
    console.log('1');
    fetch(url)
    .then( response => {
        console.log('2', this)
        return response.json();  // Promise som kommer returnera JSON
    })
    .then(json => {// objekt
        console.log('3', country)
        let randomNumber = Math.floor(Math.random() * 236) + 1;
        country = json.countries[randomNumber];
        console.log(country);
        this.setCurrentCountry(country);
        this.getCountryPopulation();
    })
}

getCountryPopulation(){
    console.log(this.state.currentPopulation)
    let population;
    let url = 'http://api.population.io:80/1.0/population/' + this.state.currentCountry +  '/2015-12-24'
    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(json => {
        console.log(json)
        population = json['total_population'].population;
        this.setCurrentCountryPopulation(population);
        this.returnQuestionAndAnswers();
    });
}
    
setCurrentCountry(country){
    this.setState({currentCountry: country})
}
    
setCurrentCountryPopulation(population){
    this.setState({currentCountryPopulation: population})
}
   
returnQuestionAndAnswers(){
    let randomNumber = Math.floor(Math.random() * this.state.currentCountryPopulation/2) + this.state.currentCountryPopulation/3;
    let num = this.state.currentCountryPopulation - randomNumber;
    let numberToString = num.toString().split('');
    let questionObject = {
        text: "What's the population of " + this.state.currentCountry + '?',
        a1: this.state.currentCountryPopulation,
        a2: this.state.currentCountryPopulation - randomNumber,
        a3: this.state.currentCountryPopulation + randomNumber,
        country: this.state.currentCountry,
        population: this.state.currentCountryPopulation,
        editable : false
    }
    let smallCountries = this.state.smallCountries;
    let largeCountries = this.state.largeCountries;
    let allQuestions = this.state.questions;

    if(questionObject.population < 25000000){
        smallCountries.push(questionObject);
    }

    else{
        largeCountries.push(questionObject);
    }

    allQuestions.push(questionObject);
    this.setState({questions: allQuestions, smallCountries: smallCountries, largeCountries: largeCountries});
}
    
// --------- MAIN FUNCTION FOR SIMULATING QUESTIONS AND LIFT THEM TO STATE.------//

simulateQuestions(){

        this.getCountry();  

}

editable(e){



    if(this.state.editable == false) {
        let newQuestions = this.state.questions;
        newQuestions[Number(e.target.id)].editable = true;
        this.setState({editable: true, editableKey: Number(e.target.id), editText: 'Done editing', questions: newQuestions, changedQuestion: newQuestions[Number(e.target.id)]});
    }

    else {
        let newQuestions = this.state.questions;
        let changedQuestion = this.state.changedQuestion;
        changedQuestion.editable = false;
        newQuestions[Number(e.target.id)] = changedQuestion;
        this.setState({editable: false, editableKey: -1, editText: 'Edit', questions: newQuestions})

    }
}

changeQuestion(e){
    var questionToChange = this.state.changedQuestion;

    questionToChange[e.target.getAttribute('data-property')] = Number(e.target.value);

    this.setState({changedQuestion: questionToChange})

    console.log(this.state)
}
    

                                           
returnQuestions(filter){
        let newQuestionsList;
        if(filter == 'smallCountries'){
            
        newQuestionsList = this.state.smallCountries;
        }
        
        else if (filter == 'largeCountries') {
            
            newQuestionsList = this.state.largeCountries;
        }
    
    else if ( filter == 'allCountries') {
        newQuestionsList = this.state.questions;     
    }

        else if ( filter == 'byCharacters') {
            newQuestionsList = this.state.byCharacters;
        }
    
    let listOfQuestions =  newQuestionsList.map((question, key) =>
    
    <li id={key} key={key}><span className='question-text'>{question.text}</span><br/>
    <span className='right-answer'>{question.a1} (right answer)</span><br/>
        {question.editable == false ? <div><span className='wrong-answer'>{question.a2} (wrong answer)</span><br/>
            <span className='wrong-answer'>{question.a3} (wrong answer)</span></div> :

            <div><input data-property='a2' id={key} onKeyUp={this.changeQuestion} className='wrong-answer-input'type="text" defaultValue={question.a2}/>
                <input data-property='a3' id={key} onKeyUp={this.changeQuestion} className='wrong-answer-input'type="text" defaultValue={question.a3}/>
            </div>}

        {this.state.editable == false ? <button onClick={this.editable} id={key}>{this.state.editText}</button> : (this.state.editableKey == Number(key) ? <button onClick={this.editable} id={key}>{this.state.editText}</button>:null)}



    </li>
    )
                                           
    return <ul>{listOfQuestions}</ul>    
}
                                                
changeFilter(filter){
        this.setState({filter: filter})
    }

    filterByCharacter(e){
    var self = this;

        let filteredQuestions = [];
        let newQuestions = this.state.questions;
        for(var i=0; i<newQuestions.length; i++){
            console.log(newQuestions[i].country)

            if (newQuestions[i].country.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0) {
                filteredQuestions.push(newQuestions[i])
                self.setState({byCharacters: filteredQuestions})
            }
        }

        console.log(this.state.byCharacters)



        this.changeFilter('byCharacters')
console.log(this.state)
    }
    

    
    
render(){
return(
<div className='questions-container'>
   {this.state.filter == 'allCountries' ? <div>{this.returnQuestions('allCountries')}</div> : null}
   {this.state.filter == 'smallCountries' ? <div>{this.returnQuestions('smallCountries')}</div> : null}
   {this.state.filter == 'largeCountries' ? <div>{this.returnQuestions('largeCountries')}</div> : null}
    {this.state.filter == 'byCharacters' ? <div>{this.returnQuestions('byCharacters')}</div> : null}
    
    <button className='simulate-button' onClick={this.simulateQuestions}>Simulate Questions</button>    
    
    <div className='filter-div'>
        <button className='filter-button' onClick={() => this.changeFilter('smallCountries')}>Show questions on small countries</button>
        <button className='filter-button' onClick={() => this.changeFilter('largeCountries')}>Show questions on large countries</button>
        <button className='filter-button' onClick={() => this.changeFilter('allCountries')}>Show questions on all countries</button>
        <input placeholder='Filter by characters' className='filter-input' type="text" onKeyUp={this.filterByCharacter}/>
    </div>
</div>
)

}
}


ReactDOM.render(
  <App/>,
  document.getElementById('container')
);