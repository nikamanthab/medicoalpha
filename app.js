const express = require("express");
const app = express();
const router = require('./router.js');
var firebase = require('firebase');

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAyrvDkdNJ9rkx_qi6e5qjM7rFaQZCJpKs",
    authDomain: "medicoalpha-ebc77.firebaseapp.com",
    databaseURL: "https://medicoalpha-ebc77.firebaseio.com",
    projectId: "medicoalpha-ebc77",
    storageBucket: "medicoalpha-ebc77.appspot.com",
    messagingSenderId: "112699513342",
    appId: "1:112699513342:web:9f6952cc53c9b144"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

router({
    app,
    firebase
});

app.listen(3000);