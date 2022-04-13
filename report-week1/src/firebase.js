// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBipxdUbbg9g41-tVyBaofp7klIThIVnvo",
  authDomain: "sparta-react-basic-5a29d.firebaseapp.com",
  projectId: "sparta-react-basic-5a29d",
  storageBucket: "sparta-react-basic-5a29d.appspot.com",
  messagingSenderId: "277136027270",
  appId: "1:277136027270:web:f7f0e968fb8cb90cb1ab07",
  measurementId: "G-MGJ2KGB2DG",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
