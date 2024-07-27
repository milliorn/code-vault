/*
OBJECTS

Accessing Properties

There are two ways we can access an object’s property. Let’s explore the first way— dot notation, ..

You’ve used dot notation to access the properties and methods of built-in objects and data instances:
*/

'hello'.length; // Returns 5

/*
With property dot notation, we write the object’s name, followed by the dot operator and then the property name (key):
*/

let spaceship = {
  homePlanet: 'Earth',
  color: 'silver'
};
spaceship.homePlanet; // Returns 'Earth',
spaceship.color; // Returns 'silver',


//If we try to access a property that does not exist on that object, undefined will be returned.

spaceship.favoriteIcecream; // Returns undefined

/*
*/


let spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};

// Write your code below

/* Lets use the dot operator to access the value of numCrew from the spaceship object in the code editor. Create a variable crewCount and assign the spaceships numCrew property to it.
*/
const crewCount = spaceship.numCrew;

/*
Again using the dot operator, create a variable planetArray and assign the spaceships flightPath property to it.
*/
const planetArray = spaceship.flightPath;
