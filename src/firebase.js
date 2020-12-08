import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDB8mo9-JyrxC2pJBkN77jf5MEEiQhGHwg",
  authDomain: "clone-eeef6.firebaseapp.com",
  databaseURL: "https://clone-eeef6.firebaseio.com",
  projectId: "clone-eeef6",
  storageBucket: "clone-eeef6.appspot.com",
  messagingSenderId: "845213143786",
  appId: "1:845213143786:web:3cd29f9989a14bb98efd93",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };