import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import MovieList from './MovieList';
import Logo from '../components/Logo/Logo';
import SearchForm from '../components/searchForm/searchForm';
import AddMovie from '../components/AddMovie/index';
import MoviePage from '../components/MoviePage';
import RegisterForm from './registerForm/Register';
import SingUp from './registerForm/singUp';
import './style.css';
import { Route, Redirect } from "react-router";


function MainComponent() {
  return (
    <div className="mainPage"> 
      <h1>Mooooviez</h1>
      <div className="menu">
      <nav>
      <ul>
      <li>Menu 1</li>
      <li>Menu 2</li>
      <li>Menu 3</li>
      <li>Menu 4</li>
      </ul>
      </nav>
      <SearchForm />
      </div>
      <MovieList />
    </div>
  );
}



export default class App extends Component {
  render() {
    return (
      <div className="App">
      <Route exact path="/" component={MainComponent} />
      <Route path="/movie/:id" component={MoviePage} />
      <Route path="/login" component={RegisterForm} />
      <Route path="/signup" component={SingUp} />
      </div>
    );
  }
}

