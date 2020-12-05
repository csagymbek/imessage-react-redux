import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClNiEI0XeKO_KKysY7ZZnmJpsPfRyfVHc",
  authDomain: "imessage-react-redux.firebaseapp.com",
  projectId: "imessage-react-redux",
  storageBucket: "imessage-react-redux.appspot.com",
  messagingSenderId: "101389708502",
  appId: "1:101389708502:web:324e35281c5d310fd3ad77",
  measurementId: "G-2YCNCFJWP0",
};
export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const database = firebaseApp.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
