import firebase from "firebase";
const firebaseApp = firebase.initializeApp(
    {
        
            apiKey: "AIzaSyBviGhfQwMrijvFQWm2f4IEBieoB712tbM",
            authDomain: "sparksbank-81ff4.firebaseapp.com",
            projectId: "sparksbank-81ff4",
            storageBucket: "sparksbank-81ff4.appspot.com",
            messagingSenderId: "1048028019360",
            appId: "1:1048028019360:web:790f39e210f0bbde40a7c5"
          
    }
);
const db=firebase.firestore();
const auth=firebase.auth();
const storage = firebase.storage();

export { db, auth, storage}