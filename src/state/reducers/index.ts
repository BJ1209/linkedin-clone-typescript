import { combineReducers } from 'redux';
import { userReducer } from './authReducer';

const reducers = combineReducers({
  auth: userReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
