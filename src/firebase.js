
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY, 
  authDomain: "fir-test-4d2ec.firebaseapp.com",
  projectId: "fir-test-4d2ec",
  storageBucket: "fir-test-4d2ec.firebasestorage.app",
  messagingSenderId: "804158801361",
  appId: "1:804158801361:web:1751019f18115cd4bbccf0",
  measurementId: "G-7LEQ3DS18J"
};

// Initialize Apps
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs };
