// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGfdGdtTGtG5rPAk1OV586Awwt7s1tnGs",
  authDomain: "netflix-mini-65990.firebaseapp.com",
  projectId: "netflix-mini-65990",
  storageBucket: "netflix-mini-65990.appspot.com",
  messagingSenderId: "364586423",
  appId: "1:364586423:web:985a5c787f4673593eb432",
  measurementId: "G-N3BB9DYVD4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
