/*
SCOPE

Global Scope

Scope is the context in which our variables are declared. We think about scope in relation to blocks because variables can exist either outside of or within these blocks.

In global scope, variables are declared outside of blocks. These variables are called global variables. Because global variables are not bound inside a block, they can be accessed by any code in the program, including code in blocks.

Let’s take a look at an example of global scope:
*/

const color = 'blue'

const returnSkyColor = () => {
  return color; // blue 
};

console.log(returnSkyColor()); // blue

/*
Even though the color variable is defined outside of the block, it can be accessed in the function block, giving it global scope.

In turn, color can be accessed within the returnSkyColor function block.
*/

const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

const callMyNightSky = () => {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log(callMyNightSky());
