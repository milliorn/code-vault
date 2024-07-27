/*
INTRODUCTION TO JAVASCRIPT

Sleep Debt Calculator

Did you know that giraffes sleep 4.6 hours a day? We humans need more than that. If we don’t sleep enough, we accumulate sleep debt. In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator.

The program will determine the actual and ideal hours of sleep for each night of the last week.

Finally, it will calculate, in hours, how far you are from your weekly sleep goal
*/

const getSleepHours = day => {
  switch (day) {
    case 'monday': return 8;
    case 'tuesday': return 8;
    case 'wednesday': return 8;
    case 'thursday': return 8;
    case 'friday': return 8;
    case 'saturday': return 8;
    case 'sunday': return 8;
    default: 'ERROR! - getSleepHours';
  }
};

const getActualSleepHours = () => {
  return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
};

const getIdealSleepHours = idealHours => idealHours * 7;

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);
  
  if (actualSleepHours === idealSleepHours) {
    console.log(`User got the perfect amount of ${idealSleepHours} hours sleep.`);
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`User got more than ${actualSleepHours - idealSleepHours} hours sleep than needed.`);
  } else if (actualSleepHours < idealSleepHours) {
    console.log(`User should get ${idealSleepHours - actualSleepHours} hours more rest.`);
  } else {
    console.log('ERROR! calculateSleepDebt().')
  }
}

calculateSleepDebt();
