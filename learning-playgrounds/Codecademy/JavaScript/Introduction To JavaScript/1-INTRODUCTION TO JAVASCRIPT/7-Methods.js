/*
INTRODUCTION TO JAVASCRIPT

Methods

Remember that methods are actions we can perform. JavaScript provides a number of string methods.

We call, or use, these methods by appending an instance with a period (the dot operator), the name of the method, and opening and closing parentheses: ie. 'example string'.methodName().

Does that syntax look a little familiar? When we use console.log() we’re calling the .log() method on the console object. Let’s see console.log() and some real string methods in action!

console.log('hello'.toUpperCase()); // Prints 'HELLO'
console.log('Hey'.startsWith('H')); // Prints true

Let’s look at each of the lines above:

On the first line, the .toUpperCase() method is called on the string instance 'hello'. The result is logged to the console. This method returns a string in all capital letters: 'HELLO'.
On the second line, the .startsWith() method is called on the string instance 'Hey'. This method also accepts the character 'H' as an input, or argument, between the parentheses. Since the string 'Hey' does start with the letter 'H', the method returns the boolean true.
You can find a list of built-in string methods in the JavaScript documentation. Developers use documentation as a reference tool. It describes JavaScript’s keywords, methods, and syntax.
*/

// Use .toUpperCase() to log 'Codecademy' in all uppercase letters
console.log('Codecademy'.toUpperCase());

// Use a string method to log the following string without whitespace at the beginning and end of it.
console.log('    Remove whitespace   '.trim());
