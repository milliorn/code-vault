ALTERNATE EXPRESSIONS
Lambda Expressions
The next shortcut, lambda expressions, are great for situations when you need to pass a method as an argument.

In the past exercise, we used IsEven() to check that an even value exists in the array numbers:

int[] numbers = {1, 3, 5, 6, 7, 8};

public static bool IsEven(int num)
{
  return num % 2 == 0;
}

bool hasEvenNumber = Array.Exists(numbers, IsEven);
When using the original definition (with curly braces and return), it takes multiple lines to define the IsEven() method and other developers will need to jump around our code to find the definition. With a lambda expression, we can define IsEven() directly in the method call. We don’t even need to give it a name:

bool hasEvenNumber = Array.Exists(numbers, (int num) => num % 2 == 0 );
This might look similar to an expression-bodied definition. It sort of is! What makes a lambda expression unique is that it is an anonymous method: it has no name.

Generally lambda expressions with one expression (like the above example) take this form. They use the fat arrow, no curly braces, and no semicolon (;):

(input-parameters) => expression
Lambda expressions with more than one expression use curly braces and semicolon:

(input-parameters) => { statement; }
Here’s an example of the second structure, which checks if any element in numbers is a multiple of 12 and greater than 20:

bool hasBigDozen = Array.Exists(numbers, (int num) => {
  bool isDozenMultiple = num % 12 == 0;
  bool greaterThan20 = num > 20;
  return isDozenMultiple && greaterThan20;
});
Since this lambda expression includes multiple expressions (3 in this case), then we must use curly braces and semicolons.
