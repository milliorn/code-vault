/*
Here we require in the 'events' module and save a reference to it in an events variable
In app.js,
we’ve required in the events core module and written a function listenerCallback which expects to be
passed data and will log a string to the console which incorporates that data.
Now it’s time to create an event emitter.
Create a new variable, myEmitter and assign as its value a new instance of the event emitter class.

Invoke myEmitter‘s .on() method passing in 'celebration' as the event name and listenerCallback as the
listener callback function.

Let’s emit a 'celebration' event! Invoke myEmitter‘s .emit() method passing in 'celebration' as the
event name and a string of your choice as the second argument.
*/
let events = require('events');

let listenerCallback = (data) => {
    console.log('Celebrate ' + data);
}

const myEmitter = new events.EventEmitter();

myEmitter.on('celebration', listenerCallback);

myEmitter.emit('celebration', 'success');