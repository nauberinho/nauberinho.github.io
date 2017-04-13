

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    text: props.text
    };
    this.onKeyPress = this.onKeyPress.bind(this);
  }
  
  onKeyPress(event) {
  this.setState({text: event.target.value});
  }
  
  render() {
    return (
      <div>
       <input type='text' onKeyUp={this.onKeyPress} placeholder='Skriv något'/>
        <div>Text: {this.state.text}</div>
      </div>
    );
  }
}

ReactDOM.render(
  <Counter text="hello world"/>,
  document.getElementById('app')
);
