class App extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
                selected: '',
                questions: [{
                              text: "",
                              a1: "",
                              a2: "",
                              a3: ""
                            }]
			};

            this.changeEntry = this.changeEntry.bind(this);

		}
      render(){
                if(this.state.selected === '') {
                            return (
                          <div>
                            <div> <MyList items= {this.state.questions} changeEntry = {this.changeEntry}/> </div>
                          </div>
                            );
                }
                else {

                            return (
                          <div>
                            <div> <Quizz items= {this.state.questions} changeEntry = {this.changeEntry}/> </div>
                          </div>
                                );
                }

      }

 /* ------------------Get new set of questions------------------------------------------- */
        changeEntry(x,y) {

			 this.setState({
				questions: x,
                selected: y
			});
		}
  }

/* ---------------------------------------------------------------------------------------- */
/* -------------------------THE Quiz COMPONENT---------------------------------------------- */
/* ---------------------------------------------------------------------------------------- */
class Quizz extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      rightAnswers: 0,
      questions: []
    }
    this.currentQuestion = 0;
    this.currentQuestionString = '';
    this.points = 0;
    this.randomizeAnswers = this.randomizeAnswers.bind(this);
    this.printQuestions = this.printQuestions.bind(this);
    this.getRandomInt = this.getRandomInt.bind(this);
    this.clickAnswer = this.clickAnswer.bind(this);
    this.clickAnswerCorrect = this.clickAnswerCorrect.bind(this);
    this.gameFinished = this.gameFinished.bind(this);
  }
  // Returnerar ett slumpat heltal f.o.m. min till max (kan ej returnera max)
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  // Returnerar en array med tre klasser för svarsfrågor
  randomizeAnswers(){
    let first = this.getRandomInt(1, 4);
    let second = this.getRandomInt(1, 4);
    let third = this.getRandomInt(1, 4);
    while(second == first)
      second = this.getRandomInt(1, 4);
    while (third == first || third == second)
      third = this.getRandomInt(1, 4);

    return [`a${first} `,`a${second} `,`a${third} `];
  }
    
  clickAnswerCorrect(event){
    console.log("Before: ", this.points);
    this.points++;
    console.log("After: ", this.points);
    this.clickAnswer(event);
  }
  clickAnswer(event){
    this.currentQuestion++;
    this.currentQuestionString = this.currentQuestion + '/' + this.state.questions.length + 
    ', correct answers: ' + this.points + '/' + this.currentQuestion;
    // Save all questions and convert from HTML collection to array
    let allQuestions = Array.prototype.slice.call(document.getElementsByClassName("question"));
    let clickedQuestion = event.target.parentNode.parentNode;
    allQuestions.map(question =>{
      if (Number(question.id) === (Number(clickedQuestion.id) + 1))
        question.className = "question show";
      else
        question.className = "question hide";
    });
    // 10 questions, change to variable if want to change nr of questions.
    if (clickedQuestion.id == 3) {
      this.gameFinished();
    }
  }
  gameFinished(){
    console.log("Game finished");
    this.setState({
      rightAnswers: this.points
    });
    let allQuestions = Array.prototype.slice.call(document.getElementsByClassName("question"));
    allQuestions.map(question =>{
      question.className = "question hide";
    });
    // SEND HIGHSCORE TO DATABASE

    document.getElementById("results").className = "results show";
  /*  setTimeout(function(){
      location.reload();
    }, 1000); */
  }
  // Loopar igenom this.state.questions och gör om varje object till html
  printQuestions(){
    let loopedQuestions = [];
    let key = 0;
    this.props.items.forEach(question =>{
      let qClass = "question hide";
      if (key === 0)
        qClass = "question show";
      let sequence = this.randomizeAnswers();
      let html = (
        <div key={key++} className={qClass} id={key}>
          <div className="questionText">{question.text}</div>
          <div className="answers">
            <button onClick={this.clickAnswerCorrect} className={sequence[0]}>{question.a1}</button>
            <button onClick={this.clickAnswer} className={sequence[1]}>{question.a2}</button>
            <button onClick={this.clickAnswer} className={sequence[2]}>{question.a3}</button>
          </div>
        </div>);
      loopedQuestions.push(html);
    });
    return loopedQuestions;
  }
  render(){
    return (
      <div>
        <div className="allquestions">{this.printQuestions()}</div>
        <div id="results" className="results hide">
          <h2>Congratulations!</h2> //Change to state, text depending on percent right
          <h3>You answered {this.state.rightAnswers} out of 3</h3>
        </div>
        <CurrentQuestion currentQuestionString={this.currentQuestionString}/>
      </div>
      
    );
  }
}

class CurrentQuestion extends React.Component{
    render(){
        return(
        <div className='current-question-div'>
            {this.props.currentQuestionString};
        </div>
        )
    }
}

/* ---------------------------------------------------------------------------------------- */
/* -------------------------THE CATEGORY LIST COMPONENT------------------------------------ */
/* ---------------------------------------------------------------------------------------- */

/*ALL the categories */
const list = ['Culture', 'Sports', 'Books', 'Celebrities'];



class MyList extends React.Component {

 constructor(props) {
			super(props);

			this.handleChooseCategory = this.handleChooseCategory.bind(this);
            this.updateCountryData = this.updateCountryData.bind(this);

			this.state = {
				selected:'',
                questions: []
			}
		}
/* ---------------------Click event---------------------------------------- */
handleChooseCategory(event) {

    let theOne = event.target.id;

    let x;

    if( this.state.selected ) {
				x = false;


			} else {
				x = true;

                    getDataFromFirebase(this.updateCountryData);

			}
			this.setState({
				selected: theOne
			});

		}

/* ---------------------API event---------------------------------------- */
updateCountryData(data) {


    let category = this.state.selected;

this.props.changeEntry(data,category);

    this.setState({
				questions: data
			});
}
 /* --------------------------render----------------------------------- */

  render() {

var partial;


const newlist = list.map(
      x => ( <li onClick={this.handleChooseCategory} id={x} className="flex-item" key={x}></li> )
    );

        return (
          <div>
            <ul className="flex-container">{newlist}</ul>;
          </div>
        );
      }

  }


/* ------------------------------------------------------------- */
/* -.-.-.-.-.-.-.-.-.-.-.-.-.-. REACT DOM -.-.-.-.-.-.-.-.-.-.-. */
/* ------------------------------------------------------------- */
	ReactDOM.render(
		<App />,
		document.getElementById('root')
	);
