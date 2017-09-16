import { combineReducers } from 'redux';
import { movies } from './MovieList';
import { filterMovies } from './FilterMovies';
import { users } from './user';


export default combineReducers({
	users,
	movies,
	filterMovies
})