import React, { Component } from 'react';
import IsAuth from './containers/isAuth';
import Header from './components/header';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <IsAuth />
      </div>
    );
  }
}

export default App;
