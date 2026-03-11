// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAT7rRA9NuHxB3vjugKRQLKy4j8pC1d-3w",
    authDomain: "auth-contex-raju.firebaseapp.com",
    projectId: "auth-contex-raju",
    storageBucket: "auth-contex-raju.firebasestorage.app",
    messagingSenderId: "1026395861471",
    appId: "1:1026395861471:web:1cce0cb86fe6733700546a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);