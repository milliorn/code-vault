# Recursive Case

In the last exercise, you created a condition (n > 0 or n >= 1). This condition is important, because it defines whether or not recursiveFactorial() calls itself. We call this if block the recursive case.

In recursion, the recursive case is the condition under which a method calls itself. We call this the recursive case because, as mentioned in the last exercise, recursion is defined as: a process that includes a method calling itself.

At the end of last exercise, your output should have looked like:

    Execution context: 4
    Execution context: 3
    Execution context: 2
    Execution context: 1
    0

At this point, we are still missing a couple of components from our recursive method:

Calculating the product of each number – while the current implementation does access all the numbers that we need to multiply, we do not calculate their product.
recursiveFactorial() always returns 0 – the value set to recursiveSolution (see Factorial.java to the right) is zero, because we always return 0 after the if block in recursiveFactorial().
