class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
    
    render(){
        
        return(
            <div>
                
                <span>Hello</span> 
                <button onClick={sayHello}></button>
                
            </div>
        
        )
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('profil')
);