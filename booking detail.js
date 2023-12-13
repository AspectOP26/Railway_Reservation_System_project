// console.log(Math.floor(100000 + Math.random() * 900000));

var PNR = Math.floor(Math.random() * 1000000000) + 1;

console.log(PNR);
localStorage.setItem("PNR", PNR);

// 
var seat = Math.floor(Math.random() * 82) + 1;

console.log(seat);
localStorage.setItem("Seat", seat);

// 
// var coach = Math.floor(Math.random() * M) + A;
// console.log(coach);

// 
document.getElementById("passengername").innerHTML = "Name: " + localStorage.getItem("nav");
document.getElementById("dob").innerHTML = "DOB: " + localStorage.getItem("date");
// 
document.getElementById("time").innerHTML = "Time: " + localStorage.getItem("Time");
document.getElementById("day").innerHTML = "Date: " + localStorage.getItem("Day");
// 
document.getElementById("pnr").innerHTML = "PNR: " + localStorage.getItem("PNR");
document.getElementById("seat").innerHTML = "Seat: " + localStorage.getItem("Seat");
// 
document.getElementById("gender").innerHTML = "Gender: " + localStorage.getItem("gen")


// pdf
function generatePDF() {
    const print = document.getElementById('ticket airline');

    html2pdf()
        .from(print)
        .save();
}