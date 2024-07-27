/*
JAVASCRIPT AND THE DOM

Style an element

Another way to modify an element is by changing its CSS style. The .style property of a DOM element provides access to the inline style of that HTML tag.

The syntax follows an element.style.property format, with the property representing a CSS property.

For example, the following code selects the first element with a class of blue and assigns blue as the background-color:
*/

let blueElement = document.querySelector('.blue');

blueElement.style.backgroundColor = 'blue';

/*
Unlike CSS, the DOM style property does not implement a hyphen such as background-color, but rather camel case notation backgroundColor.

The following chaining syntax would also work:
*/

document.querySelector('.blue').style.fontFamily = 'Roboto';

/*
*/

//  The syntax follows an element.style.property format, with the property representing a CSS property.


document.body.style.backgroundColor = "#201F2E";
