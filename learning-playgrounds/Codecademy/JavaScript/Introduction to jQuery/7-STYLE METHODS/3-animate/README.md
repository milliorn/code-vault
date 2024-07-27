STYLE METHODS

.animate()

The jQuery .animate() method enhances the visual possibilities by making CSS value changes over a period of time.

The first argument passed to .animate() is a JavaScript object of CSS property/value pairs that represent an element’s end state. This is identical to the .css() method. For example, the following object could be passed to the .animate() method to change an element’s height, width, and border thickness


{
  height: '100px',
  width : '100px',
  borderWidth : '10px'
}


Note that the names of CSS properties in the JavaScript object don’t have spaces or dashes and are camelCased.

The second parameter of the .animate() method determines how long the animation takes to complete. It is optional; if you do not provide an argument, the default value is 400 milliseconds. You can use a number (in milliseconds) or the strings 'fast' or 'slow'. Below is an example of the .animate() method:


$('.example-class').animate({
  height: '100px',
  width: '100px',
  borderWidth: '10px'
}, 500);


In the example above, the height, width, and border width will change to 100px, 100px, and 10px respectively over a 500 millisecond period.
