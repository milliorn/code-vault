const input = "turpentine and turtles";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];

for (const i of input) {
	for (const j of vowels) {
		if (i === j || i === "e" || i === "u") {
			resultArray.push(i);
		}
	}
}

console.log(resultArray.join("").toUpperCase());
