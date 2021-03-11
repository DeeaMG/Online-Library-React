import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "asd",
  authDomain: "asd",
  projectId: "asd",
  storageBucket: "asd",
  messagingSenderId: "asd",
  appId: "asd",
  measurementId: "asd"
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const firestore = firebase.firestore;

