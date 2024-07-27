const rot13 = (str, amount = 13) => {
	let output = [];
	for (let i = 0; i < str.length; i++) {
		let char = str[i];
		if (char.match(/[a-z]/i)) {
			let code = str.charCodeAt(i);
			char = String.fromCharCode(((code - 65 + amount) % 26) + 65);
		}
		output.push(char);
	}
	return output.join("");
};

console.log(rot13("SERR PBQR PNZC"));
