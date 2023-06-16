import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJmS-xk2sVlc0hbfxAKyK1eNdTWJYQEWA",
  authDomain: "fede-galara.firebaseapp.com",
  projectId: "fede-galara",
  storageBucket: "fede-galara.appspot.com",
  messagingSenderId: "528494250820",
  appId: "1:528494250820:web:ff4b9634f86ef4fde6a511"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

//process.env.REACT_APP_FIREBASE_API_KEY