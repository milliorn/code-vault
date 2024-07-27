/*
    We want the program in app.js to store the starting amount of memory used (heapUsed),
    perform an operation, and then compare the final amount of memory used to the original amount.
    Right now, the initialMemory variable is assigned to null.
    Change this line, so that initialMemory is instead assigned the value of the heapUsed property
    on the object returned from invoking the process.memoryUsage() method.

    We want the user of the program to be able to fill in their own word when they run the program.
    Right now word is assigned to null.
    Change the program so that when a user initiates the program with an additional command line argument,
    word will be assigned that value.
    For example, running the program with the command: node app.js Codecademy would result in word being
    assigned the value 'Codecademy'
*/
let initialMemory = process.memoryUsage().heapUsed;
let word = process.argv[2];

console.log(`Your word is ${word}`)

// Create a new array
let wordArray = [];

// Loop 1000 times, pushing into the array each time
for (let i = 0; i < 1000; i++) {
    wordArray.push(`${word} count: ${i}`)
}

console.log(`Starting memory usage: ${initialMemory}. \nCurrent memory usage: ${process.memoryUsage().heapUsed}. \nAfter using the loop to add elements to the array, the process is using ${process.memoryUsage().heapUsed - initialMemory} more bytes of memory.`)

