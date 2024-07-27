/*
    Read through the code and try to figure out what has been done and what is left to do to make this an
    interactive command line program (game.js includes the core game logic, but reading through it is optional).
*/
let { testNumber } = require('./game.js');

process.stdout.write("I'm thinking of a number from 1 through 10. What do you think it is? \n(Write \"quit\" to give up.)\n\nIs the number ... ");

let playGame = (userInput) => {
    let input = userInput.toString().trim();
    testNumber(input);
};

process.stdin.on('data', playGame);