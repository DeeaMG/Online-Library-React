import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBMLCcr9UCRTPmHYU9ZkKrn6YMtt7yzHjk",
  authDomain: "online-library-cf191.firebaseapp.com",
  projectId: "online-library-cf191",
  storageBucket: "online-library-cf191.appspot.com",
  messagingSenderId: "386104774583",
  appId: "1:386104774583:web:3b5e0fe5d2d5a4a0212232",
  measurementId: "G-V5DNGJD481",
};


const app = firebase.initializeApp(firebaseConfig);

export const db = app.firestore();
export const auth = app.auth();
export const firestore = firebase.firestore;

