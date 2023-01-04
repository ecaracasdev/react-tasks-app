// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3yax05_NE2aoImV9OfrAOj_f_ZJzL92A",
  authDomain: "react-fb-auth-dc4a0.firebaseapp.com",
  projectId: "react-fb-auth-dc4a0",
  storageBucket: "react-fb-auth-dc4a0.appspot.com",
  messagingSenderId: "522032381569",
  appId: "1:522032381569:web:2ad24b106cd4045e7f5780",
  measurementId: "G-SSQ6P15GFS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);