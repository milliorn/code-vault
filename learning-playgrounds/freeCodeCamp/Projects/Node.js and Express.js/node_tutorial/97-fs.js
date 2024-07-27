import {
	readFile,
	writeFile,
} from "fs";


console.log("Start async");

readFile("./content/first.txt", "utf8", (err, result) => {
	if (err) {
		console.log(err);
		return;
	}
	let first = result;
	readFile("./content/second.txt", "utf8", (er, res) => {
		if (er) {
			console.log(err);
			return;
		}
		let second = res;
		writeFile(
			"./content/result-async.txt",
			`Here is the result : ${first}, ${second}`,
			(e) => {
				if (e) {
					console.log(e);
					return;
				}
				console.log("done with this task");
			}
		);
	});
});
