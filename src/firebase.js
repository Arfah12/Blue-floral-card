
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmj-YMZZc-4Egab1T2X5tnuUTONuKOau0",
  authDomain: "wedding-maroon.firebaseapp.com",
  projectId: "wedding-maroon",
  storageBucket: "wedding-maroon.firebasestorage.app",
  messagingSenderId: "911023434400",
  appId: "1:911023434400:web:754df6efb7898de2daf7c5"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);