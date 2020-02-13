import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD50xwgfM15loPdkZ28n_gQ4BOAI2peymE",
  authDomain: "shanaki-shop.firebaseapp.com",
  databaseURL: "https://shanaki-shop.firebaseio.com",
  projectId: "shanaki-shop",
  storageBucket: "shanaki-shop.appspot.com",
  messagingSenderId: "531398147611",
  appId: "1:531398147611:web:211e9fc0d4a7e708e582be",
  measurementId: "G-VT90MHNER1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
