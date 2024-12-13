
// import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBErYxdXjwsErChGOKXv12HP9fuyWfGFLw",
    authDomain: "auth-ba649.firebaseapp.com",
    projectId: "auth-ba649",
    storageBucket: "auth-ba649.firebasestorage.app",
    messagingSenderId: "913531054180",
    appId: "1:913531054180:web:92f8ea5be37befa8a95771"
  };

  // Initialize Firebase
   const app =initializeApp(firebaseConfig);
    // const authe=firebase.auth();
   

export const auth= getAuth();

export default app ;