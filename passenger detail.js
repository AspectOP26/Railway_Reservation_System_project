
// Import the functions you need from the SDKs you need


const firebaseConfig = {
    apiKey: "AIzaSyC8G4sX0vyCF7EfV7lGjXFaDNV9y1hkBfY",
    authDomain: "railway-reservation-syst-23c14.firebaseapp.com",
    databaseURL: "https://railway-reservation-syst-23c14-default-rtdb.firebaseio.com",
    projectId: "railway-reservation-syst-23c14",
    storageBucket: "railway-reservation-syst-23c14.appspot.com",
    messagingSenderId: "90240454932",
    appId: "1:90240454932:web:113abe5c15b405a1b93201"
};

const app = initializeApp(firebaseConfig);

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getFirestore, getDocs, setDoc, collection, doc, addDoc }
    from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged }
    from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";

const auth = getAuth();

// const db = getDatabase();

const fdb = getFirestore();

// import { getDatabase, ref }
//     from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// 
// const fdb = getFirestore();

//ref for db//

// var PassengerDB = firebase.database().ref("Passengerpg");

const submit = document.getElementById('btn')
const Name = document.getElementById('nav')
const Emailid = document.getElementById('mail')
const Phone = document.getElementById('Phone')
const Address = document.getElementById('add')
const DOB = document.getElementById('date')
const Gender = document.getElementById('gen')

// 
async function submitForm() {
    // var savedmessage = (auth, enqMail.value, enqName.value, enqNum.value, enqSubBox.value, enqMessage.value, enqSubmit.value);

    console.log('working');

    onAuthStateChanged(auth, (user) => {
        if (user != null) {
            addDoc(collection(fdb, 'passengerdetails'), {
                Name: Name.value,
                Emailid: Emailid.value,
                Phone: Phone.value,
                Address: Address.value,
                DOB: DOB.value,
                Gender: Gender.value,
                // currentTime: Date.now(),
                // username: username.value,

            }).then((transfer) => {
                window.location.href = 'Payment.html';
            })
        }
    })

}

submit.addEventListener("click", (event) => {

    localStorage.setItem("gen", Gender.value);
    localStorage.setItem("nav", Name.value)
    localStorage.setItem("date", DOB.value)
    event.preventDefault();
    console.log("working");
    submitForm();

});