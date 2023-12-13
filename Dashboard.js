// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";


const firebaseConfig = {
    apiKey: "AIzaSyC8G4sX0vyCF7EfV7lGjXFaDNV9y1hkBfY",
    authDomain: "railway-reservation-syst-23c14.firebaseapp.com",
    // databaseURL: "https://railway-reservation-syst-23c14-default-rtdb.firebaseio.com",
    projectId: "railway-reservation-syst-23c14",
    storageBucket: "railway-reservation-syst-23c14.appspot.com",
    messagingSenderId: "90240454932",
    appId: "1:90240454932:web:113abe5c15b405a1b93201"
};

import { getDatabase, ref }
    from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";

import { getFirestore, getDoc, setDoc, collection, doc, addDoc }
    from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js";
// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged }
    from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";

// const auth = getAuth();

// const db = getDatabase();

const fdb = getFirestore();

// const submit = document.getElementById('btn')

// const enqRef = await collection(fdb, "TrainDetail")
// const enq_data = await getDocs(enqRef);
// // var str = '';
// enq_data.docs.forEach((doc) => {


//     // console.log(doc.data()['Source']);
//     let Source = console.log(doc.data()['Source']);
//     console.log(doc.data()['Destiny']);
//     console.log(doc.data()['TrainName']);
//     console.log(doc.data()['FromDateTime']);
//     // console.log(doc.data()['days']);


//     // let From = document.getElementById('source').innerHTML = doc.data()["Source"];
//     // let To = document.getElementById('to').innerHTML = "To  " + doc.data()["Destiny"];
//     // let TrainName = document.getElementById('tn').innerHTML = doc.data()["TrainName"];
//     // let from = document.getElementById('From').innerHTML = doc.data()["Source"];
//     // let to = document.getElementById('To').innerHTML = doc.data()["Destiny"];
//     // });
// });
// reference
const SourceBox = document.getElementById('source');
const DestinationBox = document.getElementById('destination');
const NameBox = document.getElementById('tn');

const showtrain = document.getElementById('showtrain');

// getting document
async function GetADocument() {
    var ref = doc(fdb, "TrainDetail", Source.value);
    const docSnap = await getDoc(ref, {
        Destination: DestinationBox.value,
        Name: NameBox.value,
        Source: SourceBox.value,
    });

    if (docSnap.exists()) {
        NameBox.value = docSnap.data().TrainName;
        SourceBox.value = docSnap.data().Source;
        DestinationBox.value = docSnap.data().Destination;
    }

    else {
        alert("No Such Train");
    }
}

showtrain.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("working");
    GetADocument();

});

function train1() {

}
const train1 = document.getElementById("btn1");

train1.addEventListener("click", function (e) {

    window.location.href = "train(1).html";
    train1();
});
