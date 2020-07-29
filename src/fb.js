import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCEbkKsm9goQKR32Rrfbz7je1PBdnbZAYo",
    authDomain: "learnshala-6b0b4.firebaseapp.com",
    databaseURL: "https://learnshala-6b0b4.firebaseio.com",
    projectId: "learnshala-6b0b4",
    storageBucket: "learnshala-6b0b4.appspot.com",
    messagingSenderId: "8752636854",
    appId: "1:8752636854:web:072e1f4139d68e732e5717",
    measurementId: "G-0DM94KE4LM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const db = firebase.firestore();

// db.settings({ timestampsInSnapshots: true });

export default db;