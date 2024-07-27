CONDITIONAL STATEMENTS

Else If Statements

What if we want to handle multiple conditions and have a different thing happen each time? Conditional statements can be chained by combining if and else statements into else if. After an initial if statement, one or more else if blocks can check additional conditions. An optional else block can be added at the end to catch cases that do not match any of the conditions.

In C#, we write an if..else if... statement using the following syntax:

string color = "red";

if (color == "blue")
{
  // this code block will execute only if the value of color is 
  // equivalent to "blue"
  Console.WriteLine("color is blue");
} 
else if (color == "red")
{
  // this code block will execute if the value of color is 
  // equivalent to "red"
  Console.WriteLine("color is NOT blue");
} 
else // this is optional
{
  // this code block will execute if the value of color is 
  // NOT equivalent to "blue" OR "red"
  Console.WriteLine("color is NOT blue OR red");
}
In this example, the program checks to see if color equals "blue" OR "red". Depending on what color is equivalent to, it will execute the corresponding code block. If it isn’t equal to either of those colors, it will execute the else block before moving on with the rest of the program.

When using else if statement, make sure to pay attention to:

Each else if statement gets its own condition: make sure to specify the condition an else if is evaluating. Just like an if statement, this condition goes in parentheses and if true, will execute what is in the code block.
else follows else if: If you choose to include an else statement (it’s optional), make sure it comes after any else if statements you might have.
