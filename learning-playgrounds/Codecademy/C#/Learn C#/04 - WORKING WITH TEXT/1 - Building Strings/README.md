WORKING WITH TEXT

Building Strings

A string is a group of characters surrounded by quotation marks, like "https://codecademy.com" or "To be or not to be." A string is just a collection of a smaller data type, char, which is a single character like “a” or “?”.

To define a variable as a string, you write the data type, then the variable name. Then set it equal to the value, which is inside of quotation marks :

string variableName = "puppy";
The variable is named variableName, it’s of type string, and it’s value is "puppy".

Escape Character Sequences
What happens when you need to include quotes in a string? You can use an escape sequence. An escape sequence places a backslash (\) before the inner quotation marks, so the program doesn’t read them accidentally as the end of sequence.

string withoutSlash = "Ifemelu said, "Hello!"";

string withSlash = "Ifemelu said, \"Hello!\"";
We can use escape character sequences to create a newline. That means that when we print the string to the console, it will print that line below the rest. If printed on its own, it will create an empty line. To create a newline, use the character combination \n.

string newLine = "Ifemelu walked \n to the park.";
For more on escape sequences, check out Microsoft’s Documentation.

https://docs.microsoft.com/en-us/cpp/c-language/escape-sequences?view=vs-2017
