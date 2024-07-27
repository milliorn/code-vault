REFERENCE FUNDAMENTALS
Introduction to References
What do you think will be printed by this code?

Dissertation diss1 = new Dissertation();
Dissertation diss2 = diss1;
diss1.CurrentPage = 0;
diss2.CurrentPage = 16;
Console.WriteLine(diss1.CurrentPage);
Console.WriteLine(diss2.CurrentPage);
Did you guess 0 and 16? The answer is 16 and 16!

To understand what’s happening here, we need to understand references. They might not be obvious in this code, but learning how to use them unlocks a whole new set of superpowers in C#. This lesson explains:

How references work in C#
Why references are useful
How to upcast a reference
How to create a null reference
Instructions
This lesson uses the Book, Dissertation, and Diary classes and the IFlippable interface. Look through each file to get acquainted.

IFlippable is the interface
Book is the base class
Dissertation and Diary are classes that extend the base class and implement the interface
