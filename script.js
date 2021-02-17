const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownFrom');
const dateEl = document.getElementById('date-picker');

let countdownTitle = '';
let countdownDate = '';

//Set Date Input Min with Today' Date
const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min', today);

//Take Values from Form Input
function updateCountdown(e) {
    e.preventDefault();
    countdownTitle = e.target[0].value;
    countdownDate = e.target[1].value;
    console.log(countdownTitle, countdownDate);
}

//Event Listeners
countdownForm.addEventListener('submit', updateCountdown);