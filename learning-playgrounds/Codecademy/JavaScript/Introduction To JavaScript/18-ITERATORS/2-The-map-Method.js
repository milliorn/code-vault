/*
ITERATORS

The .map() Method

The second iterator we’re going to cover is .map(). When .map() is called on an array, it takes an argument of a callback function and returns a new array! Take a look at an example of calling .map():
*/

const numbers = [1, 2, 3, 4, 5]; 

const bigNumbers = numbers.map(number => {
  return number * 10;
});

/*
.map() works in a similar manner to .forEach()— the major difference is that .map() returns a new array.

In the example above:

numbers is an array of numbers.

bigNumbers will store the return value of calling .map() on numbers.

numbers.map will iterate through each element in the numbers array and pass the element into the callback function.

return number * 10 is the code we wish to execute upon each element in the array. This will save 

each value from the numbers array, multiplied by 10, to a new array.

If we take a look at numbers and bigNumbers:
*/

console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(bigNumbers); // Output: [10, 20, 30, 40, 50]

//Notice that the elements in numbers were not altered and bigNumbers is a new array.


const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => animal[0]);

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(num => num / 100);
