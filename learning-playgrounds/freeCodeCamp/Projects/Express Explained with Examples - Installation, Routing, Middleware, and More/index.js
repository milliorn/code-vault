const bodyParser = require('body-parser'); // import body-parser
const cookieParser = require('cookie-parser'); // import cookie-parser
const express = require('express'); // import express
const morgan = require('morgan'); // import morgan
const app = express(); // initialize express
const port = 3000; // port to run server on

// use body-parser
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// use cookie-parser
app.use(cookieParser());

// use morgan
app.use(morgan('dev'));

app.use((request, response, next) => {
  console.log("A new request received at " + Date.now());
  next();
}); 

app.use(express.static('public')); // serve static files from public folder

// import routes
app.get('/hello', (request, response) => response.send('Hello World!')); // default route

app.get('*', (request, response) => response.send('404 Not Found')); // 404 route

// start server
app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));