const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
	constructor(field = [[]]) {
		this.field = field;
		this.x = 0;
		this.y = 0;
		this.field[0][0] = pathCharacter;
		this.playing = true;
	}

	runGame() {
		while (this.playing) {
			this.print();
			this.askQuestion();

			if (!this.isInBounds()) {
				console.log("Out of bounds instruction!");
				this.playing = false;
				break;
			} else if (this.isHole()) {
				console.log("Sorry, you fell down a hole!");
				this.playing = false;
				break;
			} else if (this.isHat()) {
				console.log("Congrats, you found your hat!");
				this.playing = false;
				break;
			}

			// Update current location
			this.field[this.y][this.x] = pathCharacter;
		}
	}

	askQuestion() {
		const answer = prompt("Which way? ").toUpperCase();
		switch (answer) {
			case "U":
				this.y -= 1;
				break;
			case "D":
				this.y += 1;
				break;
			case "L":
				this.x -= 1;
				break;
			case "R":
				this.x += 1;
				break;
			default:
				console.log("Enter U, D, L or R.");
				this.askQuestion();
				break;
		}
	}

	isInBounds() {
		return (
			this.y >= 0 &&
			this.x >= 0 &&
			this.y < this.field.length &&
			this.x < this.field[0].length
		);
	}

	isHat() {
		return this.field[this.y][this.x] === hat;
	}

	isHole() {
		return this.field[this.y][this.x] === hole;
	}

	print() {
		this.field.forEach((e) => {
			console.log(e.toString().replace(/,/g, ''));
		});
	}

	static generateField(height, width, percentage = 0.1) {
		const field = new Array(height).fill(0).map(() => new Array(width));
		for (let y = 0; y < height; y++) {
			for (let x = 0; x < width; x++) {
				const prob = Math.random();
				field[y][x] = prob > percentage ? fieldCharacter : hole;
			}
		}
		// Set the "hat" location
		const hatLocation = {
			x: Math.floor(Math.random() * width),
			y: Math.floor(Math.random() * height),
		};
		// Make sure the "hat" is not at the starting point
		while (hatLocation.x === 0 && hatLocation.y === 0) {
			hatLocation.x = Math.floor(Math.random() * width);
			hatLocation.y = Math.floor(Math.random() * height);
        }
        
		field[hatLocation.y][hatLocation.x] = hat;
		return field;
	}
}

const maximum = 10;
const minimum = 3;
const range = maximum - minimum + 1;
const r1 = Math.floor(Math.random() * range) + minimum;
const r2 = Math.floor(Math.random() * range) + minimum;
const r3 = Math.random() * Math.random();
const myfield = new Field(Field.generateField(r1, r2, r3));

myfield.runGame();
