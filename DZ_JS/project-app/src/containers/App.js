import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { connect } from 'react-redux';
import MovieList from './MovieList';
import Logo from '../components/Logo/Logo';
import SearchForm from '../components/searchForm';
import AddMovie from '../components/AddMovie';
import './style.css'


class App extends Component {
  render() {
    return (
      <div className="App">

      <SearchForm />
        <MovieList />
        <AddMovie />
      </div>
    );
  }
}

export default connect()(App);
