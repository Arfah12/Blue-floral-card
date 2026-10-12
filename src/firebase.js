
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWszXb90lt8qh-mpaikB3VsAsSj7wynro",
  authDomain: "digital-wedding-card-builder.firebaseapp.com",
  projectId: "digital-wedding-card-builder",
  storageBucket: "digital-wedding-card-builder.firebasestorage.app",
  messagingSenderId: "1088441051714",
  appId: "1:1088441051714:web:3791987c78c5af6a839bdb"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);