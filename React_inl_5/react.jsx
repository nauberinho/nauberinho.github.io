class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
      tal1: props.tal1,
      tal2: props.tal2,
      operator: props.operator
    };
    this.onKeyPress = this.onKeyPress.bind(this);
    this.calculator1 = this.calculator1.bind(this);
    this.calculator2 = this.calculator2.bind(this);
    this.changeOperator=this.changeOperator.bind(this);
    this.returnOperation=this.returnOperation.bind(this);
  }
  
    onKeyPress(event) {
        this.setState({text: event.target.value});
  }
  
    calculator1(event) {
  
        this.setState({tal1: parseInt(event.target.value)});

  }
    
    calculator2(event) {    
  
        this.setState({tal2: parseInt(event.target.value)});

  }
    
    changeOperator(event){
        
        this.setState({operator: event.target.value})
        console.log('operator: ' + this.state.operator)
    }
    
    returnOperation(string, x, y){
    switch(string){

        case '+':
            return x+y;
            break;
        case '-':
            return x-y
            break;
         case '*':
             return x*y
            break;
        case '/':
            return x/y
            break;
    }
        
    }
  
  render() {

    return (
      <div>
            <div className='section-one'>
                <input type='text' onKeyUp={this.onKeyPress} placeholder='Skriv något'/>
                <div>Text: {this.state.text}</div>
            </div>
            <div className='section-two'>
                <button value='+' onClick={this.changeOperator}>Addition</button>
                <button value='-' onClick={this.changeOperator}>Subtraction</button>
                <button value='*' onClick={this.changeOperator}>Multiplication</button>
                <button value='/' onClick={this.changeOperator}>Division</button>
                <input id='tal1' type='text' onKeyUp={this.calculator1} placeholder='tal1'/>
                <input id='tal2' type='text' onKeyUp={this.calculator2} placeholder='tal2'/>
                <div>Summa: {this.returnOperation(this.state.operator, this.state.tal1, this.state.tal2)}</div>
            </div>
      </div>
    );
  }
}

class ChangeState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        button1: {clicks: 0, class: props.button1class},
        button2: {clicks: 0, class: props.button2class},
        button3: {clicks: 0, class: 'not-active'},
        text: props.text,
    };
    this.changeClass = this.changeClass.bind(this);
  }
    
    changeClass(e){
        let newButton = this.state[e.target.id];
        newButton.clicks++
        this.setState({[e.target.id]: newButton})
        let list = [];
        list.push(this.state.button1, this.state.button2, this.state.button3);
        let clicks = [];    
        for(let i=0; i<list.length; i++){
            clicks.push(list[i].clicks);
        }
        var maxIndex = clicks.indexOf(Math.max.apply( Math, clicks));
        let number = maxIndex+1;
        let mostActiveButton = this.state['button' + number];
        for(let i=0; i<clicks.length; i++){
            let button;
            let num = i+1;
            button = this.state['button' + num], button.class = 'not-active', this.setState({['button' + num]: button})
        }
        newButton.class='active';
        mostActiveButton.class='most-clicked';
        this.setState({[e.target.id]: newButton})
        this.setState({['button' + (maxIndex+1)]: mostActiveButton})
        let amount;        
        let score;
        this.state[e.target.id].clicks > 1 ? amount = ' gånger.' : amount = ' gång.';
        this.state[e.target.id].class == 'most-clicked' ?   score = ' Den har flest klick av alla knappar.'  : score = ' Det finns andra knappar som har fler klick.';     
        let text = 'Du klickade på ' + e.target.id + ' som har klickats på ' + this.state[e.target.id].clicks + amount + score;
        this.setState({text: text})
    }
        render() {
            return (
              <div className='section-three'>
                    <button></button>
                    <button data-index={0} className={this.state.button1.class} id='button1' onClick={this.changeClass}></button>
                    <button data-index={1} id='button2' onClick={this.changeClass} className={this.state.button2.class}></button>
                    <button data-index={2} id='button3' onClick={this.changeClass} className={this.state.button3.class}></button>
                    <div>Text: {this.state.text}</div>
              </div>
            );
          }
}

ReactDOM.render(
  <Counter text="hello world" tal1='' tal2='' operator='+'/>,
  document.getElementById('app')
);

ReactDOM.render(
  <ChangeState button1class='d' button2class='d' text='text'/>,
  document.getElementById('app2')
);
