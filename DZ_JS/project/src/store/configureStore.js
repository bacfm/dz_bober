import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


export default function configureStore(initialState){
	const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
	return store;
}