import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import { SignIn } from './containers/regForm/signIn';
import { SignUp } from './containers/regForm/signUp';
import AddMovie from './containers/AddMovie/addMovie';
import MovieList from './containers/MovieList/index';
import MoviePage from './containers/MoviePage';
import SearchForm from './containers/searchForm';
import Header from './components/header';
import Menu from './components/navBar';

function mainComponent(){
  return (
    <div className='main-page'>
      <div className='navigation'>
      <Menu />
      <SearchForm />
      </div>
      <MovieList />
    </div>
  );
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path='/' component={mainComponent} />
        <Route path='/login' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/add-movie' component={AddMovie} />
        <Route path='/movie/:id' component={MoviePage} />
      </div>
    );
  }
}

export default App;
