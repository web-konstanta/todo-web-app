import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from 'redux-thunk';
import { authReducer } from './reducers/authReducer';

const rootReducer = combineReducers({ auth: authReducer })

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))