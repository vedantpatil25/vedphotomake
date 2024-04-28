// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// import {getFirestore, collection, getDoc, getDocs} from "firebase/firestore";
// import { cloneElement } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyBkl5jhy_pKfzPpagyqaQctjnoM2RkyWPk",
  authDomain: "ecowastecollect.firebaseapp.com",
  projectId: "ecowastecollect",
  storageBucket: "ecowastecollect.appspot.com",
  messagingSenderId: "840809913962",
  appId: "1:840809913962:web:6641cd24ae25441f54b413",
  measurementId: "G-KMS9MF8JYC"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app,auth};