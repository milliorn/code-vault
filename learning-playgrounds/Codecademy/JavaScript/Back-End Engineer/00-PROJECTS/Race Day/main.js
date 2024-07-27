/*
Race numbers are assigned randomly. We’ve provided the necessary code at the top of the file.

Create a variable that indicates whether a runner registered early or not.

Create a variable for the runner’s age and set it equal to a number.

Add 1000 to their raceNumber if this is true.

Create a separate control flow statement below the first (starting with if again). 
This statement will check age and registration time to determine race time.

For runners over 18 who registered early, 
log a statement to the console telling them that they will race at 9:30 am. 
Include their raceNumber.

Write the corresponding else if statement.

Within that, log a string to the console telling them that they will race at 11:00 am. 
Include their raceNumber.

For people who are under 18, log a statement to the console telling them that they will race at 12:30 pm. 
Include their raceNumber.

Enter different combinations of values for the two variables you created and run your code several times. 
Verify that the correct statements are printing to the console!

Add an else statement that logs a statement to the console telling the runner to see the registration desk.
*/
let raceNumber = Math.floor(Math.random() * 1000);
const isRegEarly = true;
const age = 18;

if (age > 18 && isRegEarly) {
	raceNumber += 1000;
	console.log(`Race #: ${raceNumber}. Race time at 9:30am.`);
} else if (age > 18 && !isRegEarly) {
	console.log(`Race #: ${raceNumber}. Race time at 11:00am.`);
} else if (age < 18) {
	console.log(`Race #: ${raceNumber}. Race time at 12:30am.`);
} else {
	console.log(`Please see the registration desk.`);
}
