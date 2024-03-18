// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4eq-aAWqBcBaYclbnOMWGpaeMDWA6L_U",
  authDomain: "clearpathauth.firebaseapp.com",
  projectId: "clearpathauth",
  storageBucket: "clearpathauth.appspot.com",
  messagingSenderId: "281680783497",
  appId: "1:281680783497:web:1546f863c0103bf9db7e58",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// let app;
// if (firebase.apps.length === 0) {
//   const app = initializeApp(firebaseConfig);
// } else {
//   app = firebase.app();
// }

const auth = firebase.auth();

export { auth };
