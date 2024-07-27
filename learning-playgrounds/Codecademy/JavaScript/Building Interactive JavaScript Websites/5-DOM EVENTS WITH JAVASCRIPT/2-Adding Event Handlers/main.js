/*
DOM EVENTS WITH JAVASCRIPT

Adding Event Handlers

It’s best practice to create named event handler functions, instead of anonymous functions. Your code will remain organized and reusable this way, even if your code gets complex. Check out the syntax:
*/

let eventHandlerFunction = function() {
  // this block of code will run
}

eventTarget.onclick = eventHandlerFunction;

/*
The .addEventListener() method is another common syntax for registering event handlers. An event listener waits for a specific event to occur and calls a named event handler function to respond to it. This method requires two arguments:

The event type as a string

The event handler function

Check out the syntax of an .addEventListener() method with a click event:
*/

eventTarget.addEventListener('click', eventHandlerFunction);

/*
You’ll want to use the .addEventListener() method to allow multiple event handlers to be registered to a single event without changing its other event handlers.
*/

// Add the code you want to test below:
let view = document.getElementById('view-button');
let close = document.getElementById('close-button');
let margo = document.getElementById('margo');

let open = function() {
  margo.style.display = 'block';
  close.style.display = 'block';
};

let hide = function() {
  margo.style.display = 'none';
  close.style.display = 'none';
};

view.onclick = open;
close.onclick = hide;

// Write your code here
let textChange = function () {
  view.innerHTML = 'Hello, World!';
}

let textReturn = function () {
  view.innerHTML = 'default';
}

view.addEventListener('click', textChange);
close.addEventListener('click', textReturn);




