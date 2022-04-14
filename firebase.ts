// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCqH7AAU5m_BagizFiJM99Xk25jup22Z-Y",
    authDomain: "react-speech-recognition.firebaseapp.com",
    projectId: "react-speech-recognition",
    storageBucket: "react-speech-recognition.appspot.com",
    messagingSenderId: "209814647924",
    appId: "1:209814647924:web:803cc2a3add657ebd64d21",
    measurementId: "G-NF0XNJSZTB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics }