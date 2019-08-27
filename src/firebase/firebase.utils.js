import firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyAUSJ5FUkSgX2NKlCHmYWgMezIknnUn_-s",
  authDomain: "pizza-app-4df3a.firebaseapp.com",
  databaseURL: "https://pizza-app-4df3a.firebaseio.com",
  projectId: "pizza-app-4df3a",
  storageBucket: "",
  messagingSenderId: "776105950620",
  appId: "1:776105950620:web:6dba7c1d30771556"
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();

export default firebase;
