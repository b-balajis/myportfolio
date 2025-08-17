// Import required Firebase functions
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase config (from Firebase console)
const firebaseConfig = {
    apiKey: "AIzaSyB7L8LuoY4dqwPV96eZs_6HOnca7bbYLSo",
    authDomain: "myportfolio-18342.firebaseapp.com",
    projectId: "myportfolio-18342",
    storageBucket: "myportfolio-18342.firebasestorage.app",
    messagingSenderId: "48500292476",
    appId: "1:48500292476:web:e116bd31b96fc541c202f9",
    measurementId: "G-4YC380FQR0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
