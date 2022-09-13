// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAge7_SUDYkzj8NUJ3tpQtB6ALRbIPFYqw",
    authDomain: "fiftyfifty-262cf.firebaseapp.com",
    projectId: "fiftyfifty-262cf",
    storageBucket: "fiftyfifty-262cf.appspot.com",
    messagingSenderId: "5910209070",
    appId: "1:5910209070:web:0486239198c8ad0a6a75bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}