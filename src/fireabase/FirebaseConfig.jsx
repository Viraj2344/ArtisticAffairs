// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';




// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyCYdDor17C2RRDuY1w7_Q0G0F7MR-DKByU",
authDomain: "artistic-affairs.firebaseapp.com",
projectId: "artistic-affairs",
storageBucket: "artistic-affairs.appspot.com",
messagingSenderId: "344517272234",
appId: "1:344517272234 :web: 5ffc1d00fe02f28bfea6d3", 
measurementId: "G-Q61EVR98XV"
} ;

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}