// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuE6OyghtmCZGNyWy4dSOfjIOvJVmdktA",
  authDomain: "coffee-store-f613b.firebaseapp.com",
  projectId: "coffee-store-f613b",
  storageBucket: "coffee-store-f613b.firebasestorage.app",
  messagingSenderId: "317883091736",
  appId: "1:317883091736:web:40aa2505a36562d9d62c6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);