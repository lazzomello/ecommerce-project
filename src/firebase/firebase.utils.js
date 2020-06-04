import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyCnfVRWkXbyIOdRPSqztNu479fDJl0DUB8",
  authDomain: "crwn-db-b8d6a.firebaseapp.com",
  databaseURL: "https://crwn-db-b8d6a.firebaseio.com",
  projectId: "crwn-db-b8d6a",
  storageBucket: "crwn-db-b8d6a.appspot.com",
  messagingSenderId: "539091977300",
  appId: "1:539091977300:web:96f4b34b2bc91c1f50d9c1",
  measurementId: "G-TFWJQMYD5X"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore= firebase.firestore()  

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;