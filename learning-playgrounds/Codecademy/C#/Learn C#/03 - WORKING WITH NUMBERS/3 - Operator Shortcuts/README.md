WORKING WITH NUMBERS

Operator Shortcuts

Often we need to update a variable in our program. We can do so by modifying that variable using an arithmetic expression, then re-saving it to the same variable name:

int apple = 0;
apple = apple + 1;
Console.Write(apple); // prints 1
Programmers are always looking for shortcuts. For instance, we can condense the same program above using the shorthand ++. The combined addition signs represent the idea of incrementing by one. We can do the same with the subtraction symbol --.

// a shorter way to do the same thing 
int apple = 0;
apple++;
Console.Write(apple); // prints 1
If we want the amount to increment by another value, say 3, we would do the following:

int apple = 0;
apple += 3; // is the same as apple = apple + 3
Console.Write(apple); // prints 3
Again, if we want to decrement, you would do -=3.

Ultimately, programmers disagree on this, so everyone does it differently! On Codecademy, we prefer clarity over conciseness, so we’ll use the long form (apple = apple + 3) except for incrementing by one (apple++).


