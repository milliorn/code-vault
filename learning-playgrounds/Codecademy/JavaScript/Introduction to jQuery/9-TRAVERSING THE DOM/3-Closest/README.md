TRAVERSING THE DOM

Closest

To select an element close to the current element, we can use jQuery’s .closest() method.

The .closest() method will travel up the DOM tree to find a specified selector closest to it. Its syntax looks like:


$('.example-class-one').closest('.another-class');


In the example above:

The .closest() method is called on '.example-class' elements.
The method then targets the element selected by the .closest() method with a class of '.another-class'.


<div class='.another-class'>
  <p class='.example-class-one'>1</p>
</div>
<div class='.another-class'>
  <p class='.example-class-two'>2</p>
</div>


Given this HTML, the jQuery above would select the <div> element that wraps the paragraph with a value of 1, because it is the closest element, up the DOM tree, with the class .another-class.
