require("dotenv").config();

const axios = require("axios");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const PORT = 8000;

app.get("/flights", (_req, res) => {
  const options = {
    method: "GET",
    url: "https://toronto-pearson-airport.p.rapidapi.com/departures",
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": "toronto-pearson-airport.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then((response) => {
      console.log(response.data);
      res.json(response.data.slice(0, 6));
    })
    .catch((error) => {
      console.error(error);
    });
});

app.listen(PORT, () =>
  console.log(`running on http://localhost:${PORT}/flights`)
);
