const firebaseConfig = {
    apiKey: "AIzaSyC8G4sX0vyCF7EfV7lGjXFaDNV9y1hkBfY",
    authDomain: "railway-reservation-syst-23c14.firebaseapp.com",
    databaseURL: "https://railway-reservation-syst-23c14-default-rtdb.firebaseio.com",
    projectId: "railway-reservation-syst-23c14",
    storageBucket: "railway-reservation-syst-23c14.appspot.com",
    messagingSenderId: "90240454932",
    appId: "1:90240454932:web:113abe5c15b405a1b93201"
};

// initialized firebase
firebase.initializeApp(firebaseConfig);

//ref ur db
var contactformDB = firebase.database().ref("contactform")

document.getElementById("contactform").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgcontent = getElementVal("msgcontent");

    saveMessages(name, emailid, msgcontent);

    //enable alert
    document.querySelector('.alert').style.display = "block";

    // remove the alert
    setTimeout(() => {
        document.querySelector('.alert').style.display = "none";
    }, 2000);

    // reset the form
    document.getElementById("contactform").reset();
}
const saveMessages = (name, emailid, msgcontent) => {
    var newContactform = contactformDB.push();

    newContactform.set({
        name: name,
        emailid: emailid,
        msgcontent: msgcontent,


    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;

};