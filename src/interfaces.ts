import firebase from 'firebase';
export interface IStyledNavLink {
  logo?: boolean;
  join?: boolean;
  signIn?: boolean;
}

export interface INews {
  title: string;
  publishedAt: string;
  author: string;
}

export interface IFirebaseData {
  id: string;
  data: firebase.firestore.DocumentData;
}
