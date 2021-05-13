import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { userReducer} from './reducers/userReducer';

const allReducers = combineReducers({
  user: userReducer
})
export const store = createStore(
  allReducers,{},applyMiddleware(thunk)
);
