import firebase from 'firebase';

const firebaseConfig = {
  // YOUR CONFIG HERE
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();
const GoogleProvider = new firebase.auth.GoogleAuthProvider();

const storage = firebaseApp.storage();
export default db;
export { auth, GoogleProvider, storage };
