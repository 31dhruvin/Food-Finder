import firebase from 'firebase' 
const firebaseConfig = {
    apiKey: "AIzaSyB3kmZPkNqJNAT3hFce-rFgxdwoXrim61A",
    authDomain: "auth-cd203.firebaseapp.com",
    databaseURL: "https://auth-cd203-default-rtdb.firebaseio.com",
    projectId: "auth-cd203",
    storageBucket: "auth-cd203.appspot.com",
    messagingSenderId: "338269703246",
    appId: "1:338269703246:web:25cb53c43fa611bfb9871f"
  };
const fire =  firebase.initializeApp(firebaseConfig);
const db = fire.firestore()

export {fire,db}; 