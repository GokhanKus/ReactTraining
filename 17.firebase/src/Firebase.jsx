import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDkzIBgCSndcdudd5j0jEpwZrr80fNIXgw",
    authDomain: "firstproject-firebase-7e7b8.firebaseapp.com",
    projectId: "firstproject-firebase-7e7b8",
    storageBucket: "firstproject-firebase-7e7b8.firebasestorage.app",
    messagingSenderId: "323742456737",
    appId: "1:323742456737:web:550fd56cf1c0282d3b89e0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);