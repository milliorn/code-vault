/*
OBJECTS

Nested Objects

In application code, objects are often nested— an object might have another object as a property which in turn could have a property that’s an array of even more objects!

In our spaceship object, we want a crew object. This will contain all the crew members who do important work on the craft. Each of those crew members are objects themselves. They have properties like name, and degree, and they each have unique methods based on their roles. We can also nest other objects in the spaceship such as a telescope or nest details about the spaceship’s computers inside a parent nanoelectronics object.
*/

const spaceship = {
    telescope: {
        yearBuilt: 2018,
        model: '91031-XLT',
        focalLength: 2032 
    },
    crew: {
        captain: { 
            name: 'Sandra', 
            degree: 'Computer Engineering', 
            encourageTeam() { console.log('We got this!') } 
        }
    },
    engine: {
        model: 'Nimbus2000'
    },
    nanoelectronics: {
        computer: {
            terabytes: 100,
            monitors: 'HD'
        },
        'back-up': {
           battery: 'Lithium',
           terabytes: 50
        }
    }
}; 

/*
We can chain operators to access nested properties. We’ll have to pay attention to which operator makes sense to use in each layer. It can be helpful to pretend you are the computer and evaluate each expression from left to right so that each operation starts to feel a little more manageable.
*/

spaceship.nanoelectronics['back-up'].battery; // Returns 'Lithium'

/*
In the preceding code:

First the computer evaluates spaceship.nanoelectronics, which results in an object containing the back-up and computer objects.
We accessed the back-up object by appending ['back-up'].
The back-up object has a battery property, accessed with .battery which returned the value stored there: 'Lithium'
*/


let spaceship = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    backup: {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 

const capFave = spaceship.crew.captain['favorite foods'][0];

//	Right now the passengers property has a value of null. Instead, assign as its value an array of objects. These objects should represent the spaceships passengers as individual objects. Make at least one passenger object in the array that has at least one key-value pair on it.
spaceship.passengers = [{passA: 'Space Dogs'}]

//	Create a variable firstPassenger and assign the first passenger as its value (the element in the 0th index of the spaceship.passengers array you just made). Make sure to use bracket and dot notation to get the passenger object through nested access (dont just copy the object into the variable!)
const firstPassenger = spaceship.passengers[0];
