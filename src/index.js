import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
/////////////////////////////////////////////////////////////////////////////
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
/////////////////////////////////////////////////////////////////////////////
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAI21cLjphfC8hDrY2YicqlWif0mhoITMM",
    authDomain: "cart-b0338.firebaseapp.com",
    projectId: "cart-b0338",
    storageBucket: "cart-b0338.appspot.com",
    messagingSenderId: "130897819142",
    appId: "1:130897819142:web:bffe0468101a01c838f587"
  };
/////////////////////////////////////////////////////////////////////////////
// Initialize Firebase - Web Namespaced API version
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
  
);


