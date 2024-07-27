# Fibonacci Without Memoization

Storing answers to sub-problems is an essential aspect of dynamic programming. Let’s explore why this is the case.

The Fibonacci Sequence is a series of numbers where the next number equals the sum of the previous two, starting with 0 and 1.

Here’s a list of the first 10 Fibonacci numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21. The zeroth Fibonacci number is 0.

We can express this sequence as a function:

    f(n) = f(n - 1) + f(n - 2)

We’ve written a Python function that returns the nth Fibonacci number.

Let’s add some print statements so we can see how often we’re repeating work in the current implementation.
