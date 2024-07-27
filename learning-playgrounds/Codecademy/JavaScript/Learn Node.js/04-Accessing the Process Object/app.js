/*
    Great! Now our Dog and Cat classes are being exported,
    but we still need to require them into app.js for our function to work properly.
    At the top of the app.js file,
    create a variable Dog and assign as its value invoking the require()
    function with the relative path of the dog.js file.
    Next, create a Cat variable and assign as its value invoking the require()
    function with the relative path of the cat.js file.
*/
// Require modules in:
const Dog = require('./dog.js');
const Cat = require('./cat.js');

let fight = (dog, cat) => {
    if (dog.toothStrength > cat.clawStrength) {
        console.log(`${dog.name} wins!`);
    }
    else if (dog.toothStrength < cat.clawStrength) {
        console.log(`${cat.name} wins!`);
    }
    else {
        console.log(`${dog.name} and ${cat.name} are equally skilled fighters!`);

    }
}

const myDog = new Dog('Rex', Math.random());
const myCat = new Cat('Tabby', Math.random());

fight(myDog, myCat);