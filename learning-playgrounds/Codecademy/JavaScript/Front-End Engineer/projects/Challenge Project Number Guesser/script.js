let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);

/* jshint laxbreak: true */
const compareGuesses = (user, computer, target) =>
  user > 9
    ? alert("Choose a number between 0-9")
    : Math.abs(target - user) <= Math.abs(target - computer);

const updateScore = (winner) =>
  winner === "human" ? humanScore++ : computerScore++;

const advanceRound = () => currentRoundNumber++;

updateScore("human");
console.log(humanScore); // To confirm that this value increased by 1
updateScore("computer");
console.log(computerScore); // To confirm that this value increased by 1
