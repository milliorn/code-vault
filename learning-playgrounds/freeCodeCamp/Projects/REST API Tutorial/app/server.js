const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

/* initializes the Express server. */
const app = express();

/* initializes the body-parser plugin */
app.use(bodyParser.json());

/* get data from a server */
const helloWorld = (req, res) => res.send("Hello World!");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

/* implement a POST request into our server. */
app.post("/add", (req, res) => {
  const { a, b } = req.body;
  res.send(`The sum is: ${a + b}`);
});

app.listen(5000, () => {
  console.log(`Server is running on port 5000.`);
});

/* get the value of the inputs */
function sendData(e) {
  e.preventDefault();
  const a = document.querySelector("#num1").value;
  const b = document.querySelector("#num2").value;

  fetch("/add", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      a: parseInt(a),
      b: parseInt(b),
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      const { result } = data;
      document.querySelector(".result").innerText = `The sum is: ${result}`;
    })
    .catch((err) => console.log(err));
}
