const sizes = document.querySelectorAll('.size');
const colors = document.querySelectorAll('.color');
const venues = document.querySelectorAll('.venue');
const gradients = document.querySelectorAll('.gradient');
const venueBg = document.querySelector('.venueBackground');

let prevColor = "blue";
let animationEnd = true;

function changeSize(){
    sizes.forEach(size => size.classList.remove('active'));
    this.classList.add('active');
}

function changeColor(){
    if(!animationEnd) return;
    let primary = this.getAttribute('primary');
    let color = this.getAttribute('color');
    let venue = document.querySelector(`.venue[color="${color}"]`);
    let gradient = document.querySelector(`.gradient[color="${color}"]`);
    let prevGradient = document.querySelector(`.gradient[color="${prevColor}"]`);

    if(color == prevColor) return;

    colors.forEach(c => c.classList.remove('active'));
    this.classList.add('active');

    document.documentElement.style.setProperty('--primary', primary);
    
    venues.forEach(s => s.classList.remove('show'));
    venue.classList.add('show');

    gradients.forEach(g => g.classList.remove('first', 'second'));
    gradient.classList.add('first');
    prevGradient.classList.add('second');

    prevColor = color;
    animationEnd = false;

    gradient.addEventListener('animationend', () => {
        animationEnd = true;
    })
}

sizes.forEach(size => size.addEventListener('click', changeSize));
colors.forEach(c => c.addEventListener('click', changeColor));

let x = window.matchMedia("(max-width: 1000px)");

function changeHeight(){
    if(x.matches){
        let venueHeight = venues[0].offsetHeight;
        venueBg.style.height = `${venueHeight * 0.9}px`;
    }
    else{
        venueBg.style.height = "475px";
    }
}

changeHeight();

window.addEventListener('resize', changeHeight);