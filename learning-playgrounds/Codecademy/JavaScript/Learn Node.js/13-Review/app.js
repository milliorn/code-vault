const http = require('http');
let { requestListener } = require('./callbackFile.js');
const PORT = process.env.PORT || 4001;

/*
    It’s time to make the web server!
    In app.js,
    create a variable server and assign to it the value of invoking the http.createServer().
    Remember, you’ll need to pass a callback function in as the argument to http.createServer().
    We’ve already required in the function requestListener from the callbackFile.js file.
*/
const server = http.createServer(requestListener);
/*
    Now that we have the server we need it to start listening for incoming requests!
    We supplied a PORT variable at the top of app.js.
    Invoke the server.listen() method passing in PORT as the argument.
*/
server.listen(PORT);