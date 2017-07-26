import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from "./container/chatWindow";
let idCounter = 0;
class App extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		id: idCounter,
  		title: "",
  	}
  }
  render(){
    return (
      <div className="App">
      <ChatWindow />
      </div>
    );
  }
}

export default App;
