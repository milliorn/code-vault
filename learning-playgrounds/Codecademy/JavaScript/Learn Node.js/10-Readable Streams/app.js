const readline = require('readline');
const fs = require('fs');

/*
    Create a myInterface variable.
    Assign myInterface the value returned from invoking readline.createInterface().
    You’ll want to invoke readline.createInterface()
    with an object with a key of input and a value of fs.createReadStream().
    Remember that fs.createReadStream()
    expects the file (as a string) from which it should read.

    Let’s create a listener callback function to use in the next step.
    Name this function printData. printData() should expect to receive some data
    (we named our parameter data)
    and it should log that data to the console in the format: Item: [data], where [data]
    is the argument passed into the function.

    We’re nearly there! Remember that a 'line' event will be emitted after each line from the file is read.
    Let’s assign our printData()
    function to execute whenever a 'line' event is emitted by using myInterface‘s .on() method.
*/
const myInterface = readline.createInterface({
    input: fs.createReadStream('shoppingList.txt')
});

function printData(data) {
    console.log("Item: " + [data]);
}

myInterface.on('line', printData);