import { Dispatch } from 'redux';
import { actionType } from '../action-types';
import { Action, IUser } from '../reducers/authReducer';

export const login = (user: IUser) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: actionType.SET_USER_LOGIN,
      paylaod: user,
    });
  };
};

export const logout = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: actionType.SET_USER_LOGOUT,
    });
  };
};
