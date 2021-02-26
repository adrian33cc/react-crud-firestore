import firebase from 'firebase/app'
import 'firebase/firestore';

 // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
        apiKey: "AIzaSyDPYbADmby3veEXMcAea09mzhBrkmjbU6Q",
        authDomain: "mi-primer-api-87789.firebaseapp.com",
        databaseURL: "https://mi-primer-api-87789-default-rtdb.firebaseio.com",
        projectId: "mi-primer-api-87789",
        storageBucket: "mi-primer-api-87789.appspot.com",
        messagingSenderId: "64594749938",
        appId: "1:64594749938:web:6a3241a6072dba8871236b",
        measurementId: "G-7DVF3JERQ1",
    };
    // Initialize Firebase
    //firebase.initializeApp(firebaseConfig);

/* // Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA-7rQH4HA1DC0yUpHAhEY1sYKaatPJMNQ",
  authDomain: "react-firebase-crud-2d065.firebaseapp.com",
  databaseURL: "https://react-firebase-crud-2d065.firebaseio.com",
  projectId: "react-firebase-crud-2d065",
  storageBucket: "react-firebase-crud-2d065.appspot.com",
  messagingSenderId: "366113496238",
  appId: "1:366113496238:web:01c48c92a222813521613f",
}; */
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();