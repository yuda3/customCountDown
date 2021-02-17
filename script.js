const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownFrom');
const dateEl = document.getElementById('date-picker');

//Set Date Input Min with Today' Date
const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min', today);