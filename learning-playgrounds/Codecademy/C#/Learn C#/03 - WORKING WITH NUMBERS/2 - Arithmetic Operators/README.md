WORKING WITH NUMBERS

Arithmetic Operators

So what can we do with numerical data? A first step is to write expressions using arithmetic operators.

Arithmetic operators include:

addition +
subtraction -
multiplication *
division /
We can use these symbols to perform operations on numbers and create new values.

int answer = 4 + 19;
Console.Write(answer);

// prints 23
When using operators, it’s important to pay attention to data types. If we use two integers, it will return an integer every time. However, if we combine an integer with a double, the answer will be a double. Let’s look at the following example:

Console.WriteLine(5 / 3);
Console.WriteLine(5 / 3.0);

// prints 1
// prints 1.66667
The first operation that we log uses two ints. While 3 doesn’t go into 5 evenly, we are still left with an int whole number. In the second operation, we use an int and a double, so the final result is a double.

C# follows the order of operations. If we do 1 + 2 * 3, should the answer be 9 or 7? C# follows a set of rules to determine which operations to perform first (the answer is 7). It’s good practice to use parentheses to explicitly tell C# how to calculate these expressions.

Notice in the following example, even if the addition symbol appears like it should come first, the multiplication operation will happen first.

int answer = 8 + (9 * 3);
Console.Write(answer);

// prints 35

https://en.wikipedia.org/wiki/Order_of_operations
