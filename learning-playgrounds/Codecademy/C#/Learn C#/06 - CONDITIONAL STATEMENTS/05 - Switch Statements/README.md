CONDITIONAL STATEMENTS

Switch Statements

Using multiple else if statements can get unwieldy pretty quickly. Imagine writing an else if statement for every possible number of guests. And you invited 20 people. You have to write a lot of repetitive code, which is hard to read and prone to errors.

If it’s necessary to evaluate several conditions with their own unique output, a switch statement is the way to go. Switch statements allow for compact control flow structures by evaluating a single expression and executing code blocks based on a matched case.

In C#, we write a switch statement using the following syntax:

string color;

switch (color)
{
   case "blue":
      // execute if the value of color is "blue"
      Console.WriteLine("color is blue");
      break;
   case "red":
      // execute if the value of color is "red"
      Console.WriteLine("color is red");
      break;
   case "green":
      // execute if the value of color is "green"
      Console.WriteLine("color is green");
      break;
   default:
      // execute if none of the above conditions are met
      break;
}
In this example, the program checks to see what the value of color equals. If it matches any of the specified cases, it will execute the code associated with that case. In C#, the break keyword allows programs to exit a block when a specific condition is met. If none of the conditions are met, the code inside the default case will run.

When using a switch statement, make sure to pay attention to:

Cases: rather than writing out each condition, if we’re evaluating one value we use cases to specify different potential values.
Braces: rather than each case having its own code block, the entire statement lives within one set of braces {}.
Colons: to distinguish between different cases, we state the case value, followed by a colon :. The code that should execute if that case is met follows.
Break: Each case code needs to end with a break keyword.
Default: Every switch statement needs a default case.
