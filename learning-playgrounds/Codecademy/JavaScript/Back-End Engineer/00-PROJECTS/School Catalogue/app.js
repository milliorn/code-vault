//Create an empty class named School.
class School {
	//Create constructor() that accepts three parameters.
	//Prepend all of the properties with an underscore (_).
	constructor(name, level, numberOfStudents) {
		this._name = name;
		this._level = level;
		this._numberOfStudents = numberOfStudents;
	}
	//Create getters for the name, level, and numberOfStudents properties.
	get name() {
		return this._name;
	}
	get level() {
		return this._level;
	}
	get numberOfStudents() {
		return this._numberOfStudents;
	}
	//Create a setter for numberOfStudents
	set numberOfStudents(value) {
		value.isNaN()
			? console.log("Invalid input: numberOfStudents must be set to a Number.")
			: this._numberOfStudents = value;
	}
	//Create a method named quickFacts that logs the following string to the console:
	quickFacts() {
		console.log(
			`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`
		);
	}
	// Create a static method named pickSubstituteTeacher
	static pickSubstituteTeacher(substituteTeachers) {
		const rand = Math.round(Math.random() * substituteTeachers.length - 1);
		return substituteTeachers[rand];
	}
}

//Create an empty PrimarySchool class that extends School.
class PrimarySchool extends School {
	//Call super on the first line of the PrimarySchool‘s constructor()
	constructor(name, numberOfStudents, pickupPolicy) {
		super(name, "Primary", numberOfStudents);
		//Use the remaining argument to set the pickupPolicy property.
		this._pickupPolicy = pickupPolicy;
	}
	get pickupPolicy() {
		return this._pickupPolicy;
	}
}

//Create HighSchool Class
class HighSchool extends School {
	constructor(name, numberOfStudents, sportsTeams) {
		super(name, "High", numberOfStudents);
		this._sportsTeams = sportsTeams;
	}
	//Under the constructor(), create a getter for sportsTeams
	get sportsTeams() {
		console.log(this._sportsTeams);
	}
}

//Create a PrimarySchool instance with the following properties:
const lorraineHansbury = new PrimarySchool(
	`Lorraine Hansbury`,
	514,
	`Students must be picked up by a parent, guardian, or a family member over the age of 13.`
);

//Call .quickFacts() on the lorraineHansbury instance.
lorraineHansbury.quickFacts();

//Call .pickSubstituteTeacher() on School, and pass the following array as an argument:
const teacher = School.pickSubstituteTeacher([
	"Jamal Crawford",
	"Lou Williams",
	"J. R. Smith",
	"James Harden",
	"Jason Terry",
	"Manu Ginobli",
]);

//Create a HighSchool instance with the following properties:
const alSmith = new HighSchool("Al E. Smith", 415, [
	"Baseball",
	"Basketball",
	"Volleyball",
	"Track and Field",
]);

//Get the value saved to the sportsTeams property in alSmith.
console.log(alSmith.sportsTeams);