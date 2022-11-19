import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAhQFdUp-Zm0IzPGgdDrOLPFRsdOeJZ854",
  authDomain: "student-form-944c4.firebaseapp.com",
  projectId: "student-form-944c4",
  storageBucket: "student-form-944c4.appspot.com",
  messagingSenderId: "107315795518",
  appId: "1:107315795518:web:3f8c6d9d7d99bb2cf7236f",
  measurementId: "G-LCSRRY9204"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);