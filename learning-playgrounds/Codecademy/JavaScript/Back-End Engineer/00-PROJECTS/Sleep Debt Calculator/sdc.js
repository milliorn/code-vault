/*
Create a function named getSleepHours with a single parameter named day.

The function should accept a day as an argument and return the number of hours you slept that night.

Test the function by calling it multiple times and printing the results to the console.
*/
const getSleepHours = (day) => {
  switch (day) {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
    case "saturday":
    case "sunday":
      return 8;
    default:
      console.log("ERROR! - getSleepHours");
      return -1;
  }
};

/*
To get the total sleep hours that you actually slept, create a new function named getActualSleepHours that takes no parameters.

Inside the getActualSleepHours() function, call the getSleepHours() function for each day of the week. 
Add the results together and return the sum using an implicit return.
*/
const getActualSleepHours = () => {
  return (
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday")
  );
};

/*
To get the ideal sleep hours that you prefer, create a function named getIdealSleepHours with no parameters.
Inside the function, declare a variable named idealHours and set its value to your ideal hours per night. 
Then return the idealHours multiplied by 7.
*/
const getIdealSleepHours = (idealHours) => idealHours * 7;

/*
Create a function named calculateSleepDebt with no parameters.
Inside of its block, create a variable named actualSleepHours set equal to the getActualSleepHours() function call.
Then, create another variable named idealSleepHours, set equal to the getIdealSleepHours() function call.
Now that you have actualSleepHours and idealSleepHours, you can write a few if/else statements to output the result to the console.
To make this calculator more helpful, add the hours the user is over or under their ideal sleep in each log statement in calculateSleepDebt().
*/
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);

  if (actualSleepHours === idealSleepHours) {
    console.log(
      `User got the perfect amount of ${idealSleepHours} hours sleep.`
    );
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      `User got more than ${
        actualSleepHours - idealSleepHours
      } hours sleep than needed.`
    );
  } else if (actualSleepHours < idealSleepHours) {
    console.log(
      `User should get ${idealSleepHours - actualSleepHours} hours more rest.`
    );
  } else {
    console.log("ERROR! calculateSleepDebt().");
  }
};

//On the last line of the program, start the program by calling the calculateSleepDebt() function.
calculateSleepDebt();
