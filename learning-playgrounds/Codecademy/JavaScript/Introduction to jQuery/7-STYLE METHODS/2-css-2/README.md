STYLE METHODS

CSS II

In addition to changing one property at a time, the .css() method can accept many CSS property/value pairs at once. You must pass the .css() method a JavaScript object with a list of key/value pairs like this:


{
  color: '#FFFFFF',
  backgroundColor: '#000000',
  fontSize: '20px'
}


There are a few important differences between the key/value pairs in the object above and the arguments from last exercise. Let’s consider these differences below:

The object is wrapped by an opening and closing curly brace: {}.

Inside the object, there are three key/value pairs. The keys in the example 

object are color, backgroundColor, and fontSize.

The values come after the colon : of each key. For instance, fontSize is a key, and its value is '20px'.

When referencing CSS properties in an object, the property names are camelCased — they are modified to have no quotes or spaces, and to start each new word with a capital letter. Therefore, background-color becomes backgroundColor, and 'font-size' becomes fontSize.

To set multiple properties at once, you can pass the whole object into the .css() method as a single element.


$('.example-class').css({
  color: '#FFFFFF',
  backgroundColor: '#000000',
  fontSize: '20px'
})


In the example above, we use the .css() method to change the color, background color, and font size values of the .example-class element.
