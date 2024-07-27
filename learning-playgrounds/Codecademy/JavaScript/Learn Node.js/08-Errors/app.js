const api = require('./api.js');

// An error-first callback

let errorFirstCallback = (err, data) => {
    if (err) {
        console.log(`Something went wrong. ${err}\n`);
    } else {
        console.log(`Something went right. Data: ${data}\n`);
    }
};

/*
At the botton of app.js,
invoke the api.errorProneAsyncApi()
method with 'problematic input' as the first argument and the error-first callback as the second.
*/
api.errorProneAsyncApi('problematic input', errorFirstCallback);