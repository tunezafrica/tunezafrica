// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVT6sZ-78b7G70Ix0Fy62EpAKbkK0eUaY",
  authDomain: "tunezafrica.firebaseapp.com",
  projectId: "tunezafrica",
  storageBucket: "tunezafrica.appspot.com",
  messagingSenderId: "884417747268",
  appId: "1:884417747268:web:15389e07c194a81dc29f11",
  measurementId: "G-7R6TYXHWNW",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
