# Fibonacci? Fibonaccu

So far our recursive functions have all included a single recursive call within the function definition.

Let’s explore a problem which pushes us to use multiple recursive calls within the function definition.

Fibonacci numbers are integers which follow a specific sequence: the next Fibonacci number is the sum of the previous two Fibonacci numbers.

We have a self-referential definition which means this problem is a great candidate for a recursive solution!

We’ll start by considering the base case. The Fibonacci Sequence starts with 0 and 1 respectively. If our function receives an input in that range, we don’t need to do any work.

If we receive an input greater than 1, things get a bit trickier. This recursive step requires two previous Fibonacci numbers to calculate the current Fibonacci number.

That means we need two recursive calls in our recursive step. Expressed in code:

fibonacci(3) == fibonacci(1) + fibonacci(2)

Let’s walk through how the recursive calls will accumulate in the call stack:

call_stack = []\
fibonacci(3)\
call_stack = [fibonacci(3)]

To calculate the 3rd Fibonacci number we need the previous two Fibonacci numbers. We start with the previous Fibonacci number.

fibbonacci(2)\
call_stack = [fibbonacci(3), fibbonacci(2)]

fibonacci(2) is a base case, the value of 1 is returned…

call_stack = [fibbonacci(3)]

The return value of fibonacci(2) is stored within the execution context of fibonacci(3) while ANOTHER recursive call is made to retrieve the second most previous Fibonacci number…

fibonacci(1)\
call_stack = [fibonacci(3), fibonacci(1)]

Finally, fibonacci(1) resolves because it meets the base case and the value of 1 is returned.

call_stack = [fibonacci(3)]

The return values of fibonacci(2) and fibonacci(1) are contained within the execution context of fibonacci(3), which can now return the sum of the previous two Fibonacci numbers.

As you can see, those recursive calls add up fast when we have multiple recursive invocations within a function definition!

Can you reason out the big O runtime of this Fibonacci function?
