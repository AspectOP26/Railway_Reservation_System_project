import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getFirestore, getDocs, setDoc, collection, doc, addDoc }
    from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyC8G4sX0vyCF7EfV7lGjXFaDNV9y1hkBfY",
    authDomain: "railway-reservation-syst-23c14.firebaseapp.com",
    databaseURL: "https://railway-reservation-syst-23c14-default-rtdb.firebaseio.com",
    projectId: "railway-reservation-syst-23c14",
    storageBucket: "railway-reservation-syst-23c14.appspot.com",
    messagingSenderId: "90240454932",
    appId: "1:90240454932:web:113abe5c15b405a1b93201"
};

import { getDatabase, ref }
    from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);


import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged }
    from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";

const auth = getAuth();

const db = getDatabase();

const fdb = getFirestore();

// reference 
// var paymentDB = firebase.database().ref("payment")

// document.getElementById("payment").addEventListener("submit", submitForm);


const name = document.getElementById('name')
const cardno = document.getElementById('cardno')
const expyear = document.getElementById('expyear')
const cvv = document.getElementById('cvv')
const type = document.getElementById('anyone')
const submit = document.getElementById('sub')

function submitForm() {
    // var savedmessage = (auth, enqMail.value, enqName.value, enqNum.value, enqSubBox.value, enqMessage.value, enqSubmit.value);

    console.log('working');

    onAuthStateChanged(auth, (user) => {

        addDoc(collection(fdb, 'Payment'), {
            name: name.value,
            cardno: cardno.value,
            expyear: expyear.value,
            cvv: cvv.value,
            method: type.value,
            // userId: user.uid,
            // currentTime: Date.now(),

        }).then((transfer) => {
            window.location.href = 'booking detail.html';
        })

    });


};

submit.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("working");
    submitForm();
});

