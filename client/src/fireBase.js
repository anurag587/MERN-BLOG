// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-f97a6.firebaseapp.com",
  projectId: "mern-blog-f97a6",
  storageBucket: "mern-blog-f97a6.appspot.com",
  messagingSenderId: "962445056891",
  appId: "1:962445056891:web:78ef5d6d5396a2b70d7bde",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
