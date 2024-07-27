WORKING WITH TEXT

String Interpolation

While string concatenation is easy to read, it can get annoying to write. Another option is string interpolation. String interpolation was introduced in C# 6 and it enables us to insert our variable values and expressions in the middle of a string, without having to worry about spaces and punctuation.

string yourFaveMusician = "David Bowie";
string myFaveMusician = "Solange";

Console.WriteLine($"Your favorite musician is {yourFaveMusician} and mine is {myFaveMusician}.")
Notice how we just have one string, which we append with the dollar sign symbol $. Make sure there isn’t a space in between the $ and the starting quotation mark ". Whenever we need to insert a variable, we surround it with braces {}.For more on string interpolation, check out Microsoft’s documentation.

https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/tokens/interpolated

In older documentation, you may come across a slightly similar syntax. This style is known as string formatting or composite formatting. Since the introduction of string interpolation, it is rarely used. But in case you come across it, check out Microsoft’s documentation.

https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/strings/index#format-strings
