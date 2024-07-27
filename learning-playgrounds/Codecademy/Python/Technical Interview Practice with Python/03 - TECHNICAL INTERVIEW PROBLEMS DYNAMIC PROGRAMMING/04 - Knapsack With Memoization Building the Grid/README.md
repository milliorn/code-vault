# Knapsack With Memoization: Building the Grid

Our brute force approach is inefficient! We’re compounding work by creating many different combinations that contain the same items. Just like with Fibonacci, we’re repeating computations that won’t change.

With the Fibonacci Sequence, we had one variable to store: the number itself. We could place that number in a Python dictionary and look it up as needed.

Now we’re dealing with multiple variables: the item’s weight and value as well as the capacity of the knapsack. A dictionary’s key-value pairs won’t be sufficient to store all the answers to our subproblems.

We’ll start tackling this problem by building a grid which can store all our sub-answers.

The columns of our grid represent each possible capacity up to the weight limit.

The rows of our grid represent each possible item we can fit into a knapsack.

Why do we want each possible capacity? Because finding the optimal capacity for
a knapsack of weight 4 will be much more efficient if we already know the
optimal capacities for knapsacks of weight 3 and 1!
