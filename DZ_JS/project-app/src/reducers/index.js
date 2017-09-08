import { combineReducers } from 'redux';
import { movies } from './MovieList';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
	movies
})