import { Dispatch } from 'redux';
import { actionType } from '../action-types';
import { IUser, LoginAction, LogoutAction } from '../reducers/authReducer';

export const login = (user: IUser) => (dispatch: Dispatch<LoginAction>) =>
  dispatch({
    type: actionType.SET_USER_LOGIN,
    paylaod: user,
  });

export const logout = () => (dispatch: Dispatch<LogoutAction>) =>
  dispatch({
    type: actionType.SET_USER_LOGOUT,
  });
