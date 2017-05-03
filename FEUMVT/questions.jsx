class Quizz extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      rightAnswers: 0,
      questions: [
        {
          text: "Questions 1",
          a1: "Correct answer",
          a2: "Wrong answer",
          a3: "Also Wrong answer"
        },{
          text: "Question 2",
          a1: "Correct answer",
          a2: "Wrong answer",
          a3: "Also Wrong answer"
        },{
          text: "Question 3",
          a1: "Correct answer",
          a2: "Wrong answer",
          a3: "Also Wrong answer"
        },{
          text: "Question 4",
          a1: "Correct answer",
          a2: "Wrong answer",
          a3: "Also Wrong answer"
        },{
          text: "Question 5",
          a1: "Correct answer",
          a2: "Wrong answer",
          a3: "Also Wrong answer"
        },{
          text: "Question 6",
          a1: "Correct answer",
          a2: "Wrong answer",
          a3: "Also Wrong answer"
        },{
          text: "Question 7",
          a1: "Correct answer",
          a2: "Wrong answer",
          a3: "Also Wrong answer"
        },{
          text: "Question 8",
          a1: "Correct answer",
          a2: "Wrong answer",
          a3: "Also Wrong answer"
        },{
          text: "Question 9",
          a1: "Correct answer",
          a2: "Wrong answer",
          a3: "Also Wrong answer"
        },{
          text: "Question 10",
          a1: "Correct answer",
          a2: "Wrong answer",
          a3: "Also Wrong answer"
        }
      ]
    }
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
    if (clickedQuestion.id == 10) {
      this.gameFinished();
    }
  }
  gameFinished(){
    this.setState({
      rightAnswers: this.points
    });

    // SEND HIGHSCORE TO DATABASE

    document.getElementById("results").className = "results show";
    setTimeout(function(){
      location.reload();
    }, 1000);
  }
  // Loopar igenom this.state.questions och gör om varje object till html
  printQuestions(){
    let loopedQuestions = [];
    let key = 0;
    this.state.questions.forEach(question =>{
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
          <h3>You answered {this.state.rightAnswers} out of 10</h3>
        </div>
      </div>
    );
  }
}
