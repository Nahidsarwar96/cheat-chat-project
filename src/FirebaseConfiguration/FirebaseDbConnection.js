// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBVTzr_ogJbas2xXzAA5__mQsy-JT3hsmc",
    authDomain: "cheat-chat-project.firebaseapp.com",
    projectId: "cheat-chat-project",
    storageBucket: "cheat-chat-project.appspot.com",
    messagingSenderId: "523556194919",
    appId: "1:523556194919:web:0cf4d723804f167a3a22c2",
    measurementId: "G-8BH3S9V84C"
};

// Initialize Firebase
const dbapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(dbapp);


export default dbapp