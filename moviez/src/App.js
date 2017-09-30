import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import { SignIn } from './containers/regForm/signIn';
import { SignUp } from './containers/regForm/signUp';
import AddMovie from './containers/AddMovie/addMovie';
import MovieList from './containers/MovieList/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/login' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/add-movie' component={AddMovie} />
        <Route path='/' component={MovieList} />
      </div>
    );
  }
}

export default App;
