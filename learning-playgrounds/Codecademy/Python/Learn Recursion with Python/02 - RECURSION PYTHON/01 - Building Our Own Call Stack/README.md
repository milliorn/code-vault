# Building Our Own Call Stack

The best way to understand recursion is with lots of practice! At first, this method of solving a problem can seem unfamiliar but by the end of this lesson, we’ll have implemented a variety of algorithms using a recursive approach.

Before we dive into recursion, let’s replicate what’s happening in the call stack with an iterative function.

The call stack is abstracted away from us in Python, but we can recreate it to understand how recursive calls build up and resolve.

Let’s write a function that sums every number from 1 to the given input.

sum_to_one(4)

## 10

sum_to_one(11)

## 66

To depict the steps of a recursive function, we’ll use a call stack and execution contexts for each function call.

The call stack stores each function (with its internal variables) until those functions resolve in a last in, first out order.

call_stack = []\
recursive_func()\
call_stack = [recursive_func_1]

## within the body of recursive_func, another call to recursive_func()

call_stack = [recursive_func_1, recursive_func_2]

## the body of the second call to recursive_func resolves

call_stack = [recursive_func_1]

## the body of the original call to recursive_func resolves

call_stack = []

Execution contexts are a mapping between variable names and their values within the function during execution. We can use a list for our call stack and a dictionary for each execution context.
