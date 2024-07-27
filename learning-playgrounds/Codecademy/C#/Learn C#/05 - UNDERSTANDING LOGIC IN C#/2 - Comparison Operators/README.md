UNDERSTANDING LOGIC IN C#

Comparison Operators

When writing a program, we often need to check if a value is correct or compare two values. Comparison operators allow us to compare values and evaluate their relationship. Rather than evaluating to an integer, they evaluate to boolean values. Expressions that evaluate to boolean values are known as boolean expressions.

Comparison operators include:

Equals ==: returns true if the value to the left is equal to the value to the right.
Inequality operator !=: returns true if the two values are not equal.
Less than <: returns true if the value to the left is less than the value to the right.
Greater than >: returns true if the value to the left is more than the value to the right.
Less than or equal to <=: returns true if the value to the left is less than or equal to the value on the right.
Greater than or equal to >=: returns true if the value to the left is more than or equal to the value to the right.
Here’s what a boolean expression using comparison operators can look like:

bool answer = 3 < 75; 
Console.WriteLine(answer); // prints True
In this example, we use the less than < comparison operator to compare the values 3 and 75, then save the expression to a variable named answer with a bool data type. If we were to print the value of answer to the console, it would print out True, since the number 3 is less than the number 75.

In addition to comparing integers, we can also compare variables, strings, and even boolean values:

bool answer = (true == false);
Console.WriteLine(answer); //prints False
Here, we use the equals comparison operator to see if the Boolean value true is equal to false. This time, the expression evaluates to false. We’ll look more into comparing boolean values in the next exercise.
