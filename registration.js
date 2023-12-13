
// Import the functions you need from the SDKs you need



const firebaseConfig = {
    apiKey: "AIzaSyC8G4sX0vyCF7EfV7lGjXFaDNV9y1hkBfY",
    authDomain: "railway-reservation-syst-23c14.firebaseapp.com",
    projectId: "railway-reservation-syst-23c14",
    storageBucket: "railway-reservation-syst-23c14.appspot.com",
    messagingSenderId: "90240454932",
    appId: "1:90240454932:web:113abe5c15b405a1b93201"
};

// import { getDatabase, ref }
//     from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);


import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged }
    from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getFirestore, getDocs, setDoc, collection, doc, addDoc }
    from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js";

const auth = getAuth();

// const db = getDatabase();

const fdb = getFirestore();

// const name = document.getElementById('name')
const name = document.getElementById('nav')
const email = document.getElementById('emailid')
const pass = document.getElementById('pass')
const phone = document.getElementById('pm')
const address = document.getElementById('add')
const dob = document.getElementById('dob')
const Gender = document.getElementById('gen')

const submit = document.getElementById('sub_btn')

// onAuthStateChanged(auth, (user) => {
//     console.log(user.Email);
// })

var userUid
onAuthStateChanged(auth, (user) => {
    console.log(user.uid);   // iske wajhe se dera tha lagta error
    userUid = user.uid;
    console.log(userUid);
})
console.log(userUid);

function RegisterUser() {
    // const dbRef = ref(fdb);
    // console.log(email, pass);
    createUserWithEmailAndPassword(auth, email.value, pass.value, name.value, phone.value, address.value, dob.value, Gender.value).then((userCred) => {

        const user_ref = setDoc(doc(fdb, 'Users', userCred.user.uid), {
            username: name.value,
            email: email.value,
            phone: phone.value,
            address: address.value,
            dob: dob.value,
            Gender: Gender.value,

        }).then((tp) => {
            location.href = "Dashboard.html";

        })
    }).catch((error) => {
        console.log("error")
        alert("Invalid Credentials")
        console.log(error);
    });

}


// calling register function 


submit.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("working");
    RegisterUser();
});

// }

// function validation(){
//     var phone = document.getElementById('pm').value;

//     var regx = /[7-9\d{9}]/;
// }
// localStorage.setItem("gen", gender);

// var na = "sai";
// localStorage.setItem("naam", na);