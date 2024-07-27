/*
INTRODUCTION TO JAVASCRIPT

Kelvin Weather

Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.

Recently, Kelvin began publishing his weather forecasts on his website. However there’s a problem: All of his forecasts describe the temperature in Kelvin.

With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit.

Kelvin, Celsius, and Fahrenheit thermometers
For example, 283 K converts to 10 °C which converts to 50 °F.
*/


//	Today's Kelvin
const kelvin = 0;
//	Today's Celsius
const celsius = kelvin - 273;
//	Todays Fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
//	Round Down
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
let newton = celsius * (33 / 100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton`);
