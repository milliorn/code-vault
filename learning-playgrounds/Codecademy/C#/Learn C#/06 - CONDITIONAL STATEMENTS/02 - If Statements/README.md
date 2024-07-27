CONDITIONAL STATEMENTS

If Statements

Conditional statements are the most commonly used control structures in programming. They rely on the computer being able to reason whether conditions are true or false.

The most basic conditional statement is if if statement. An if statement executes a block of code if specified condition is true.

In C#, we write an if statement using the following syntax:

string color = "blue";

if (color == "blue")
{
  // this code block will execute only if the value of color is 
  // equivalent to "blue"
  Console.WriteLine("color is blue");
}
In this example, our if conditional statement checks to see if the value of the variable color is equivalent to the string "blue". Since it is, it will execute the code in the code block and print the string "color is blue" to the console. If color equals another value or was null, the program skips over the block and moves on to the next instruction.

When writing an if statement, make sure to pay attention to:

Parentheses: we place the boolean expression that the if statement is evaluating in parentheses ().
Braces: after the boolean expression, we write a set of braces {}. Write the code that will execute if the boolean expression evaluates to true inside these braces.
Indentation: while whitespace won’t impact our program, it is convention to indent the code inside the braces by two spaces.
