import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

/*
Add a title constant that will hold the value of the title.
For now, set its value to an empty string.
*/
const title = "";

/*
Create a showBackground constant. You can set its value to either true or false.
If showBackground is true, background should show up.
If it’s false, it should not. Use the && operator in animalFacts to implement this feature.
/*/
const showBackground = true;

/*
Create a constant named background.
Set its value to a <img /> element.
*/
const background = (
    <img
        src='/images/ocean.jpg'
        alt='ocean'
        className='background'
    />
);

/*
Use a for..in loop to iterate over the animals object that we’re importing line 1.
For each animal, add a new <img /> to the images array.
*/
let images = [];

for (const animal in animals) {
    images.push(
        <img
            key={animal}
            className='animal'
            alt={animal}
            src={animals[animal].image}
            ariaLabel={animal}
            role='button'
            onClick={displayFact}
        />
    );
}

/*
Create an animalFacts constant to hold the JSX expression that we’ll want to be compiled.
Set its value to a <h1> element that contains our title.
Now that we have our array of images, let’s inject it into the JSX expression.

Underneath {background}, create a <div>.
Give it a className attribute and set it equal to 'animals'.
Nest the array of images inside of this element.

Create a <p> element in animalFacts and give it an id attribute equal to 'fact'.
*/
const animalFacts = (
    <div>
        <h1>{title == "" ? "Click an animal for a fun fact." : title}</h1>
        {showBackground &&  background}
        <div className='animals'>
            {images}
        </div>
        <p id='fact' />
    </div>
);

/*
Create a function displayFact() that takes one argument e, the event target.
It should pick a random fun fact based on the selected animal.
Remember the alt tags of each image match the property names in the animals object.
*/
function displayFact(e) {
    const facts = animals[e.target.alt].facts;
    const rand = Math.floor(Math.random() * facts.length)
    const fact = animals[e.target.alt].facts[rand];

    document.getElementById("fact").innerHTML = fact;
}

/*
It’s time to write our ReactDOM.render() method.
Let’s pass in animalFacts as the JSX expression that we want to be compiled and rendered.
*/
ReactDOM.render(animalFacts, document.getElementById('root'));

