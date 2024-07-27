/*
	Let’s start by making a parent class for our Book, CD, and Movie classes.
	Create an empty class called Media.

	Inside the Media class, create an empty constructor() method that takes one parameter.

	Inside the constructor, set the values for Media properties that Book, CD, and Movie share. 
	Prepend all of the property names with an underscore (_).

	Create getters for the title, isCheckedOut, and ratings properties. 
	Each getter should return the value saved to the matching property.

	Create a setter for the isCheckedOut property.

	Under your getters, create a method named toggleCheckOutStatus that changes the value saved to the _isCheckedOut property.

	Under .toggleCheckOutStatus(), create a method named getAverageRating. Return the average value of the ratings array.

	Let’s add a method named addRating that accepts one argument and uses .push() to add it to the end of the ratings array.
*/
class Media {
	constructor(title) {
		this._title = title;
		this._isCheckedOut = false;
		this._ratings = [];
	}

	get isCheckedOut() {
		return this._isCheckedOut;
	}

	get ratings() {
		return this._ratings;
	}

	get title() {
		return this._title;
	}

	set isCheckedOut(isCheckedOut) {
		this._isCheckedOut = _isCheckedOut;
	}

	toggleCheckOutStatus() {
		this._isCheckedOut = !this._isCheckedOut;
	}

	getAverageRating() {
		return Math.round(
			this.ratings.reduce((a, b) => a + b) / this.ratings.length);
	}

	addRating(arg) {
		this.ratings.push(arg);
	}
}

/*
	Next, we’’ll build a Book class that extends Media. 

	Call super on the first line of the Books‘s constructor method. 
	Pass it any arguments that the parent constructor uses.

	Use the remaining arguments to set the author and pages properties in Book.

	Since our Book class inherits Media‘s properties and getters, 
	we only need to create two new getters in the Book class.
*/
class Book extends Media {
	constructor(author, title, pages) {
		super(title);
		this._author = author;
		this._pages = pages;
	}

	get author() {
		return this._author;
	}

	get pages() {
		return this._pages;
	}
}

class Movie extends Media {
	constructor(director, title, runTime) {
		super(title);
		this._director = director;
		this._runtime = runTime;
	}

	get director() {
		return this._director;
	}

	get runtime() {
		return this.runtime;
	}
}
/*
Create a Book instance with the following properties:

Author: 'Bill Bryson'
Title: 'A Short History of Nearly Everything'
pages: 544
Save the instance to a constant variable named historyOfEverything
*/
const historyOfEverything = new Book(
	"Bill Bryson",
	"A Short History of Nearly Everything",
	544
);

//Call .toggleCheckOutStatus() on the historyOfEverything instance.
//Log the value saved to the isCheckedOut property in the historyOfEverything instance.
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);

//Call .addRating() three times on historyOfEverything with inputs of 4, 5, and 5.
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

//Call .getAverageRating() on historyOfEverything. Log the result to the console.
console.log(historyOfEverything.getAverageRating());
console.log(historyOfEverything.title);
/*
Create a Movie instance with the following properties:

Director: 'Jan de Bont'
Title: 'Speed'
Runtime: 116
Save the instance to a constant variable named speed.
*/
const speed = new Movie("Jan de Bont", "Speed", 116);

//Call .toggleCheckOutStatus() on the speed instance.
console.log(speed.isCheckedOut);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

//Call .addRating() three times on speed with inputs of 1, 1, and 5.
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

//Call .getAverageRating() on speed. Log the result to the console.
console.log(speed.getAverageRating());