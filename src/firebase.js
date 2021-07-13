import firebase from "firebase/app"; //This resides in our node-modules
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDlqzpCvFaR7bbt4Qhw-lxL1cJN-0YwXmw",
    authDomain: "hermes-chat-bd155.firebaseapp.com",
    projectId: "hermes-chat-bd155",
    storageBucket: "hermes-chat-bd155.appspot.com",
    messagingSenderId: "988229124368",
    appId: "1:988229124368:web:1bc361347d29f828922595"
  }).auth();