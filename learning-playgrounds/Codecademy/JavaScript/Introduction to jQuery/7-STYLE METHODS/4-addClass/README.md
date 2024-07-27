STYLE METHODS

.addClass()

A JavaScript file can quickly get overloaded with styles if you regularly use the css method to modify element styles. It’s a best practice to group all of the style code in a CSS file, and use jQuery to add and remove the classes from elements — this approach aligns to a design principle called separation of concerns.

Separation of concerns is a design principle stating that code should be separated based on its purpose in a program. In web development, that generally means the structure of a page is defined in an HTML document, styles are stored in a CSS file, and code that defines dynamic behavior is stored in a JavaScript file.

To keep CSS properties in a CSS file, jQuery can add a CSS class to an element with a method named addClass. It’s syntax looks like this:


$('.example-class').addClass('active');


In the example above:

.addClass() is called on the jquery .example-class selector.

.addClass() adds the 'active' class to all .example-class elements.

Notice that the argument passed to addClass does not have a period preceding it. 

This is because it expects a class, and therefore only needs the name of the class.
