// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCd2X9WXZiBIAAI8TzrR7MUa3-EvZp2V0c",
  authDomain: "test-app-rishav.firebaseapp.com",
  projectId: "test-app-rishav",
  storageBucket: "test-app-rishav.appspot.com",
  messagingSenderId: "129567474175",
  appId: "1:129567474175:web:8473430c58c34cac8f27ca",
  measurementId: "G-B8JJ57Y5T6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;