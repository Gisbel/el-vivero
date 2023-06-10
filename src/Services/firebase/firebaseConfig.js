// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBe3mimgZpzxSjuhaGzm7ZzQuoEeFZ0mrU",
  authDomain: "ecommerce-coderhouse-43190.firebaseapp.com",
  projectId: "ecommerce-coderhouse-43190",
  storageBucket: "ecommerce-coderhouse-43190.appspot.com",
  messagingSenderId: "437011445063",
  appId: "1:437011445063:web:9727c1ce97d7b736c80862"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)