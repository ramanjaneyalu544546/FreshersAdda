// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:"AIzaSyDFgev_aDZuV_zL2iu6Dm1e7Ma_ceUJHls",
  authDomain:"blogfinal-61ed9.firebaseapp.com",
  projectId:"blogfinal-61ed9",
  storageBucket:"blogfinal-61ed9.firebasestorage.app",
  messagingSenderId:"103921471256",
  appId:"1:103921471256:web:63559f13895c404dd2d86d",
  measurementId:"G-54ZN06FGLS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need
/*ort { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: 'mern-auth-1c4ae.firebaseapp.com',
      projectId: 'mern-auth-1c4ae',
        storageBucket: 'mern-auth-1c4ae.appspot.com',
          messagingSenderId: '277641423672',
            appId: '1:277641423672:web:2de25252aae022d51aafcd',
            };

            // Initialize Firebase
            export const app = initializeApp(firebaseConfig);*/
