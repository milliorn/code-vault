/*
    The forecast today is 293 Kelvin. 
    To start, create a variable named kelvin, and set it equal to 293.

    Celsius is similar to Kelvin — 
    the only difference is that Celsius is 273 degrees less than Kelvin. 

    Use this equation to calculate Fahrenheit,
    then store the answer in a variable named fahrenheit.

    Use the .floor() method from the built-in Math object to round down the Fahrenheit temperature. 
    Save the result to the fahrenheit variable.

    Use console.log and string interpolation to log the temperature in fahrenheit to the console as follows:

    By using variables, your program should work for any Kelvin temperature — 
    just change the value of kelvin and run the program again.
*/
let kelvin = 293;
let celsius = kelvin - 273;
let fahrenheit = Math.floor(celsius * (9 / 5) + 32);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

kelvin = 0;
celsius = kelvin - 273;
fahrenheit = Math.floor(celsius * (9 / 5) + 32);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
