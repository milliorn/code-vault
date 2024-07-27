/*
INTERMEDIATE JAVASCRIPT MODULES

export default

As of ES6, JavaScript has implemented a new more readable and flexible syntax for exporting modules. These are usually broken down into one of two techniques, default export and named exports.

We’ll begin with the first syntax, default export. The default export syntax works similarly to the module.exports syntax, allowing us to export one module per file.

Let’s look at an example in menu.js.
*/

let Menu = {};

export default Menu;

/*
export default uses the JavaScript export statement to export JavaScript objects, functions, and primitive data types.
Menu refers to the name of the Menu object, the object that we are setting the properties on within our modules.
When using ES6 syntax, we use export default in place of module.exports.
*/


const Airplane = {};

Airplane.availableAirplanes = [
  {name: 'AeroJet',fuelCapacity: 800}, 
  {name: 'SkyJet', fuelCapacity: 500}
];

export default Airplane;
