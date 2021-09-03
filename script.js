let userQuestion = document.querySelector("#userAsk");
let btnPlay = document.querySelector("#btn-play");
let dispAnswer = document.querySelector("#dispAns");
let btnReset = document.querySelector("#btn-reset");
let hideSeek = document.querySelector(".user-reply");

hideSeek.style.visibility = "hidden";


// Function for the main logic of the game
function findAnswer(choiceResponse) {

   if (choiceResponse <= 50) {
      return ("It is certain");
   } else if (choiceResponse <= 100) {
      return ('It is decidedly so')
   } else if (choiceResponse <= 150) {
      return ("Without a doubt")
   } else if (choiceResponse <= 200) {
      return ("Yes - definitely")
   } else if (choiceResponse <= 250) {
      return ('You may rely on it')
   } else if (choiceResponse <= 300) {
      return ("As I see it, yes")
   } else if (choiceResponse <= 350) {
      return (" Most Likely")
   } else if (choiceResponse <= 400) {
      return ('Outlook good')
   } else if (choiceResponse <= 450) {
      return ("Yes")
   } else if (choiceResponse <= 500) {
      return ("Signs point to yes")
   } else if (choiceResponse <= 550) {
      return ('Reply hazy, try again')
   } else if (choiceResponse <= 600) {
      return ("Ask again later")
   } else if (choiceResponse <= 650) {
      return (" Better not to tell you now")
   } else if (choiceResponse <= 700) {
      return ('Cannot predict now')
   } else if (choiceResponse <= 750) {
      return ("Concentrate and ask again")
   } else if (choiceResponse <= 800) {
      return ("Don't count on it")
   } else if (choiceResponse <= 850) {
      return ('My reply is no')
   } else if (choiceResponse <= 900) {
      return ("My sources say no")
   } else if (choiceResponse <= 950) {
      return ("Outlook not so good")
   } else if (choiceResponse <= 1000) {
      return ("Very doubtful")
   } else {
      return ('Ask another question, keep playing');
   }
}


// Click Handler = playClick 
function playClick() {

   if (userQuestion.value.trim() == "") {
      alert("Please write a question")
   } else {
      hideSeek.style.visibility = "visible";
      let userChoice = (Math.random()) * 1000;
      let showAnswer = findAnswer(userChoice);
      dispAnswer.innerText = showAnswer;
   }
}

btnPlay.addEventListener("click", playClick);

// Reset Button
function resetGame() {
   console.log("Reset button clicked");
   hideSeek.style.visibility = "hidden";

   userQuestion.value = null;
   dispAnswer.innerText = null;
}

btnReset.addEventListener("click", resetGame);