/*
INTERMEDIATE JAVASCRIPT MODULES

Export as

Named exports also conveniently offer a way to change the name of variables when we export or import them. We can do this with the as keyword.

Let’s see how this works. In our menu.js example
*/

let specialty = '';
let isVegetarian = function() {}; 
let isLowSodium = function() {}; 

export { specialty as chefsSpecial, isVegetarian as isVeg, isLowSodium };

/*
In the above example, take a look at the export statement at the bottom of the of the file.

The as keyword allows us to give a variable name an alias as demonstrated in specialty as chefsSpecial and isVegetarian as isVeg.

Since we did not give isLowSodium an alias, it will maintain its original name.
*/


let availableAirplanes = [{
 name: 'AeroJet',
 fuelCapacity: 800,
 availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
 maxSpeed: 1200,
 minSpeed: 300
}, 
{name: 'SkyJet',
 fuelCapacity: 500,
 availableStaff: ['pilots', 'flightAttendants'],
 maxSpeed: 800,
 minSpeed: 200
}];

let flightRequirements = {
  requiredStaff: 4,
  requiredSpeedRange: 700
};

function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true;
  } else {
    return false;
  }
};

function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
  const range = maxSpeed - minSpeed;
  
  if (range > requiredSpeedRange) {
  	return true;
  } else { 
  	return false;
  }
}

export {availableAirplanes as aircrafts, flightRequirements as flightReqs, meetsStaffRequirements as meetsStaffReqs, meetsSpeedRangeRequirements as meetsSpeedRangeReqs};
