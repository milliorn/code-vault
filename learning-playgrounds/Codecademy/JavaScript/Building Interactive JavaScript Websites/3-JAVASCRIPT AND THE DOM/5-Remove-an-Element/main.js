/*
JAVASCRIPT AND THE DOM

Remove an Element

In addition to modifying or creating an element from scratch, the DOM also allows for the removal of an element. The .removeChild() method removes a specified child from a parent.

Because the .querySelector() method returns the first paragraph, the following code would remove the first paragraph in the document:
*/

let paragraph = document.querySelector('p');
document.body.removeChild(paragraph);

/*
It’s possible to also specify a different parent with the .querySelector() method, as long as you remove an element nested within that parent element.

If you want to hide an element because it does not need to be loaded initially, the .hidden property allows you to hide it by assigning it as true or false:
*/

document.getElementById('sign').hidden = true;

/*
The code above did not remove the element from the DOM, but rather hid it. This is not the same as setting the CSS visibility property to hidden. For a list of the best use cases for this property, read a list in the MDN documentation.
*/

const parent = document.querySelector("#more-destinations");

const child = document.querySelector("#oaxaca");

parent.removeChild(child);
