import { combineReducers } from 'redux';
import { users } from './user';
import { movies } from './movie';
import { filterMovies } from './FilterMovie';

export default combineReducers({
    users,
    movies,
    filterMovies
});


