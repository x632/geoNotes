import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDY-pKdNQ2JVB2FTtoQivq3r4vesPJ4sYs",
    authDomain: "geonotes-d4c27.firebaseapp.com",
    projectId: "geonotes-d4c27",
    storageBucket: "geonotes-d4c27.appspot.com",
    messagingSenderId: "71501371633",
    appId: "1:71501371633:web:24e58a0e6fa541b1bdf150",
    measurementId: "G-S4NNB5311L"
  };
 
 
  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
  }else{

    firebase.app()
  }

  export const db = firebase.firestore();

  export const auth = firebase.auth();