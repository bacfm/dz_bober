import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

import './index.css';

import Main from './components/Main';
import Auth from './components/Auth';
import Profile from './components/Profile';
import UsersList from './components/UsersList';
import AddMovie from './components/AddMovie';
import Movie from './components/Movie';
import MostLiked from './components/MostLiked';
import MostCommented from './components/MostCommented';
import SignUp from './components/SignUp';
import EditMovie from './components/EditMovie';
import NewComments from './components/NewComments';
import UserComments from './components/UserComments';
import UserVotes from './components/UserVotes';
import NewMovies from './components/NewMovies';

import { reducer } from './reducers';

let store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));


ReactDOM.render(
	<Provider store={store}>
    <BrowserRouter>
    	<Switch>
          
          <Route exact path='/' component={Auth} />
          <Route exact path='/main' component={Main} />
          <Route exact path='/main/profile' component={Profile} />
          <Route exact path='/main/users' component={UsersList} />
          <Route exact path='/main/addmovie' component={AddMovie} />
          <Route exact path='/main/movie/:id' component={Movie}/>
          <Route exact path='/main/mostliked' component={MostLiked}/>
          <Route exact path='/main/mostcommented' component={MostCommented}/>
          <Route exact path='/signup' component={SignUp}/>
          <Route exact path='/main/editmovie/:id' component={EditMovie}/>
          <Route exact path='/main/newcomments' component={NewComments}/>
          <Route exact path='/main/comments' component={UserComments}/>
          <Route exact path='/main/votes' component={UserVotes}/>
          <Route exact path='/main/new' component={NewMovies}/>
          <Route path='*' component={Main}/>

        </Switch>
		  
    </BrowserRouter>
	</Provider>,
	document.getElementById('root'));


registerServiceWorker();
