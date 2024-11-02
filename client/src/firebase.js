// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "order-d4332.firebaseapp.com",
  projectId: "order-d4332",
  storageBucket: "order-d4332.appspot.com",
  messagingSenderId: "240170916496",
  appId: "1:240170916496:web:3398eeef87c409969fd615"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);