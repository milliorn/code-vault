# Using Code Blocks

A method can take a block as a parameter. That’s what .each has been doing this whole time: taking a block as a parameter and doing stuff with it! You just didn’t notice because we didn’t use the optional parentheses. We are sneaky.

Passing a block to a method is a great way of abstracting certain tasks from the method and defining those tasks when we call the method. Abstraction is an important idea in computer science, and you can think of it as meaning “making something simpler.” Imagine if when you wanted to house hunt, you had to say, “Honey, let’s go look at configurations of concrete, plywood, and vinyl siding.” That’d be crazy! Just like saying “house” simplifies listing its components, using a block to define the task you want the method (like .each) to do simplifies the task at hand.
