import { IPostProps } from './components/Home/Post';
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

export interface IPosts {
  id: string;
  data: firebase.firestore.DocumentData;
}
