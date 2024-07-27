UNDERSTANDING LOGIC IN C#

Logical Operators

As we saw in the truth table, a Boolean expression that uses logical operators can be as simple as evaluating two boolean values:

bool answer = true && false; // evaluates to False
In this case, we’re saying that answer is equal to the evaluation of true AND false. According to the truth table, answer will return False.

But more often, Boolean expressions are extremely complex. Rather than determining if one relationship is true or false, we can evaluate several expressions by connecting them with logical operators and then determining the validity of the overall expression.

bool answer = (9 < 3) || (100 < 45); // evaluates to False
bool another = ((3439 > 40) && (1 < 3)) || answer; // evaluates to True
We can use logical values to start chaining logical statements. Let’s start by finding the value of answer.

First, the computer will evaluate each comparison statement:

bool answer = (9 < 3) || (100 < 45)
Both of these statements evaluate to false:

bool answer = false || false
Since both statements evaluate to false and we’re using an OR operator, the overall expression will return false:

bool answer = false
Now we can start evaluating the value of another. Again, we’ll start by evaluating the comparison statements:

bool another = ((3439 > 40) && (1 < 3)) || answer
Both statements evaluate to true:

bool another = (true && true) || answer
Since both statements evaluate to true and we’re using an AND operator, the overall expression returns true:

bool another = true || answer
Since we already know that answer is false and we’re evaluating it with a true value using an OR operator another, it will return true:

bool another = true.
