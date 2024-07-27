/*
The document keyword

The Document Object Model, abbreviated DOM, is a powerful tree-like structure that organizes the elements on a web page and allows scripting languages to access them. This lesson will focus on some of the most useful methods and properties of the DOM Interface in JavaScript. This interface is implemented by every modern browser.

First things first! The document object in JavaScript is the door to the DOM structure. The document allows you to access the root node of the DOM tree. Before you can access a specific element in the page, first you must access the document structure itself. The document allows scripts to access children of the DOM as properties.

For example, if you wanted to access the <body> element in your script, you could access it as a property of the document by typing document.body. This property will return the body element of that DOM.

Similarly, you could access the <title> element with the .title property. See a comprehensive list of all document properties.JAVASCRIPT AND THE DOM

Tweak an Element

When using the DOM in your script to access an HTML element, you also have access to all of that element’s properties.

This includes the ability to modify the contents of the element as well as its attributes and properties— that can range from modifying the text inside a p element to assigning a new background color to a div.

You can access and set the contents of an element with the .innerHTML property.

For example, the following code reassigns the inner HTML of the body element to the text ‘The cat loves the dog’:

document.body.innerHTML = 'The cat loves the dog.';

The .innerHTML property can also add any valid HTML, including properly formatted elements. The following example assigns an h2 element as a child inside the <body> element:

document.body.innerHTML = '<h2>This is a heading</h2>'; 
*/


document.body.innerHTML = '<h2>This is the text of the body element</h2>'; 
