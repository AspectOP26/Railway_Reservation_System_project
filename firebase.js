
// Import the functions you need from the SDKs you need
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

// const name = document.getElementById('name')
const name = document.getElementById('nav')
const email = document.getElementById('emailid')
const pass = document.getElementById('pass')
const phone = document.getElementById('pm')
const address = document.getElementById('add')
const dob = document.getElementById('dob')
// const Gender = document.getElementById('gen')

const submit = document.getElementById('sub_btn')

// onAuthStateChanged(auth, (user) => {
//     console.log(user.Email);
// })

function RegisterUser() {
    // const dbRef = ref(fdb);
    // console.log(email, pass);
    createUserWithEmailAndPassword(auth, email.value, pass.value, name.value, phone.value, address.value, dob.value).then((userCred) => {

        const user_ref = setDoc(doc(fdb, 'users', userCred.user.uid), {
            username: name.value,
            email: email.value,
            phone: phone.value,
            pass: pass.value,
            address: address.value,
            dob: dob.value,
            // Gender: Gender.value,
            // gender: gender.value
            // male: male.value,
            // female: female.value

        })

    }).then((tp) => {
        location.href = "Dashboard.html";
    }).catch((error) => {
        console.log("error")
        alert("Invalid Credentials")
        console.log(error);
    });

}


// calling register function 


submit.addEventListener("click", (event) => {


localStorage.setItem("nav", name.value)
localStorage.setItem("emailid", email.value)
localStorage.setItem("pass", pass.value)
localStorage.setItem("pm", phone.value)
localStorage.setItem("add", address.value)
    event.preventDefault();
    console.log("working");
    RegisterUser();
});

// }

// function validation(){
//     var phone = document.getElementById('pm').value;

//     var regx = /[7-9\d{9}]/; yeg konsa hai bhai??
// ye trail waala hai.........okokokokokokkokokokok
// }


// var na = "sai";
// localStorage.setItem("naam", na);

//  localStorage


// var nameloc = name.value;

// var a = 420;
// console.log(a)

// localStorage.setItem("emailid", email.value)
// localStorage.setItem("pass", pass.value)
// localStorage.setItem("pm", phone.value)
// localStorage.setItem("add", address.value)


// abh check kar 