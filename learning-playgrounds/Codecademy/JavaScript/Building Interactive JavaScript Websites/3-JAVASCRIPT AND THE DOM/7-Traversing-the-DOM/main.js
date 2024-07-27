/*
JAVASCRIPT AND THE DOM

Traversing the DOM

In the DOM hierarchy, parent and children relationships are defined in relation to the position of the root node.

A parent node is the closest connected node to another node in the direction towards the root.

A child node is the closest connected node to another node in the direction away from the root.

These relationships follow the nesting structure present in HTML code. Elements nested within one HTML tag are children of that parent element.

Each DOM element node has a .parentNode and .children property. The property will return a list of the element’s children and return null if the element has no children.

The .firstChild property will grant access to the first child of that parent element.
*/

let first = document.body.firstChild;

first.innerHTML = "First child";

first.parentNode.innerHTML = "I am the parent and my inner HTML has been replaced!";
