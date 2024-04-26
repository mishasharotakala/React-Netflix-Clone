// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    createUserWithEmailAndPassword, 
    getAuth, 
    signInWithEmailAndPassword, 
    signOut} from "firebase/auth";
import { 
    addDoc, 
    collection, 
    getFirestore } from "firebase/firestore";
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

const signup = async (name, email, password) => {
    try {
       const res = await createUserWithEmailAndPassword(
        auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });

    }
    catch (error) {
        console.log(error);
        alert(error);
    }
}

const login = async (email, password)=>{
    try {
        await signInWithEmailAndPassword(auth, email, password);
    }
    catch (error) {
        console.log(error);
        alert(error);
    }
}

const logout = async () => {
    signOut(auth);
}

export { auth, db, signup, login, logout}