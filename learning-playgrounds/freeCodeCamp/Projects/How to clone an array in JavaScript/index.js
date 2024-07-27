// 1. Spread Operator (Shallow copy)
numbers = [ 1, 2, 3 ];
numbersCopy = [ ...numbers ];
numbersCopy.push(4);
console.log(numbers, numbersCopy);
// [1, 2, 3] and [1, 2, 3, 4]
// numbers is left alone

// 2. Good Old for() Loop (Shallow copy)
numbers = [ 1, 2, 3 ];
numbersCopy = [];

for (i = 0; i < numbers.length; i++) {
  numbersCopy[ i ] = numbers[ i ];
}

numbersCopy.push(4);
console.log(numbers, numbersCopy);
// [1, 2, 3] and [1, 2, 3, 4]
// numbers is left alone

// 3. Good Old while() Loop (Shallow copy)
numbers = [ 1, 2, 3 ];
numbersCopy = [];
i = -1;

while (++i < numbers.length) {
  numbersCopy[ i ] = numbers[ i ];
}

numbers = [ 1, 2, 3 ];
numbersCopy = [];
i = -1;

while (++i < numbers.length) {
  numbersCopy[ i ] = numbers[ i ];
}

console.log(numbers, numbersCopy);
// [1, 2, 3] and [1, 2, 3]

// 4. Array.map (Shallow copy)
numbers = [ 1, 2, 3 ];
double = (x) => x * 2;

numbers.map(double);

console.log(numbers);
// [1, 2, 3]

// What about cloning??
numbers = [ 1, 2, 3 ];
numbersCopy = numbers.map((x) => x);

let identity = (x) => x;
numbers.map(identity);
// [1, 2, 3]
console.log(numbers, identity);
// [ 1, 2, 3 ] [Function: identity]

// 5. Array.filter (Shallow copy)
[ 1, 2, 3 ].filter((x) => x % 2 === 0);
numbers = [ 1, 2, 3 ];
numbersCopy = numbers.filter(() => true);
console.log(numbers, numbersCopy);
// [1, 2, 3] and [1, 2, 3]

// 6. Array.reduce (Shallow copy)
numbers = [ 1, 2, 3 ];

numbersCopy = numbers.reduce((newArray, element) => {
  newArray.push(element);

  return newArray;
}, []);

console.log(numbers, numbersCopy);
// [ 1, 2, 3 ][ 1, 2, 3 ]

numbers = [ 1, 2, 3, 4, 5 ];
numbersCopy = numbers.slice();
console.log(numbers, numbersCopy);

nestedNumbers = [ [ 1 ], [ 2 ] ];
numbersCopy = JSON.parse(JSON.stringify(nestedNumbers));

numbersCopy[ 0 ].push(300);
console.log(nestedNumbers, numbersCopy);
// [ [ 1 ], [ 2 ] ] [ [ 1, 300 ], [ 2 ] ]

numbers = [ 1, 2, 3 ];
numbersCopy = Array.from(numbers);
console.log(numbers, numbersCopy);
// [ 1, 2, 3 ] [ 1, 2, 3 ]