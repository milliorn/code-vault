const express = require("express");
const app = express();

const { quotes } = require("./data");
const { getRandomElement } = require("./utils");

const PORT = process.env.PORT || 4001;

app.use(express.static("public"));

/*
Your API should have a GET /api/quotes route. 
This route should return all quotes from the data if the request has no query params.
*/
app.get("/api/quotes", (req, res) => {
	if (req.query.person === undefined) {
		res.send({ quotes: quotes });
	} else {
		const quotesPerson = quotes.filter(
			(quote) => quote.person === req.query.person
		);
		res.send({
			quotes: quotesPerson,
		});
	}
});

/*
Your API should have a GET /api/quotes/random route. 
This route should send back a random quote from the quotes data. 
*/
app.get("/api/quotes/random", (req, res) =>
	res.send({ quote: getRandomElement(quotes) })
);

/*
Your API should have a POST /api/quotes route for adding new quotes to the data. 
New quotes will be passed in a query string with two properties: quote with the quote text itself, 
and person with the person who is credited with saying the quote.
*/

app.post("/api/quotes", (req, res) => {
	const newQuote = {
		quote: req.query.quote,
		person: req.query.person,
	};

	if (newQuote.quote && newQuote.person) {
		quotes.push(newQuote);
		res.send({ quote: newQuote });
	} else {
		res.status(400).send();
	}
});

// Set your server to listen on the PORT variable.
app.listen(PORT, () =>
	console.log(`App listening at http://localhost:${PORT}`)
);
