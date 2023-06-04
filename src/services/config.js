// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJmS-xk2sVlc0hbfxAKyK1eNdTWJYQEWA",
  authDomain: "fede-galara.firebaseapp.com",
  projectId: "fede-galara",
  storageBucket: "fede-galara.appspot.com",
  messagingSenderId: "528494250820",
  appId: "1:528494250820:web:ff4b9634f86ef4fde6a511"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Uso esa instancia de Firebase para obtener una instancia de Firestore

export const db = getFirestore(app);