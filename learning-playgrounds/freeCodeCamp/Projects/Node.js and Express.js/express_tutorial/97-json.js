import express from "express";
import products from './data.js';

const app = express();
const port = 5000;

app.get("/", (req, res) => {
	res.json(products);
});

app.listen(port, () => {
	console.log(`App is listening on http://localhost:${port}`);
});
