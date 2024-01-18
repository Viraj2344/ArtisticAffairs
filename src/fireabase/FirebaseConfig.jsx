// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg8KeFArelvf2m6J6_A2wG9MhBVKerc5Q",
  authDomain: "artisticaffairs2.firebaseapp.com",
  projectId: "artisticaffairs2",
  storageBucket: "artisticaffairs2.appspot.com",
  messagingSenderId: "1032759629755",
  appId: "1:1032759629755:web:592cda3358b80cb262969e",
  measurementId: "G-9PNL87CS8T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}