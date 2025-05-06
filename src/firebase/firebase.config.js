// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfgGQqYtFRG9P0hIh2K2mXWO0azJOLg18",
  authDomain: "awoaz-news-portal-auth.firebaseapp.com",
  projectId: "awoaz-news-portal-auth",
  storageBucket: "awoaz-news-portal-auth.firebasestorage.app",
  messagingSenderId: "1045047237498",
  appId: "1:1045047237498:web:f1fafeebd737fc54ba94c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;