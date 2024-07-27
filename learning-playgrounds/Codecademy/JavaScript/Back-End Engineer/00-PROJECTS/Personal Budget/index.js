const express = require("express");
const morgan = require("morgan");

const envelopes = require("./envelopes.js");
const { createId, findById } = require("./helpers/db-helpers");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => res.send(envelopes));

app.get("/envelopes/auto", (req, res) => res.send(`auto ${envelopes.auto}`));
app.get("/envelopes/clothing", (req, res) =>
	res.send(`clothing ${envelopes.clothing}`)
);
app.get("/envelopes/groceries", (req, res) =>
	res.send(`groceries ${envelopes.groceries}`)
);
app.get("/envelopes/rent", (req, res) => res.send(`rent ${envelopes.rent}`));
app.get("/envelopes/savings", (req, res) =>
	res.send(`savings ${envelopes.savings}`)
);
app.get("/envelopes/utility", (req, res) =>
	res.send(`utility ${envelopes.utility}`)
);
app.get("/envelopes/:id", (req, res) => {
	try {
		const { id } = req.params;
		const envelope = findById(envelopes, id);

		if (!envelope) {
			return res.status(404).send({
				message: "Envelope Not Found",
			});
		}
	} catch (error) {
		res.status(500).send(error);
	}
});

app.post("/envelopes", (req, res) => {
	try {
		const { title, budget } = req.body;
		const newId = createId(envelopes);
		const newEnvelope = {
			id: newId,
			title,
			budget,
		};
		envelopes.push(newEnvelope);
		res.status(201).send(newEnvelope);
	} catch (err) {
		res.status(500).send(err);
	}
});

app.listen(3000, (err) =>
	err
		? console.log(err)
		: console.log(`\nRunning -> http://localhost:${PORT}\n`)
);
