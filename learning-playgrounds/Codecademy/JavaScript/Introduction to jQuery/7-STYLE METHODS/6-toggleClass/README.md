STYLE METHODS

.toggleClass()

Similar to other effects methods, you can use a toggle method instead of chaining the .addClass() and .removeClass() methods together.

The .toggleClass() method adds a class if an element does not already have it, and removes it if an element does already have it. Its syntax looks like:


$('.example-class').toggleClass('active');


In the example above:

.toggleClass() is called on .example-class elements.
.toggleClass() will add the 'active' class to .example-class elements if they do not have it already.
.toggleClass() will remove the 'active' class from .example-class elements if they do have it already.
