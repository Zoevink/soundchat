import firebase from 'firebase/app';
import 'firebase/firestore';
//import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAZWnB8nmoTvtxP6KBzy1NGlJGQ7jflor8",
  authDomain: "soundchat-5e68b.firebaseapp.com",
  databaseURL: "http://soundchat-5e68b.firebaseio.com",
  projectId: "soundchat-5e68b",
  storageBucket: "soundchat-5e68b.appspot.com",
  messagingSenderId: "172645828001",
  appId: "1:172645828001:web:2ca5e35c84c727b53cb7e0"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firestoreDb = firebase.firestore();

//export const cloudStorage = firebase.storage();