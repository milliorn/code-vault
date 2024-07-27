// Tip 1: Use console.table() to Display Arrays and Objects in the Console

const myArr = [ 'Doe', 'John', 20, true ];

console.log(myArr);
console.table(myArr);

// Tip 2: Use Template Interpolation to Render Strings Instead of the Assignment Operator

const name = 'John Doe';
const age = 20;

const plusConcat =
  'Hi there 👋🏽 \nMy name is ' + name + ' and I am ' + age + ' years old.';

const templateLiteralConcat = `Hi there 👋🏽 \nMy name is, ${name} and I am ${age} years old.`;

console.log(plusConcat);
console.log(templateLiteralConcat);

// Tip 3: Convert Strings to Numbers with Unary Plus and Number Constructor

const myNum = '5';

convertNum1 = +myNum;
convertNum2 = Number(myNum);

console.log(convertNum1, typeof convertNum1); // 5 'number'
console.log(convertNum2, typeof convertNum2); // 5 'number'

// Tip 4: You Don’t Need to Declare Every Variable with a Keyword

// declare multiple variables at once.
let x, y, z;

x = 1;
y = 2;
z = 3;

console.log(x, y, z); // 1, 2, 3

// declare other variables after the first one without the keyword.
const a = 'Hello',
  b = 'How are you today?',
  c = 'Are you coding today?';

console.log(a); // Hello
console.log(b); // How are you today?
console.log(c); // Are you coding today?

// Tip 5: Use console.group() with Multiple console.log()s to Group Related Itmes to the Console

console.group('Bio:');

console.log('My name is John Doe');
console.warn("I don't like to be late");
console.error('You came late');

console.groupEnd();

// Tip 6: Style your Console Output with the %c Specifier

const styles = `padding: 15px;
                background-color: #2ecc71;
                color: black`;

console.log('%c Hello, Everyone!', styles);

// Tip 7: How Math.floor(Math.random() * n1 + n2) Generates a Random Number Between n1 and n2
console.log(Math.floor(Math.random() * 10 + 1)); // 1 - 10

// Tip 9: Capitalize the First Letter of Any Word
const str = 'john';
const capitalizedStr = (str) => str.charAt(0).toUpperCase() + str.slice(1);

console.log(capitalizedStr(str)); // John
console.log(capitalizedStr('doe')); // Doe

// Tip 10: Destructure Arrays with Default Values to Avoid Getting undefined

// Destructuring without default values
const fruits = [ 'Apple', 'Banana' ];
const [ firstFruit, secondFruit, thirdFruit ] = fruits;

console.log(firstFruit); // Apple
console.log(secondFruit); // Banana
console.log(thirdFruit); // undefined

// Destructuring with default values
const [ fruit1, fruit2, fruit3 = 'Orange' ] = fruits;

console.log(fruit1); // Apple
console.log(fruit2); // Banana
console.log(fruit3); // Orange

// Tip 11: Use the Spread Operator to Copy and Merge Arrays

const originalArray = [ 1, 2, 3 ];
const copiedArray = [ ...originalArray ];

console.log(copiedArray); // [1, 2, 3]

// merge two or more arrays
const arr1 = [ 1, 2, 3 ];
const arr2 = [ 4, 5, 6 ];

const mergedArray = [ ...arr1, ...arr2 ];

console.log(mergedArray); // [1, 2, 3, 4, 5, 6

const originalObj = { name: 'John', age: 30 };
const clonedObj = { ...originalObj };

console.log(clonedObj); // { name: 'John', age: 30 }

function addNumbers(a, b, c) {
  return a + b + c;
}

const numbers = [ 10, 12, 8 ];
const sum = addNumbers(...numbers);

console.log(sum); // 30

// Tip 12: Use Arrow Syntax to Write Shorter and More Elegant Functions

// Traditional Function Expression
function add1(a, b) {
  return a + b;
}

// Arrow Function
const add2 = (a, b) => a + b;

console.log(add1(1, 2)); // 3
console.log(add2(5, 8)); // 13

// Using Traditional Function Expression
const numbers1 = [ 3, 4 ];
const numbers2 = [ 2, 8 ];

const squared1 = numbers1.map(function (num) {
  return num * num;
});

// Using Arrow Function
const squared2 = numbers2.map((num) => num * num);

console.log(squared1); // [ 9, 16 ]
console.log(squared2); // [ 4, 64 ]

// Tip 14: Use the startsWith() and endsWith() String Methods to Get the Start and End of a String

const message = 'Hello world';

console.log(message.startsWith('H')); // true
console.log(message.startsWith('h')); // false
console.log(message.endsWith('d')); // true
console.log(message.endsWith('D')); // false

const files = [
  'text.txt',
  'document.txt',
  'image.jpg',
  'script.js',
  'docs.txt',
];

// Get .txt files
const textFiles = files.filter((file) => file.endsWith('.txt'));
console.log(textFiles);[ 'text.txt', 'document.txt', 'docs.txt' ]

const text = 'Welcome to freeCodeCamp';

console.log(text.startsWith('W', 0)); // true
console.log(text.startsWith('freeCodeCamp', 11)); // true
console.log(text.endsWith('f', 11)); // false

// Tip 16: Use replace() with the toUpperCase() and toLowerCase() Methods to Convert Between Cases

function toTitleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\w/g, (match) => match.toUpperCase());
}

console.log(toTitleCase('welcome to twitter (now x)!'));
// Welcome To Twitter (now X)!

function toSnakeCase(str) {
  return str.toLowerCase().replace(/\s+/g, '_');
}

console.log(toSnakeCase('Convert this to snake case'));
// convert_this_to_snake_case

function toSentenceCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

console.log(toSentenceCase('hELLo TwEePs! HOW ARE YOU TODAY?'));
// Hello tweeps! how are you today?

// Tip 17: Use the Array.from() Method to Create Arrays from Array-like Objects or Iterables
function sumArguments() {
  // The "arguments" object is array-like
  const argsArray = Array.from(arguments);
  return argsArray.reduce((acc, num) => acc + num, 0);
}

const result = sumArguments(1, 2, 3, 4, 5);
console.log(result); // Output: 15

// Tip 19: Use the filter() Method to Filter Through Arrays
const nums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ];

const oddNums = nums.filter((num) => num % 2 !== 0);
const evenNumbers = nums.filter((num) => num % 2 === 0);

console.log(evenNumbers); // [2, 4, 6, 8, 10, 12, 14]
console.log(oddNums); // [1,  3,  5,  7, 9, 11, 13, 15]

const products = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Phone', price: 500 },
  { id: 3, name: 'Tablet', price: 300 },
  { id: 4, name: 'Headphones', price: 100 },
];

const cheapProducts = products.filter((product) => product.price < 500);

console.log(cheapProducts);

// Tip 20: Use the forEach() Method to Loop Through Arrays

// with for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[ i ]);
}

// with forEach() – cleaner!
fruits.forEach((fruit) => {
  console.log(fruit);
});

// Tip 23: Preserve Object Integrity by Sealing and Freezing Them

const person1 = {
  name: 'Mary',
  luckyNum: 10,
  footballFan: true,
  club: 'Jane',
};

// seal the object with Object.seal()
Object.seal(person1);

console.log(person1.name);

person1.favPet = 'Cat'; // You can't add entries to a sealed object
console.log(person1.favPet); // undefined

delete person1.club; // You can't remove entries from a sealed object
console.log(person1.club); // Chelsea

// You can still edit the property values
person1.name = 'John Doe';
console.log(person1.name);

// check if the object is sealed and frozen with isSealed() and isFrozen()
console.log(Object.isSealed(person1)); // true
console.log(Object.isFrozen(person1)); // false

const person2 = {
  name: 'Jane',
  luckyNum: 11,
  footballFan: true,
  club: 'Man United',
};

// freeze the object with Object.freeze()
Object.freeze(person2);

console.log(person2.name); // Jane

person2.favPet = 'Cat'; // You can't add entries to a frozen object
console.log(person2.favPet); // undefined

person2.name = 'Jane Doe';
console.log(person2.name); // Jane – nothing changes

delete person2.club; // You can't remove entries from a frozen object
console.log(person2.club); // Man United

// check if the object is frozen and sealed with isFrozen() and isSealed()
console.log(Object.isFrozen(person2)); // true
console.log(Object.isSealed(person2)); // true
// isSealed() returns true because a frozen object is also a sealed object

// Tip 24: Use async...await For Asynchronous Operations

const fetchData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(`There was an error: ${error}`);
  }
}

fetchData();

// Tip 25: Clone Objects with the Spread Operator, Object.assign(), and JSON.parse()

const originalObject = {
  name: 'Doe',
  luckyNum: 10,
  isFootballFan: true,
  club: 'Jane',
};

// clone with spread operator
const clonedObject1 = { ...originalObject };

// clone with Object.assign()
const clonedObject2 = Object.assign({}, originalObject);

// deep cloning with JSON.stringify() and JSON.parse()
const clonedObject3 = JSON.parse(JSON.stringify(originalObject));
console.table(clonedObject1);
console.table(clonedObject1);
console.table(clonedObject1);

// Tip 26: Remove Duplicates from an Array with Set and Map

// create unique arrays with Set()
const arrayWithDuplicates = [ 1, 2, 2, 3, 4, 4, 5 ];
const uniqueArray = [ ...new Set(arrayWithDuplicates) ];

console.log(uniqueArray); // [1, 2, 3, 4, 5]

// create unique arrays with Map()
const fruitsWithDuplicates2 = [
  'Mango',
  'Cashew',
  'Barley',
  'Mango',
  'Barley',
  'Berry',
  'Cashew',
];
const uniqueFruitsWithDuplicates2 = [
  ...new Map(fruitsWithDuplicates2.map((item) => [ item, true ])).keys(),
];

console.log(uniqueFruitsWithDuplicates2);
// [ 'Mango', 'Cashew', 'Barley', 'Berry' ]

// Tip 27: Map Through and Array and Flatten it with the flatMap() Method

const doubledAndSquared = numbers.map((num) => [ num * 2, num * num ]);
const flattenedArr = doubledAndSquared.flat();

console.log(doubledAndSquared); // [ [ 2, 1 ], [ 4, 4 ], [ 6, 9 ], [ 8, 16 ], [ 10, 25 ] ]
console.log(flattenedArr); //  [2, 1, 4, 4, 6, 9, 8, 16, 10, 25]

const combinedMapAndFlat = numbers.flatMap((num) => [ num * 2, num * num ]);

console.log(combinedMapAndFlat); // Output: [2, 1, 4, 4, 6, 9, 8, 16, 10, 25];

// Tip 28: Use the padStart() and padEnd() Methods to Pad a string with a Character

const originalString = 'Hello';
const paddedString = originalString.padStart(10, '*');
console.log(paddedString); // *****Hello

const originalString2 = 'World';
const paddedString2 = originalString2.padEnd(10, '-');
console.log(paddedString2); // World-----

// combine both padStart() and padEnd()
const paddedText = text.padStart(10, '-').padEnd(15, '+');
console.log(paddedText); // -----Hello+++++

console.log('Product      Price');
console.log('-------------------');

products.forEach(({ name, price }) => {
  const paddedName = name.padEnd(10, ' ');
  const formattedPrice = price.toFixed(2).padStart(8, ' ');
  console.log(`${paddedName}${formattedPrice}`);
});

function formatTime(currentTime, totalTime) {
  // Helper function to pad a number with leading zeros
  const padWithZero = (num) => num.toString().padStart(2, '0');

  // Format current time in minutes:seconds
  const formattedCurrentTime = `${padWithZero(
    Math.floor(currentTime / 60)
  )}:${padWithZero(Math.floor(currentTime % 60))}`;

  // Format total time in minutes:seconds
  const formattedTotalTime = `${padWithZero(
    Math.floor(totalTime / 60)
  )}:${padWithZero(Math.floor(totalTime % 60))}`;

  // Combine formatted current time and total time with "of" in between
  return `${formattedCurrentTime} of ${formattedTotalTime}`;
}

// Example time values
const currentTimeInSeconds = 125; // Example of a current time in seconds
const totalTimeInSeconds = 3600; // Example of a total time in seconds

// Format the time and display the result
const formattedTime = formatTime(currentTimeInSeconds, totalTimeInSeconds);
console.log(formattedTime); // 02:05 of 60:00