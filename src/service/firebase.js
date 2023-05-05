// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7kjpgArovjQXe-q27S_1h_gmZKcyYC-w",
  authDomain: "auth-70a7f.firebaseapp.com",
  projectId: "auth-70a7f",
  storageBucket: "auth-70a7f.appspot.com",
  messagingSenderId: "243669603773",
  appId: "1:243669603773:web:b1ddf4780a20444aeceed4",
  measurementId: "G-REWJ1DD4RJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
