WORKING WITH TEXT

Manipulate Strings

There are also built-in .NET methods that we can use to manipulate text data. Using these methods on a string doesn’t change the string itself, but creates an entirely new one.

ToUpper, ToLower
We can quickly change the case of our strings using the methods .ToUpper() and .ToLower(). These methods are useful if we want to make our text look like an e.e. cumming’s poem or make it appear like we forgot to turn off our caps lock key.

string shouting = "I'm not shouting, you're shouting".ToUpper();
Console.WriteLine(shouting);
// prints I'M NOT SHOUTING, YOU'RE SHOUTING.
