// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUxOivohsPkzbVw8lw0VHB4gIx_ODAxvo",
  authDomain: "reactjs-p1.firebaseapp.com",
  projectId: "reactjs-p1",
  storageBucket: "reactjs-p1.appspot.com",
  messagingSenderId: "102306343681",
  appId: "1:102306343681:web:685da92b83801419ffc900",
  measurementId: "G-CS51B7LEH2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
export const db = getFirestore(app);