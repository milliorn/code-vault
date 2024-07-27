# Sum to One with Recursion

Now that we’ve built a mental model for how recursion is handled by Python, let’s implement the same function and make it truly recursive.

To recap: We want a function that takes an integer as an input and returns the sum of all numbers from the input down to 1.

sum_to_one(4)

## 4 + 3 + 2 + 1

## 10

Here’s how this function would look if we were to write it iteratively:

def sum_to_one(n):\
    result = 0\
    for num in range(n, 0, -1):\
        result += num\
    return result

sum_to_one(4)

num is set to 4, 3, 2, and 1

10

We can think of each recursive call as an iteration of the loop above. In other words, we want a recursive function that will produce the following function calls:

recursive_sum_to_one(4)

recursive_sum_to_one(3)

recursive_sum_to_one(2)

recursive_sum_to_one(1)

Every recursive function needs a base case when the function does not recurse, and a recursive step, when the recursing function moves towards the base case.

Base case:

The integer given as input is 1.

Recursive step:

The recursive function call is passed an argument 1 less than the last function call.
