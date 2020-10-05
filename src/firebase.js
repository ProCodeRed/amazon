import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        apiKey: "AIzaSyC8O490cyoBxoafq3wcAyrVI3BKU2oXXcg",
        authDomain: "fir-6ed40.firebaseapp.com",
        databaseURL: "https://fir-6ed40.firebaseio.com",
        projectId: "fir-6ed40",
        storageBucket: "fir-6ed40.appspot.com",
        messagingSenderId: "734638750491",
        appId: "1:734638750491:web:3e699ef24dac05aeb4b1be",
        measurementId: "G-63HP27X4CG"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };