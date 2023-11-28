import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhTHPTNz0TErSZw_bPTdzEoGmzUW-y3dw",
  authDomain: "twitter-clone-udemy-9d293.firebaseapp.com",
  projectId: "twitter-clone-udemy-9d293",
  storageBucket: "twitter-clone-udemy-9d293.appspot.com",
  messagingSenderId: "894915095550",
  appId: "1:894915095550:web:a61ad8e144d5399fb82eaf",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
