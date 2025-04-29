// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCk6t-y2hf4UrVdgubUwt156Y5ckzvC9KU",
  authDomain: "coder-shop-69600.firebaseapp.com",
  projectId: "coder-shop-69600",
  storageBucket: "coder-shop-69600.firebasestorage.app",
  messagingSenderId: "341501244287",
  appId: "1:341501244287:web:53779425aed6084c40604a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)