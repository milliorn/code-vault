LOOPS
For Loop
What if we want our code to execute a specific number of times? We can use a for loop to do that.

for (initialization; stopping condition; iteration statement)
{
  statement;
}
The for loop tells the computer how many times to repeat the instructions using the for keyword and three expressions inside of parentheses. Each of these expressions use what’s known as an iterator variable, which is a variable that keeps track of how many times the program goes through the loop.

These expressions are:

Initialization: where the loop begins
Stopping condition: the condition that the iterator variable is evaluated against
Iteration statement: used to update the iterator variable on each loop
The for loop is good to use when you know the number of times you’d like to perform a task before you begin, like printing three copies of a document or inserting eight rows into a table.

In our video game, we want ten flags to appear at the start of each level:

for (int i = 0; i < 10; i++)
{
  DisplayFlag();
}
When a computer receives this program it sets a counter to 0 and executes the instructions in the body of the loop, which in this case instructs the computer to display a flag. After each iteration, or one turn through the loop, the program advances the counter by one (i++). The process repeats until the counter reaches 10, meaning ten iterations are completed and there are ten flags on the screen.
