import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Bonjour extends Component{
  constructor(props){
    super(props);
    this.state = {age:20,telephone:"065589"};
    this.addAge = this.addAge.bind(this);
  }
  addAge(){
    this.setState({age: this.state.age + 12});
  }
  render(){
    return(
      <div>
        <h1>Hello le monde</h1>
        <b> age : {this.state.age}</b>
        <b> telephone : {this.state.telephone}</b>
        <button onClick={this.addAge}>add</button>
      </div>

      );
  }
}

class Hello extends Component{
  constructor(props){
    super(props);
    this.state = {name:"eddiba",prenom:"zakaria"};
  }
  render(){
    return(
      <div>
        <h1>Hello le monde</h1>
        <b> nom : {this.state.name}</b>
        <b> prenom : {this.state.prenom}</b>
      </div>

      );
  }
}

class App extends Component {
  render() {
    return (
    <div>
       <Hello />  
       <Bonjour />
     </div>
    );
  }
}

export default App;
