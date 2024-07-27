/** Here's a scenario: you want to verify that the telephone number entered by a user on a form matches a format ###-###-#### */
const isPattern = (userInput) => /^\d{3}-\d{3}-\d{4}$/.test(userInput);

/* How to use a regular expression literal: */
const regExpStr = "Hello world! hello there";
const regExpLiteral = /Hello/gi;
let test = regExpStr.match(regExpLiteral);
console.log(regExpStr.match(regExpLiteral));

/* How to use a regex constructor */
const regExpConstructor = new RegExp("xyz", "g");
let str = "xyz xyz";
test = str.match(regExpConstructor);
console.log(str.match(regExpConstructor));

/* We can also pass in dynamically created patterns as template literals using the constructor function. */
const pattern = prompt("Enter pattern: ");
const regExpConst = new RegExp(`${pattern}`, "gi");
str = "xyz XYZ";
test = str.match(regExpConst);

const regexPattern1 = /^cat/;
test = regexPattern1.test("cat and mouse");
console.log(regexPattern1.test("cat and mouse")); // Output: true

test = regexPattern1.test("cat and mouse");
console.log(regexPattern1.test("The cat and mouse")); // Output: false because the line does not start with cat

// Without the ^ in the pattern, the output will return true
// because we did not assert a boundary.
const regexPattern2 = /cat/;
console.log(regexPattern2.test("The cat and mouse")); // Output: true
test = regexPattern2.test("The cat and mouse");

// Search for a word that begins with the pattern ward
const text1 = "backward Wardrobe Ward";
console.log(text1.match(/\bward/gi)); // Output: ['Ward', 'Ward']

// Syntax 2: /...\b/
// Search for a word that ends with the pattern ward
const text2 = "backward Wardrobe Ward";
console.log(text2.match(/ward\b/gi)); // Output: ['ward', 'Ward']

// Syntax 3: /\b....\b/
// Search for a stand-alone word that begins and end with the pattern ward
const regexPattern3 = /\bward\b/gi;
const text3 = "backward Wardrobe Ward";
console.log(text3.match(regexPattern3)); // Output: ['Ward']

// Find and match a word with two alternative spellings
const regexPattern = /ambi[ea]nce/;
console.log(regexPattern.test("ambiance")); // Output: true
console.log(regexPattern.test("ambiance")); // Output: true

// The regex pattern interprets as:  find a followed by m, then b,
// then i, then either e or a, then n, then c, and then e.
console.log(/[^bc]at/.test("bat")); // Output: false
console.log(/[^bc]at/.test("cat")); // Output: false
console.log(/[^bc]at/.test("mat")); // Output: true

/*
Alternation is yet another way you can specify a set of options.
Here, you use the pipe character | to match any of several subexpressions.
Either of the subexpressions is called an alternative.
*/
console.log(/(Bob|George)\sClan/.test("Bob Clan")); // Output: true
console.log(/(Bob|George)\sClan/.test("George Clan")); // Output: true

/*
Quantifiers denote how many times a character, a character class, or group should appear in the target text for a match to occur.
*/
console.log(/hel+o/.test("helo")); // Output:true
console.log(/hel+o/.test("hellllllllllo")); // Output: true
console.log(/hel+o/.test("heo")); // Output: false

// Grouping and Backreferencing
const regExp = /abc+(xyz+)+/i;
console.log(regExp.test("abcxyzzzzXYZ")); // Output: true

// The test() method
const regExp1 = /abc/i;
console.log(regExp1.test("abcdef")); // Output: true
console.log(regExp1.test("bcadef")); // Output: false

// The exec() method
const regExp2 = /abc/i;
console.log(regExp2.exec("abcdef"));
// Output: ['abc', index: 0, input: 'abcdef', groups: undefined]

console.log(regExp2.exec("bcadef"));
// Output: null
