// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD7W0yPy6LgtQpfafqN9F1UnYVAUxx_wTQ",
    authDomain: "m4-learning-websi.firebaseapp.com",
    projectId: "m4-learning-websi",
    storageBucket: "m4-learning-websi.appspot.com",
    messagingSenderId: "661436960998",
    appId: "1:661436960998:web:eb93555d37e23777202b27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;