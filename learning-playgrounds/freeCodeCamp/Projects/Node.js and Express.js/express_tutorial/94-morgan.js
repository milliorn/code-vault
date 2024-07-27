import express from "express";
import morgan from 'morgan';
import authorize from './authorize.js';
import logger from "./logger.js";

const app = express();
const port = 5000;

app.use(morgan('tiny'));

app.get("/", logger, (req, res) => {
	res.send("Home");
});

app.get("/about", (req, res) => {
	res.send("About");
});

app.get("/api/products", logger, (req, res) => {
	res.send("Products");
});

app.get("/api/items", (req, res) => {
	console.log(req.user);
	res.send("Items");
});

app.listen(port, () => {
	console.log(`App is listening on http://localhost:${port}`);
});
