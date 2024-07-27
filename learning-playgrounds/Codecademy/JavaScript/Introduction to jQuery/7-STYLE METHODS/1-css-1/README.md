STYLE METHODS

.css()

To modify CSS properties of an element, jQuery provides a method called .css(). This method accepts an argument for a CSS property name, and a corresponding CSS value.

It’s syntax looks like:


$('.example-class').css('color', '#FFFFFF');


Let’s break the example above into two pieces:


We call the .css() method on .example-class. The first argument is the CSS property we want to change. In this case, that’s 'color'.

The second argument specifies the new value for the given property in the first argument. In this case, the .css() method changes the color of .example-class elements to '#FFFFFF'.

Notice, both of the inputs to the .css() method are strings.
