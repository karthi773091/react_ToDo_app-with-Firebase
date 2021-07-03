import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBUPMpUmvYfsyJTm4abSRmTy7qY-1Ywljo",
  authDomain: "todoapp-b5e1e.firebaseapp.com",
  projectId: "todoapp-b5e1e",
  storageBucket: "todoapp-b5e1e.appspot.com",
  messagingSenderId: "961197248982",
  appId: "1:961197248982:web:bb0425c0b5ac041cd5d477",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
