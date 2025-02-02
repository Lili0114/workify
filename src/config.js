// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQlYEPUAh0HS0UXbrzt75qSbI84HNwRMQ",
  authDomain: "workify-66822.firebaseapp.com",
  projectId: "workify-66822",
  storageBucket: "workify-66822.appspot.com",
  messagingSenderId: "92009962595",
  appId: "1:92009962595:web:cbff0de9fc0cd035346c56",
  measurementId: "G-BNX3KDQM3H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);