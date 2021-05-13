interface IUser {
  displayName: string;
  email: string;
  uid:string;
  photoURL: string;
}
interface UserState {
  user: IUser | null;

}

type Action = { type: "SET_USER",paylaod: IUser  }

const initialState= {
  user: null
}
export const userReducer = (state:UserState = initialState, action: Action) => {
  switch(action.type){
    case 'SET_USER':{
      return {...state, user: {...action.paylaod} }
    }
    default:
      return state
  }
} 