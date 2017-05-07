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
        button1class: props.button1class,
        button2class: props.button2class,
        button3class: 'not-active',
        text: props.text,
        clicks: [0,0,0]
    };
    this.changeClass = this.changeClass.bind(this);

  }
    
    changeClass(event){
        
        console.log(event.target.class)
        let newclicksList = this.state.clicks;
        if(event.target.id=='button1'){
            newclicksList[event.target[data-index]]++
            this.setState({button1class: 'active'})
            this.setState({button2class: 'not-active'})
            this.setState({button3class: 'not-active'})
            if(Math.max(newclicksList) == newclicksList[event.target[data-index]]){                                  
                this.setState({button1class: 'most-clicked'})
            }
            this.setState({text: 'Button 1 är aktiv'})
        }
        
        else if(event.target.id=='button2'){
            newclicksList[event.target[data-index]]++
            this.setState({button1class: 'not-active'})
            this.setState({button2class: 'active'})
            this.setState({button3class: 'not-active'})
            if(Math.max(newclicksList) == newclicksList[event.target[data-index]]){                                  
                this.setState({button2class: 'most-clicked'})
            }
            this.setState({text: 'Button 2 är aktiv'})
        }
        
        else if(event.target.id=='button3'){
            newclicksList[event.target[data-index]]++

            this.setState({button1class: 'not-active'})
            this.setState({button2class: 'not-active'})
            this.setState({button3class: 'active'})
            if(Math.max(newclicksList) == newclicksList[event.target[data-index]]){                                  
                this.setState({button3class: 'most-clicked'})
            }
            this.setState({text: 'Button 3 är aktiv'})
        };
        
        console.log('button1: ' + this.state.button1class +  ', button2: ' + this.state.button2class)
        
    }
    
        render() {
            return (
              <div className='section-three'>
                <button data-index={0} className={this.state.button1class} id='button1' onClick={this.changeClass}></button>
                <button data-index={1} id='button2' onClick={this.changeClass} className={this.state.button2class}></button>
                <button data-index={2} id='button3' onClick={this.changeClass} className={this.state.button3class}></button>
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
