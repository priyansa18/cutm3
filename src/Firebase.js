// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk5c5jx5N7XTlz0cpzb4NfMs066Jy9Zx8",
  authDomain: "cutmsmart3dlearning.firebaseapp.com",
  projectId: "cutmsmart3dlearning",
  storageBucket: "cutmsmart3dlearning.appspot.com",
  messagingSenderId: "632193080878",
  appId: "1:632193080878:web:53c15f2d2b4f5020fec9bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

