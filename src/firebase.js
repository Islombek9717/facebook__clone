import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIapE3gnL-DKEAQyS5ijTgm3qjmLM4Ca4",
  authDomain: "facebook-clone-77479.firebaseapp.com",
  projectId: "facebook-clone-77479",
  storageBucket: "facebook-clone-77479.appspot.com",
  messagingSenderId: "101631542749",
  appId: "1:101631542749:web:3ef153196a3917fd5be234",
  measurementId: "G-M4XX08M066",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
