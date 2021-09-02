let userQuestion = document.querySelector("#userAsk");
let userChoice = document.querySelector("#userResponse");
let btnPlay = document.querySelector("#btn-play");
let dispQuestion = document.querySelector("#dispAsk");
let dispAnswer = document.querySelector("#dispAns");








// Click Handler = playClick 
function playClick() {
    dispQuestion.innerText = userQuestion.value;



}



btnPlay.addEventListener("click", playClick);