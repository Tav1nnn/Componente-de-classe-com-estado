import { Component } from "react";

class App extends Component{
  constructor(props){
    super(props);
    this.handlePClick = this.handlePClick.bind(this); //o método tem acesso ao this.state
    
    this.state = {//estado
      name: 'Otavio Marques',
      counter: 0
    };
  }

  handlePClick(){
    this.setState({name:'Junior'}); //quando meu estado mudar a fução render vai ser chamada
  }

  handleAClick = (event) => {
    event.preventDefault();
    const {counter} = this.state;
    this.setState({ counter: counter + 1 });
  }

  render(){//renderizar novamente o componente porque o estado mudou 
    const { name, counter } = this.state;
    return(
      <>
        <h1 onClick={this.handlePClick}>{name} {counter}</h1>
        <a onClick={this.handleAClick} link="">Este Link</a>
      </>
    );
  }
}

export default App;
