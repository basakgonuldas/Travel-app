// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIt-nItYwqWn7XpHrO4wrrKIJPLEIZckk",
  authDomain: "proje1-ae9ff.firebaseapp.com",
  projectId: "proje1-ae9ff",
  storageBucket: "proje1-ae9ff.firebasestorage.app",
  messagingSenderId: "176641168312",
  appId: "1:176641168312:web:57ec1f5752dac7d9ff354d",
  measurementId: "G-3ZD4GKSGVP"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)
