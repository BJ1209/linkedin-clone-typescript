import { actionType } from '../action-types';

export interface IUser {
  displayName: string | null | undefined;
  email: string | null | undefined;
  uid: string | undefined;
  photoURL: string | null | undefined;
}
export interface UserState {
  user: IUser | null;
}

export type LoginAction = {
  type: string;
  paylaod: IUser;
};
export type LogoutAction = {
  type: string;
};

const initialState = {
  user: sessionStorage.getItem('lc-user-profile')
    ? JSON.parse(sessionStorage['lc-user-profile'])
    : null,
};

const userReducer = (state: UserState = initialState, action: LoginAction): UserState => {
  switch (action.type) {
    case actionType.SET_USER_LOGIN: {
      return {
        ...state,
        user: { ...action.paylaod },
      };
    }
    case actionType.SET_USER_LOGOUT: {
      return {
        ...state,
        user: null,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
