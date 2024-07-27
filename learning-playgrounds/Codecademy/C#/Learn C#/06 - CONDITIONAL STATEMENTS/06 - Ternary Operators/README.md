CONDITIONAL STATEMENTS

Ternary Operators

The ternary operator allows for a compact syntax in the case of binary decisions. Like an if...else statement, it evaluates a single condition and executes one expression if the condition is true and the second expression otherwise.

Here’s an example of a ternary operator in action:

string color = "blue";
string result = (color == "blue") ? "blue" : "NOT blue";

Console.WriteLine(result);
In this example, we create a variable result and save the outcome of the ternary operator expression. The expression starts with the Boolean expressions (color == "blue"), followed by the ternary operator ?, then the two possible outcomes, separated by a colon :. The first outcome, "blue" will be saved to result if the Boolean expression evaluates to true, otherwise it will store the second outcome.

Ternary operators can also be chained, like else if statements. But careful! Since the entire expression exists on one line, it can quickly become unreadable.

When using ternary operators, make sure to pay attention to:

Parentheses: we place the boolean expression that the statement is evaluating in parentheses ().
The ? operator: make sure this comes after the statement and before the outcomes.
Colon: This separates the two possible outcomes.
