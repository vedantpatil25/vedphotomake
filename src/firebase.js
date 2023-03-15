// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAZE1yZprMye50H71lGmw1WAKVdDFRjy5M",
  authDomain: "vedphotomake.firebaseapp.com",
  projectId: "vedphotomake",
  storageBucket: "vedphotomake.appspot.com",
  messagingSenderId: "271565636054",
  appId: "1:271565636054:web:27ded8a40a25c17bf86477",
  measurementId: "G-EQP8C7KJXG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
export {app, auth};
