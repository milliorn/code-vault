console.log("first");

setTimeout(() => {
	console.log("second");
}, 0);

console.log("third");

setInterval(() => {
    console.log(`Hello world!`)
}, 2000);

console.log(`Hello Earth!`);
