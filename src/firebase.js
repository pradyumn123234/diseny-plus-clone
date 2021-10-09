import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoL6B-t25lz_0kSm9D0k2jrIx510-egZE",
  authDomain: "disneyclone-947fe.firebaseapp.com",
  projectId: "disneyclone-947fe",
  storageBucket: "disneyclone-947fe.appspot.com",
  messagingSenderId: "809605480106",
  appId: "1:809605480106:web:a02feecfb5ca248647dad3",
  measurementId: "G-XJN54P06TK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
