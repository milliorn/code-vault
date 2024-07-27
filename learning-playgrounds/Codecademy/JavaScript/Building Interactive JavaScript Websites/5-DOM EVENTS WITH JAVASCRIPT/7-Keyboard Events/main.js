/*
DOM EVENTS WITH JAVASCRIPT

Keyboard Events

Another popular type of event is the keyboard event! keyboard events are triggered by user interaction with keyboard keys in the browser.

The keydown event is fired while a user presses a key down. Key 

The keyup event is fired while a user releases a key. Key Up Event 

The keypress event is fired when a user presses a key down and releases it. This is different from using keydown and keyup events together, because those are two complete events and keypress is one complete event. 

Keyboard events have unique properties assigned to their event objects like the .key property that stores the values of the key pressed by the user. You can program the event handler function to react to a specific key, or react to any interaction with the keyboard.
*/

let ball = document.getElementById('float-circle');

// Write your code below
let up = function() {
  ball.style.bottom = '250px'
};

let down = function() {
  ball.style.bottom = '50px'
};

document.onkeydown = up;
document.onkeyup = down;
