// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvO36Oet37bYJEwwHYG_4rZMMPE5dcfgE",
  authDomain: "netflix-mini-474c8.firebaseapp.com",
  projectId: "netflix-mini-474c8",
  storageBucket: "netflix-mini-474c8.appspot.com",
  messagingSenderId: "897813863621",
  appId: "1:897813863621:web:d38e8d855bf060b51da4ac",
  measurementId: "G-T5XY9FBMSW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);