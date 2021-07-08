import firebase from "firebase/app"; //This resides in our node-modules
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
}).auth();