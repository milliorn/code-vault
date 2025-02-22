/*
SCOPE

Practice Good Scoping

Given the challenges with global variables and scope pollution, we should follow best practices for scoping our variables as tightly as possible using block scope.

Tightly scoping your variables will greatly improve your code in several ways:

It will make your code more legible since the blocks will organize your code into discrete sections.

It makes your code more understandable since it clarifies which variables are associated with different parts of the program rather than having to keep track of them line after line!

It’s easier to maintain your code, since your code will be modular.

It will save memory in your code because it will cease to exist after the block finishes running.
Here’s another example of how to use block scope, as defined within an if block:
*/

const logSkyColor = () => {
  const dusk = true;
  let color = 'blue'; 
  if (dusk) {
    let color = 'pink';
    console.log(color); // pink
  }
  console.log(color); // blue 
};

console.log(color); // ReferenceError

/*
Here, you’ll notice:

We create a variable dusk inside the logSkyColor() function.

After the if statement, we define a new code block with the {} braces. Here we assign a new value to the variable color if the if statement is truthy.

Within the if block, the color variable holds the value 'pink', though outside the if block, in the function body, the color variable holds the value 'blue'.

While we use block scope, we still pollute our namespace by reusing the same variable name twice. A better practice would be to rename the variable inside the block.

Block scope is a powerful tool in JavaScript, since it allows us to define variables with precision, and not pollute the global namespace. If a variable does not need to exist outside a block— it shouldn’t!
*/

const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  // Add if statement here:
  if (region === 'The Arctic') {
    let lightWaves = 'Northern Lights';
    console.log(lightWaves);
  }
  console.log(lightWaves);
};

logVisibleLightWaves();
