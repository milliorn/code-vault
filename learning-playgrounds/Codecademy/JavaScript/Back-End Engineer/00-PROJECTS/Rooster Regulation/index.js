// Define a rooster
var Rooster = {};

// Return a morning rooster call
Rooster.announceDawn = () => {
	return "cock-a-doodle-doo!";
}

// Return hour as string
// Throws Error if hour is not between 0 and 23 inclusive
Rooster.timeAtDawn = (hour) => {
	if (hour < 0 || hour > 23) {
		throw new RangeError;
	} else {
		return hour.toString();
	}
}

export default Rooster;
