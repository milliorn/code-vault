let string1 = 'Hello';
let string2 = String('World');

console.log(`${string1} ${string2}!`)

let string = 'Hello World';
string1 = string[ 0 ];
string2 = string.charAt(0);

console.log(`${string1} ${string2}`)

let lowerCase = string.toLowerCase();
let upperCase = string.toUpperCase();

console.log(`${lowerCase} ${upperCase}`)

string1 = string.concat(' World');

console.log(`${string1} ${string2}`)

string = 'Hello World';
let firstH = string.indexOf('H');
let firstWorld = string.indexOf('World');
let notThere = string.indexOf('Z');

console.log(`${firstH} ${firstWorld} ${notThere}`)

string = 'Hello World';
let s_length = string.length;
string1 = string.slice(0, 10);
let copy = string.slice();

console.log(`${s_length} ${string1} ${copy}`)

string = 'Hello World';
let words = string.split(' ');
let chars = string.split('');

console.log(`${words} ${chars}`)

let arr1 = Array();
// let arr2 = []; error TS7005: Variable 'arr2' implicitly has an 'any[]' type.
let arr2 = [ 1, 2, 3, 4, 5 ];

console.log(`${arr1} ${arr2}`)

let array = [ 1, 2, 3 ];
let first = array.indexOf(1);
let last = array.lastIndexOf(1);
notThere = array.indexOf(4);

console.log(`${first} ${last} ${notThere}`)

array = [ 1, 2, 3 ];
array.push(4);

console.log(`${array}`)

let popped = array.pop();

console.log(`${popped} ${array}`)

let arr = [ { name: 'John', age: 25 }, { name: 'Jane', age: 22 }, { name: 'Jack', age: 32 } ];

let names = arr.map((item) => item.name);

console.log(`${names}`)

let arrEach = [ 1, 2, 3, 4, 5 ];

arrEach.forEach((item, index, array) => {
  console.log(`${item} ${index} ${array}`);
});

let arrFilter = [ 1, 2, 3, 4, 5 ];
let filteredArr = arrFilter.filter((item) => item > 3);

console.log(`${filteredArr}`)

let arrSome = [ 1, 2, 3, 4, 5 ];
let bool = arrSome.some((item) => item > 3);

console.log(`${bool}`)

let arrSort = [ 1, 3, 5, 2, 4 ];
arrSort.sort();

console.log(`${arrSort}`)

arrSort = [ 1, 3, 5, 2, 4 ];
arrSort.sort((a, b) => a - b);

console.log(`${arrSort}`)

let obj1 = Object();
let obj2 = {};

console.log(`${obj1} ${obj2}`)

let obj = { name: 'John', age: 25 };
obj1 = obj;
obj1.name = 'Jane';

console.log(`${obj.name} ${obj1.name}`)

obj = { name: 'John', age: 25 };
Object.freeze(obj);
// obj.age = 30; TypeError: Cannot assign to read only property 'age' of object '#<Object>'
let frozen = Object.isFrozen(obj);

console.log(`${obj.age} ${frozen}`)

obj = { name: 'John', age: 25 };
let keys = Object.keys(obj);
let values = Object.values(obj);

console.log(`${keys} ${values}`)