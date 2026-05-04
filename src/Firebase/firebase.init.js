// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-clSrxV9Z0pyXJoMJ-Yt_K6c-WCK9y3E",
  authDomain: "book-vibe-7e9f3.firebaseapp.com",
  projectId: "book-vibe-7e9f3",
  storageBucket: "book-vibe-7e9f3.firebasestorage.app",
  messagingSenderId: "383985498899",
  appId: "1:383985498899:web:f27e573af3fbed0e1f78e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);