// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzZwgmFGwJStjzHqfsOM_onQWj_tlLyMc",
  authDomain: "test-firebase-ssr-astro.firebaseapp.com",
  projectId: "test-firebase-ssr-astro",
  storageBucket: "test-firebase-ssr-astro.appspot.com",
  messagingSenderId: "28613796919",
  appId: "1:28613796919:web:7ecaa6889e9bd67db04bb2",
  measurementId: "G-2F15P437EF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);