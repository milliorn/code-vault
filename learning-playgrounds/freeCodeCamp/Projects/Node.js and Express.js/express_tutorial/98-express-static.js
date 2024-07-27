import express from "express";
import { resolve } from "path";

const app = express();
const port = 5000;

// setup static and middleware
app.use(express.static("./public"));

app.all("*", (req, res) => {
	res.status(404).send("resource not found");
});

app.listen(port, () => {
	console.log(`App is listening on http://localhost:${port}`);
});
