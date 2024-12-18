/*
SCOPE

Block Scope

The next context we’ll cover is block scope. When a variable is defined inside a block, it is only accessible to the code within the curly braces {}. We say that variable has block scope because it is only accessible to the lines of code within that block.

Variables that are declared with block scope are known as local variables because they are only available to the code that is part of the same block.

Block scope works like this:
*/

const logSkyColor = () => {
  let color = 'blue'; 
  console.log(color); // blue 
};

logSkyColor(); // blue 
console.log(color); // ReferenceError

/*
You’ll notice:

We define a function logSkyColor().

Within the function, the color variable is only available within the curly braces of the function.

If we try to log the same variable outside the function, throws a ReferenceError.
*/

const logVisibleLightWaves = () => {
  const lightWaves = 'Moonlight';
  console.log(lightWaves);
};

logVisibleLightWaves();
console.log(lightWaves); //ReferenceError
