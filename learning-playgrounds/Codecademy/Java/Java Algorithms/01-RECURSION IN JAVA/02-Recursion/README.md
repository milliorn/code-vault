# Recursion

So, what is recursion?

Recursion is a computational approach where a method calls itself from within its body. Programmers use recursion when they need to perform the same action multiple times in a row until it reaches a predefined stopping point, also known as a base case.

Let’s think about this in the context of our factorial example. Below is the beginnings of a recursive implementation of factorial. This code is in Factorial.java, to the right.

...
public static int recursiveFactorial(int n) {

    if ("SOME CONDITION") {
        System.out.println("Execution context " + n);

 

        recursiveFactorial(n - 1);
    }

 

    return 0;

}
...
Within the recursiveFactorial() method, we check whether a condition is met. If it is, then we print the value of n and return a call to recursiveFactorial(n - 1). If the condition is not met, we return 0.

Can you think of a condition that will result in the following response when we call recursiveFactorial(4)?

Execution context: 4
Execution context: 3
Execution context: 2
Execution context: 1
0
We want a condition that stops being true after n is less than 1, so the correct answer is n > 0 or n >= 1. At this point, we have the beginnings of a recursive method, but we’re still not returning anything meaningful.
