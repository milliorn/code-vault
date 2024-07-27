/*
OBJECTS

Property Assignment

Once we’ve defined an object, we’re not stuck with all the properties we wrote. Objects are mutable meaning we can update them after we create them!

We can use either dot notation, ., or bracket notation, [], and the assignment operator, = to add new key-value pairs to an object or change an existing property.


One of two things can happen with property assignment:

If the property already exists on the object, whatever value it held before will be replaced with the newly assigned value.

If there was no property with that name, a new property will be added to the object.

It’s important to know that although we can’t reassign an object declared with const, we can still mutate it, meaning we can add new properties and change the properties that are there.
*/

const spaceship = {type: 'shuttle'};
spaceship = {type: 'alien'}; // TypeError: Assignment to constant variable.
spaceship.type = 'alien'; // Changes the value of the type property
spaceship.speed = 'Mach 5'; // Creates a new key of 'speed' with a value of 'Mach 5'

//You can delete a property from an object with the delete operator.

const spaceship = {
  'Fuel Type': 'Turbo Fuel',
  homePlanet: 'Earth',
  mission: 'Explore the universe' 
};

delete spaceship.mission;  // Removes the mission property

/*
*/


let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

// Write your code below

//Reassign the color property of the spaceship object to have a value of 'glorious gold'
spaceship.color = 'glorious gold';

//Without changing lines 1 - 6, add a numEngines property with a numeric value between 1 and 10 to the spaceship object.
spaceship.numEngines = 10;

//Use the delete operator to remove the 'Secret Mission' property from the spaceship object.
delete spaceship['Secret Mission'];
