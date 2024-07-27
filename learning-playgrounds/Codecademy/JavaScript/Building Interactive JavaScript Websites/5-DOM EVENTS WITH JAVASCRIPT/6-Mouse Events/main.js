/*
DOM EVENTS WITH JAVASCRIPT

Mouse Events

When you click down or move the mouse device mouse events fire. Outside of the click event, there are other events that can be fired when using a mouse.

The mousedown event is fired when the user presses a mouse button down. This is different from a click event because mousedown doesn’t need the mouse button to be released to fire.

The mouseup event is fired when the user releases the mouse button. This is different from the click and mousedown events because mouseup doesn’t depend on the mouse button being pressed down to fire.

The mouseover event is fired when the mouse enters the content of an element.

The mouseout event is fired when the mouse leaves an element.
*/

// These variables store the boxes on the side
let itemOne = document.getElementById('list-item-one');
let itemTwo = document.getElementById('list-item-two');
let itemThree = document.getElementById('list-item-three');
let itemFour = document.getElementById('list-item-four');
let itemFive = document.getElementById('list-item-five');
let resetButton = document.getElementById('reset-button');

// This function programs the "Reset" button to return the boxes to their default styles
let reset = function() {
  itemOne.style.width = ''
  itemTwo .style.backgroundColor = ''
  itemThree.innerHTML = 'The mouse must leave the box to change the text'
  itemFive.style.display = "none"
};
resetButton.onclick = reset;

// Write code for the first list item
itemOne.onmouseover = function(){
  itemOne.style.width = '430px';
};

// Write code for the second list item
itemTwo.onmouseup = function(){
  itemTwo.style.backgroundColor = 'green'
};

// Write code for the third list item
itemThree.onmouseout = function(){
  itemThree.innerHTML = 'The mouse has left the element.'
};

// Write code for the fourth list item
itemFour.onmousedown = function(){
  itemFive.style.display = 'block';
};
