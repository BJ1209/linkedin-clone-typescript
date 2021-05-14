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

export type Action = {
  type: string;
  paylaod?: IUser;
};

const initialState = {
  user: null,
};
export const userReducer = (state: UserState = initialState, action: Action) => {
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
