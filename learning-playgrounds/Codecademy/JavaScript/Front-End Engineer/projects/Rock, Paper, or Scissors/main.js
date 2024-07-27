const getUserChoice = () => {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      console.error("default reached");
  }
};

const getComputerChoice = () => {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      console.error("default reached");
  }
};

const determineWinner = (userChoice, computerChoice) => {
  switch (userChoice) {
    case computerChoice:
      return "Game is a tie.";
    case "rock":
      return computerChoice === "paper" ? "You lose." : "You win.";
    case "paper":
      return computerChoice === "scissors" ? "You lose." : "You win.";
    case "scissors":
      return computerChoice === "rock" ? "You lose." : "You win.";
    default:
      console.error("default reached");
  }
};

const playGame = () => determineWinner(getUserChoice(), getComputerChoice());

console.log(playGame());
