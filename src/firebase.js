// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABIvYSMPh7H-dX-5t-fwhocv8YgKNdw8o",
  authDomain: "netflixgpt-f3e31.firebaseapp.com",
  projectId: "netflixgpt-f3e31",
  storageBucket: "netflixgpt-f3e31.firebasestorage.app",
  messagingSenderId: "873662844209",
  appId: "1:873662844209:web:bea25df10ce3293faab410",
  measurementId: "G-HE3D2V7F22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);