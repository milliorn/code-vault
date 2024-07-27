import http from "http";
import fs from "fs";

const homePage = fs.readFileSync("./navbar-app/index.html");
const homeStyles = fs.readFileSync("./navbar-app/styles.css");
const homeImage = fs.readFileSync("./navbar-app/logo.svg");
const homeLogic = fs.readFileSync("./navbar-app/browser-app.js");
const server = http.createServer((req, res) => {
	const url = req.url;
	console.log(url);
	
	if (url === "/") {
		res.writeHead(200, { "content-type": "text/html" });
		res.write(homePage);
		console.log(`Hello Home!`);
		res.write(`<h1>Home Page</h1>`);
		res.end();
	} else if (url === "/about") {
		res.writeHead(200, { "content-type": "text/html" });
		console.log(`Hello About!`);
		res.write(`<h1>About Page</h1>`);
		res.end();
	} else if (url === "styles.css") {
		res.writeHead(200, { "content-type": "text/css" });
		console.log(`Hello styles!`);
		res.write(homeStyles);
		res.end();
	} else if (url === "logo.svg") {
		res.writeHead(200, { "content-type": "image/svg+xml" });
		console.log(`Hello logo!`);
		res.write(homeImage);
		res.end();
	} else if (url === "browser-app.js") {
		res.writeHead(200, { "content-type": "text/javascript" });
		console.log(`Hello browser!`);
		res.write(homeLogic);
		res.end();
	} else {
		res.writeHead(404, { "content-type": "text/html" });
		console.log(`Hello 404!`);
		res.write(`<h1>404 Page Not Found</h1>`);
		res.end();
	}
});

server.listen(5000);
