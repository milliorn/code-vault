// 1. How to Capitalize Text
const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);

const name = "robert";
console.warn(capitalize(name));

// 2. How to Calculate Percent
const calculatePercent = (num, percent) =>
  Math.round((num / percent) * 100);

const questionsCorrect = 6;
const questionTotal = 11;
console.warn(calculatePercent(questionsCorrect, questionTotal)); // 55

// 3. How to Get a Random Element
const getRandomElement = (arr) => arr[ Math.floor(Math.random() * arr.length) ];

let items = [ "Nicely done!", "Good job!", "Good work!", "Correct!" ];
console.warn(getRandomElement(items));

// 4. How to Remove Duplicate Elements
const removeDuplicates = (arr) => [ ...new Set(arr) ];

const friendList = [ "Jeff", "Jane", "Jane", "Rob" ];
console.warn(removeDuplicates(friendList)); // ['Jeff', 'Jane', 'Rob']

// 5. How to Sort Elements By Certain Property
const sortBy = (arr, key) =>
  arr.sort((a, b) => a[ key ] > b[ key ] ? 1 : a[ key ] < b[ key ] ? -1 : 0);

const lessons = [ { position: 1, name: "Intro" }, { position: 0, name: "Basics" } ];
console.warn(sortBy(lessons, "position"));
// {position: 0, name: 'Basics'},
// {position: 1, name: 'Intro'}

// 6. How to Check if Arrays/Objects are Equal
const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);

console.warn(isEqual([ 1, '2' ], [ 1, 2 ])); // false
isEqual([ 1, 2 ], [ 1, 2 ]); // true

// 7. How to Count Number of Occurrences
const countOccurrences = (arr, value) =>
  arr.reduce((a, v) => (v === value ? a + 1 : a), 0);

const pollResponses = [ "Yes", "Yes", "No" ];
const response = "Yes";

console.warn(countOccurrences(pollResponses, response)); // 2

// 8. How to Wait for a Certain Amount of Time
const wait = async (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

// wait(2000).then(() => function());

// 9. How to Use the Pluck Property from Array of Objects
const pluck = (objs, key) => objs.map((obj) => obj[ key ]);

const users = [ { name: "Abe", age: 45 }, { name: "Jennifer", age: 27 } ];

console.warn(pluck(users, 'name')); // ['Abe', 'Jennifer']

// 10. How to Insert an Element at a Certain Position
const insert = (arr, index, newItem) =>
  [ ...arr.slice(0, index), newItem, ...arr.slice(index) ];

items = [ 1, 2, 4, 5 ];

// insert the number 3 at index 2:
console.warn(insert(items, 2, 3)); // [1, 2, 3, 4, 5]