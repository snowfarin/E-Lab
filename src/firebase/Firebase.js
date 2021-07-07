import firebase from 'firebase'
import { initializeApp } from "firebase/app";


const firebaseConfig = {

  //Bala

    // apiKey: "AIzaSyDPQu0XgugGYU3TRrNfaBol33jQpyvIAOw",
    // authDomain: "e-museum-378ca.firebaseapp.com",
    // projectId: "e-museum-378ca",
    // storageBucket: "e-museum-378ca.appspot.com",
    // messagingSenderId: "966638961965",
    // appId: "1:966638961965:web:284a2c57dbf587e0d43fa4"

    //e-lab
    
    // apiKey: "AIzaSyBNQbko2itI3H9kMeIVyVnI7elirPMtKaA",
    // authDomain: "e-lab-8615f.firebaseapp.com",
    // projectId: "e-lab-8615f",
    // storageBucket: "e-lab-8615f.appspot.com",
    // messagingSenderId: "526713578181",
    // appId: "1:526713578181:web:c322445acd954d94e946ac",
    // measurementId: "G-H13ZET5B1X"

    //e-lab-dummy

    apiKey: "AIzaSyDpmj7D6ratwa-0bxfvjidSlOXNSp66eOM",
    authDomain: "e-lab-dummy.firebaseapp.com",
    projectId: "e-lab-dummy",
    storageBucket: "e-lab-dummy.appspot.com",
    messagingSenderId: "1027607737272",
    appId: "1:1027607737272:web:7e1727334fe091613e554d",
    measurementId: "G-W016LEYDS5"
    
  };

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
const storage = firebase.storage();

export const storageRef = storage.ref()
export const imagesRef = storageRef.child('images/')

export const categoryRef = db.collection('Category')
export const contentRef = db.collection('Content') 