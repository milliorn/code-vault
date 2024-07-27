/*
INTRODUCTION TO JAVASCRIPT

Rock, Paper, or Scissors

Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.

The possible outcomes are:

Rock destroys scissors.

Scissors cut paper.

Paper covers rock.

If there’s a tie, then the game ends in a draw.


Our code will break the game into four parts:

Get the user’s choice.

Get the computer’s choice.

Compare the two choices and determine a winner.

Start the program and display the results.
*/

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('ERROR! - userInput');
  }
};

const getComputerChoice = () => { 
  const randomNumber = Math.floor(Math.random() * 3);
	
  switch (randomNumber) {
    case 0: return 'rock';
    case 1: return 'paper';
    case 2: return 'scissors';
    default: return 'ERROR! - randomNumber';
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') return 'You win!';  
  if (userChoice === computerChoice) return 'Tie!';
  
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return "You lose!";
    } else {
      return "You win!";
    }
  }
  
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return "You lose!";
    } else {
      return "You win!";
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return "You lose!";
    } else {
      return "You win!";
    }
  }
}

function playGame() {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log(`User: ${userChoice}`);
  console.log(`PC: ${computerChoice}`);
  
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
