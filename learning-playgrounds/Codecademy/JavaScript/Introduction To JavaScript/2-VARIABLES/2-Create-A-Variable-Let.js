/*
VARIABLES

Create a Variable: let

As mentioned in the previous exercise, the let keyword was introduced in ES6. The let keyword signals that the variable can be reassigned a different value. Take a look at the example:

let meal = 'Enchiladas';
console.log(meal); // Output: Enchiladas
meal = 'Burrito';
console.log(meal); // Output: Burrito

Another concept that we should be aware of when using let (and even var) is that we can declare a variable without assigning the variable a value. In such a case, the variable will be automatically initialized with a value of undefined:

let price;
console.log(price); // Output: undefined
price = 350;
console.log(price); // Output: 350
Notice in the example above:

If we don’t assign a value to a variable declared using the let keyword, it automatically has a value of undefined.
We can reassign the value of the variable.
*/

let changeMe = true;
changeMe = false;
console.log(changeMe);
