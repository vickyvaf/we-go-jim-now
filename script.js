let body = document.body;
let header = document.getElementById('header');
let audio = document.getElementById('audio')

let restart = document.getElementById('restart');
restart.style.display = "none";

let darkBtn = document.getElementById('darkButton')
let zyzzBtn = document.getElementById('zyzzButton')

let counter = document.getElementById('counter');

let darkCount = document.getElementById('darkCounter')
darkCount.style.display = "none";

let darkRemaining = 10;
const darkLimit = 10;
let darkCounter = 0;

let zyzzCount = document.getElementById('zyzzCounter')
zyzzCount.style.display = "none";

let zyzzRemaining = 10;
const zyzzLimit = 10;
let zyzzCounter = 0;

let zyzz = document.getElementById('zyzz')
zyzz.style.display = "none"

function darkButton() {
    darkCounter = darkCounter + 1;
    darkRemaining = darkRemaining - 1;

    darkCount.style.display = "block";
    darkCount.textContent = darkRemaining;
    body.classList.toggle('darkMode');

    if (darkCounter % 2) {
        header.style.backgroundColor = "#3a3b3c";
    } else {
        header.style.backgroundColor = "cornsilk";
    }

    if (darkCounter == darkLimit || darkCounter > darkLimit) {
        body.style.backgroundColor = "whitesmoke"
        darkBtn.style.pointerEvents = "none";
        restart.style.display = "block"
    }
}

function zyzzMode() {
    console.log('zyzz mode')

    zyzzCounter = zyzzCounter + 1;
    zyzzRemaining = zyzzRemaining - 1;

    zyzzCount.style.display = "block";
    zyzzCount.textContent = zyzzRemaining;

    if (zyzzCounter % 2) {
        zyzz.style.display = "block";
    } else {
        zyzz.style.display = "none";
        audio.pause();
    }

    if (zyzzCounter == zyzzLimit || zyzzCounter > zyzzLimit) {
        zyzzBtn.style.pointerEvents = "none";
        restart.style.display = "block"
    }
}

