WORKING WITH TEXT

String Concatenation

Often, we want to combine strings together, or combine strings with a value that we’ve saved to a variable.

A common way to do is by using string concatenation. String concatenation is when we combine strings using the addition symbol (+), literally adding one string to another.

string yourFaveMusician = "David Bowie";
string myFaveMusician = "Solange";

Console.WriteLine("Your favorite musician is " + yourFaveMusician + " and mine is " + myFaveMusician + ".");
We write the first part of our string, end it with a double quote ("), include an addition symbol and then put our variable. However, there are a couple of things to pay attention to:

If we want to concatenate a string with something that is another data type, C# will implicitly convert that value to a string.
Make sure that you include spaces and proper punctuation so that when it prints out, your variable strings aren’t squished between the rest of the statement. Notice how we have to create a one character string at the end to include a period.

