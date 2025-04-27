// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDYMX1V5oVUsiC2NPqNkSoJ0cucuEpL6CQ",
  authDomain: "blog-6029.firebaseapp.com",
  projectId: "blog-6029",
  storageBucket: "blog-6029.firebasestorage.app",
  messagingSenderId: "135112862696",
  appId: "1:135112862696:web:467f6e8c5bc9b943b7d25d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app) 