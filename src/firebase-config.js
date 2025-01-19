// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBylw4iOtE0Hl7dekBZfB5-n4BAMuiykdA",
  authDomain: "fir-crud-d9031.firebaseapp.com",
  projectId: "fir-crud-d9031",
  storageBucket: "fir-crud-d9031.firebasestorage.app",
  messagingSenderId: "159932886865",
  appId: "1:159932886865:web:8788a592b7d5ab0e2c2d70",
  measurementId: "G-QP5GRQTKSN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
