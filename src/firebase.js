// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvUH8hMNPfQbSVvBMEJmRdCdiOS6RVhRo",
  authDomain: "e-sandesh-c8475.firebaseapp.com",
  projectId: "e-sandesh-c8475",
  storageBucket: "e-sandesh-c8475.appspot.com",
  messagingSenderId: "826877019134",
  appId: "1:826877019134:web:4e2420c98db627153876af",
  measurementId: "G-6R419CBSGH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);