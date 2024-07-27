/*
    We’ve created a devious treasure hunt for you!
    Your task is to use fs.readFile()
    to figure out the secret word and assign that value to the secretWord variable in app.js.
    Here’s your first clue, found scratched into walls of an abandoned castle: fileOne.txt.
*/
const fs = require('fs');

let secretWord = null;

let readDataCallback = (err, data) => {
    if (err) {
        console.log(`Something went wrong: ${err}`);
    } else {
        console.log(`Provided file contained: ${data}`);
    }
};

//fs.readFile('./fileOne.txt', 'utf-8', readDataCallback);
//fs.readFile('./anotherFile.txt', 'utf-8', readDataCallback);
fs.readFile('./finalFile.txt', 'utf-8', readDataCallback);

secretWord = "cheeseburgerpizzabagels"