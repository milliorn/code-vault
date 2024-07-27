/*
JAVASCRIPT AND THE DOM

Create and Insert Elements

Just as the DOM allows scripts to modify existing elements, it also allows for the creation of new ones. The .createElement(tagName) method creates a new element based on the specified tag name. However, it does not append it to the document. It creates an empty element with no inner HTML.

In order to create an element and add it to the web page, you must assign it to be the child of an element that already exists on the DOM. We call this process appending. The .appendChild() method will add a child element as the last child node.

The following code creates a new paragraph element, adds text to the new element’s innerHTML, and appends it to the body of the document:
*/

let paragraph = document.createElement('p');
paragraph.innerHTML = 'The text inside paragraph';
document.body.appendChild(paragraph);

/*
Unlike .innerHTML the .appendChild() method does not replace the content inside of the parent, in this case body. Rather, it appends the element as the last child of that parent.
*/

let li = document.createElement("li");
li.innerHTML = "Oaxaca, Mexico";
document.getElementById("more-destinations").appendChild(li);
