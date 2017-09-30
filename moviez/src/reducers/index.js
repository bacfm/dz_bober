import { combineReducers } from 'redux';
import { users } from './user';
import { movies } from './movie';

export default combineReducers({
    users,
    movies
});


