// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
          apiKey: "AIzaSyA45fU0bOUpPK4ILmzKNismrmROKpU-0S0",
          authDomain: "ema-john-simple-auth-c3a1b.firebaseapp.com",
          projectId: "ema-john-simple-auth-c3a1b",
          storageBucket: "ema-john-simple-auth-c3a1b.appspot.com",
          messagingSenderId: "990896970721",
          appId: "1:990896970721:web:485f717e89a72e099b50a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;