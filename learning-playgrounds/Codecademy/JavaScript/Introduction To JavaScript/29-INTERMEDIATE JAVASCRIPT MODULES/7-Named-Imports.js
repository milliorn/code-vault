/*
INTERMEDIATE JAVASCRIPT MODULES

Named Imports

To import objects stored in a variable, we use the import keyword and include the variables in a set of {}.

In the order.js file, for example, we would write:
*/

import { specialty, isVegetarian } from './menu';

console.log(specialty);

/*
Here specialty and isVegetarian are imported.

If we did not want to import either of these variables, we could omit them from the import statement.

We can then use these objects as in within our code. For example, we would use specialty instead of Menu.specialty.
*/


import {availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';

function displayFuelCapacity() {
  availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

displayFuelCapacity();

/*
Fuel Capacity of AeroJet: 800
Fuel Capacity of SkyJet: 500
*/

function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
   console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff) );
  });
}

displayStaffStatus();

/*
AeroJet meets staff requirements: true
SkyJet meets staff requirements: false
*/
