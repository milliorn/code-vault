/*
The user should be able to choose ‘rock’, ‘paper’, or ‘scissors’ when the game starts.
Using const and arrow function syntax, create a function named getUserChoice that takes a single parameter userInput.

Since a user can pass in a parameter, such as ‘Rock’ or ‘rock’ with different capitalizations, 
begin by utilizing JavaScript’s toLowerCase() function to make the userInput all lowercase.

When getting the user’s choice, you should also check to make sure that the user typed a valid choice: ‘rock’, ‘paper’, or ‘scissors’.
Inside getUserChoice(), write an if/else statement that makes sure the userInput is either 'rock', 'paper', or 'scissors'. 
If it does, then return the userInput. If not, use console.log to print an error message to the console.

Test the function by calling it with valid and invalid input, and printing the results to the console.

Create a new function named getComputerChoice with no parameters. 
Inside its block, utilize Math.random() and Math.floor() to get a whole number between 0 and 2. 
Then, depending on the number, return either 'rock', 'paper', or 'scissors'.

Test the function by calling it multiple times and printing the results to the console.

Create a function named determineWinner that takes two parameters named userChoice and computerChoice. 
This function will compare the two choices played and then return if the human player won, lost, or tied.
Let’s deal with the tie condition first. 
Within the determineWinner() function, write an if statement that checks if the userChoice parameter equals the computerChoice parameter. 
If so, return a string that the game was a tie.

Begin by writing an if statement that checks if the userChoice is 'rock'. 
Inside the if statement’s block, write another if/else statement. 
The inner if/else should check if the computerChoice is 'paper'. 
If so, return a message that the computer won. If not, return a message that the user won.

Next, write another if statement for if the userChoice is 'paper'.
Inside this if statement, the computerChoice must be either 'scissors' or 'rock'. Write logic that will return a winner.


Next, write yet another if statement for if the userChoice is 'scissors'.
Inside of this if statement, the computerChoice must either be 'rock' or 'paper'. Write logic that will return a winner.

Create a function named playGame.
Inside the playGame() function, create a variable named userChoice set equal to the result of calling getUserChoice(), passing in either 'rock', 'paper', or 'scissors' as an argument.
Create another variable named computerChoice, and set it equal to the result of calling getComputerChoice().
Under both of these variables, use console.log to print them to the console.

Inside the playGame() function, call the determineWinner() function. Pass in the userChoice and computerChoice variables as its parameters. Make sure to put this function call inside of a console.log() statement so you can see the result.
Then, to start the game, call the playGame() function on the last line of your program.
*/

const getUserChoice = (userInput) => {
	userInput = userInput.toLowerCase();
	switch (userInput) {
		case "rock":
		case "paper":
		case "scissors":
		case "bomb":
			return userInput;
		default:
			console.log("ERROR! - userInput");
			break;
	}
};

const getComputerChoice = () => {
	const randomNumber = Math.floor(Math.random() * 3);

	switch (randomNumber) {
		case 0:
			return "rock";
		case 1:
			return "paper";
		case 2:
			return "scissors";
		default:
			return "ERROR! - randomNumber";
	}
};

const determineWinner = (userChoice, computerChoice) => {
	if (userChoice === "bomb") {
		return "You win!";
	} else if (userChoice === computerChoice) {
		return "Tie!";
	} else if (userChoice === "rock" && computerChoice === "paper") {
		return "You lose!";
	} else if (userChoice === "paper" && computerChoice === "scissors") {
		return "You lose!";
	} else if (userChoice === "scissors" && computerChoice === "rock") {
		return "You lose!";
	} else {
		return "You win!";
	}
};

function playGame() {
	const userChoice = getUserChoice("bomb");
	const computerChoice = getComputerChoice();
	console.log(`User: ${userChoice}`);
	console.log(`PC: ${computerChoice}`);
	console.log(determineWinner(userChoice, computerChoice));
}

playGame();
