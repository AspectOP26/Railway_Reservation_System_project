
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";

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

const email = document.getElementById('email_field')
const password = document.getElementById('pass_field')

const submit = document.getElementById('sub-bt')

// login----------
// const auth = getAuth();

var userCred;
onAuthStateChanged(auth, (user) => {
    if (user == null) {
        logout_btn.style.display = "none";
        formBtn.style.display = "block"
        registerButton.style.display = "block"
        userCred = user;
    } else {
        logout_btn.style.display = "block";
        formBtn.style.display = "none";
        registerButton.style.display = "none";
    }
})

function loginUser() {
    console.log("called")

    signInWithEmailAndPassword(auth, email.value, password.value).then((user) => {
        // console.log(user.email);
        console.log("sign in success");
        location.href = "Dashboard.html";

    }).catch((error) => {
        console.log("login error");
    })
}
submit.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("working");
    loginUser();
});