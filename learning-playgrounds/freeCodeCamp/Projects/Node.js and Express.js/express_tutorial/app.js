import express from "express";
import { people } from "./routes/people.js";

const app = express();
const port = 5000;

app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/people", people);

app.post("/login", (req, res) => {
	const { name } = req.body;
	if (name) {
		return res.status(200).send(`Welcome ${name}`);
	}

	res.status(401).send("Please Provide Credentials");
});

app.listen(port, () => {
	console.log(`App is listening on http://localhost:${port}`);
});
