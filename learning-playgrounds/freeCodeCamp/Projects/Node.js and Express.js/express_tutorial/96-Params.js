import express from "express";
const app = express();
import products from "./data.js";

const port = 5000;

app.get("/", (req, res) => {
	res.send('<h1> Home Page</h1><a href="/api/products">products</a>');
});

app.get("/api/products", (req, res) => {
	const result = products.products.map((product) => {
		const { id, name, image } = product;
		return { id, name, image };
	});

	res.json(result);
});

app.get("/api/products/:productID", (req, res) => {
	const { productID } = req.params;
	const result = products.products.find(
		(product) => product.id === Number(productID)
	);

	if (!result) {
		return res.status(404).send("Product Does Not Exist!");
	}

	return res.json(result);
});

app.get("api/products/:productID/reviews/:reviewID", (req, res) => {
	console.log(rq.params);
	res.send("Hello World!");
});

app.get("/api/v1/query", (req, res) => {
	const { search, limit } = req.query;
	let sortedProducts = [...products.products];

	if (search) {
		sortedProducts = sortedProducts.filter((product) => {
			return product.name.startsWith(search);
		});
	}
	if (limit) {
		sortedProducts = sortedProducts.slice(0, Number(limit));
	}

	if (sortedProducts.length < 1) {
		return res.status(200).json({ success: true, data: [] });
	}

	return res.status(200).json(sortedProducts);
});

app.listen(port, () => {
	console.log(`App is listening on http://localhost:${port}`);
});
