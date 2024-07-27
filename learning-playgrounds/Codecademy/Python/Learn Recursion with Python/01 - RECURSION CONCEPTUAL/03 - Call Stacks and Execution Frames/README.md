# Call Stacks and Execution Frames

A recursive approach requires the function invoking itself with different arguments. How does the computer keep track of the various arguments and different function invocations if it’s the same function definition?

Repeatedly invoking functions may be familiar when it occurs sequentially, but it can be jarring to see this invocation occur within a function definition.

Languages make this possible with call stacks and execution contexts.

Stacks, a data structure, follow a strict protocol for the order data enters and exits the structure: the last thing to enter is the first thing to leave.

Your programming language often manages the call stack, which exists outside of any specific function. This call stack tracks the ordering of the different function invocations, so the last function to enter the call stack is the first function to exit the call stack
