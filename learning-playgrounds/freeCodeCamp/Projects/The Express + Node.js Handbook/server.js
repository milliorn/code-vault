const cookieParser = require("cookie-parser");
// You require the check and validationResult objects from the package:
const { check, validationResult } = require("express-validator");
// First, we import the express package to the express value.
const express = require("express");
// We instantiate an application by calling the express() method.
const app = express();
const port = process.env.PORT || 8080;

// Pug
app.set("view engine", "pug");

// There is a method for every HTTP verb: get(), post(), put(), delete(), and patch():
// app.get('/', (req, res) => { /* */ })
// app.post('/', (req, res) => { /* */ })
// app.put('/', (req, res) => { /* */ })
// app.delete('/', (req, res) => { /* */ })
// app.patch('/', (req, res) => { /* */ })

// Once we have the application object, we tell it to listen for GET requests on the / path
app.get("/helloWorld", (req, res) => {
  res.send("Hello World!");
});

// You can send JSON to the client by using Response.json(), a useful method.
app.get("/json", (req, res) => {
  res.json({ username: "Scott" });
});

// Use the Response.cookie() method to manipulate your cookies.
app.get("/cookie", (req, res) => {
  res.cookie("username", "scott", {
    domain: ".foo.com",
    path: "/administrator",
    secure: true,
  });

  res.cookie("username", "scott", {
    expires: new Date(Date.now() + 900000),
    httpOnly: true,
  });

  res.send("Hello Cookie!");
});

app.get("/clearCookie", (req, res) => {
  // A cookie can be cleared with
  res.clearCookie("username");
  res.send("Clean Cookie");
});

// You can access all the HTTP headers using the Request.headers property:
app.get("/headers", (req, res) => {
  res.send(req.headers);
});

// Use the Request.header() method to access one individual request header's value:
app.get("/agent", (req, res) => {
  req.header("User-Agent");
});

// Redirects are common in Web Development. You can create a redirect using the Response.redirect() method
app.get("/jsons", (req, res) => {
  // This creates a 302 redirect.
  res.redirect("/json");
});

// A 301 redirect is made in this way:
app.get("/js", (req, res) => {
  // A 301 redirect is made in this way:
  res.redirect(301, "/json");
});

// What if we want to listen for custom requests? Maybe we want to create a service that accepts a string and returns it as uppercase – and we don't want the parameter to be sent as a query string, but as part of the URL. If we send a request to /uppercase/test, we'll get TEST in the body of the response.
app.get("/uppercase/:theValue", (req, res) => {
  res.send(req.params.theValue.toUpperCase());
});

// You can use regular expressions to match multiple paths with one statement:
app.get(/post/, (req, res) => {
  res.sendStatus(200);
});

// Create an about view:
app.get("/about", (req, res) => {
  res.render("about", { name: "Scott" });
});

// Once a user hits a route that sends a file using this method, browsers will prompt the user to download.
app.get("/download", (req, res) => {
  res.download("./public/index.html", "website index html");
});

// If you have an index.html file in public/, that will be served if you now hit the root domain URL (http://localhost:3000)
app.use(express.static("public"));

// parse cookies into the req.cookies object.
app.use(cookieParser);

app.listen(3000, () => {
  console.log("Express listening on http://localhost:3000/.");
});
