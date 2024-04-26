// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD_N5RCZomTquei5ZWlHZz972p8Kvv2_s",
  authDomain: "netflix-clone-26f6e.firebaseapp.com",
  projectId: "netflix-clone-26f6e",
  storageBucket: "netflix-clone-26f6e.appspot.com",
  messagingSenderId: "1045484023241",
  appId: "1:1045484023241:web:d847dc31dec3f4ef3e4c18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);