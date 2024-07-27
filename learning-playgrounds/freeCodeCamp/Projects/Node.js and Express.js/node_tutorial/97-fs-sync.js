import {
	readFileSync,
	writeFileSync,
	accessSync,
	appendFileSync,
	copyFileSync,
	existsSync,
	openSync,
	readdirSync,
	realpathSync,
} from "fs";

let first = readFileSync("./content/first.txt", "utf8");
let second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

writeFileSync(
	"./content/result-async.txt",
	`Here is the result. ${first} and ${second}.`
);

try {
	accessSync("./content/first.txt", fs.constants.R_OK);
	console.log("File can be read");
} catch (err) {
	console.error("No Read access");
}

try {
	appendFileSync("./content/result-sync.txt", first);
	console.log('The "data to append" was appended to file!');
} catch (err) {
	console.error(err);
}

try {
	copyFileSync("./content/result-sync.txt", "./content/first.txt");
	console.log('The "data to copy" was copy to file!');
} catch (err) {
	console.error(err);
}

if (existsSync("/etc/passwd")) {
	console.log("The path exists.");
} else {
	console.log("The path doesn't exists.");
}

console.log(openSync("./content"));
console.log(readdirSync("./content"));
console.log(realpathSync('./content'));