import { combineReducers } from 'redux';
import user from './user';
import todo from './todo';
import { token } from './token';


export default combineReducers({
    user,
    todo,
    token
});


