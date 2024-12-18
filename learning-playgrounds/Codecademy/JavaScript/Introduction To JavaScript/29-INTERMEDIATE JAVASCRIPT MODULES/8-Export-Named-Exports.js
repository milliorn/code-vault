/*
INTERMEDIATE JAVASCRIPT MODULES

Export Named Exports

Named exports are also distinct in that they can be exported as soon as they are declared, by placing the keyword export in front of variable declarations.

In menu.js
*/

export let specialty = '';
export function isVegetarian() {}; 
function isLowSodium() {}; 

/*
The export keyword allows us to export objects upon declaration, as shown in export let specialty and export function isVegetarian() {}.

We no longer need an export statement at the bottom of our file, since this behavior is handled above.
*/


export let availableAirplanes = [{
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

export let flightRequirements = {
  requiredStaff: 4,
  requiredSpeedRange: 700
};

export function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true;
  } else {
    return false;
  }
};

export function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
  const range = maxSpeed - minSpeed;
  
  if (range > requiredSpeedRange) {
  	return true;
  } else { 
  	return false;
  }
}

