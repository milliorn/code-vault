# Recursion and Big O

Excellent job writing your first recursive function. Our next task may seem familiar so there won’t be as much guidance.

We’d like a function factorial that, given a positive integer as input, returns the product of every integer from 1 up to the input. If the input is less than 2, return 1.

For example:

factorial(4)

4 x 3 x 2 x 1

24

Since this function is similar to the previous problem, we’ll add an additional wrinkle. You’ll need to evaluate the big O runtime of the function.

With an iterative function, we would consider how the number of iterations grows in relation to the size of the input.

For example you may ask yourself, are we looping once more for each new element in the list?

That’s linear or O(N).

Are we looping an additional number of elements in the list for each new element in the list?

That’s quadratic or O(N^2).

With recursive functions, the thought process is similar but we’re replacing loop iterations with recursive function calls.

In other words, are we recursing once more for each new element in the list?

That’s linear or O(N).

Let’s analyze our previous function, sum_to_one()

sum_to_one(4)

recursive call to sum_to_one(3)

recursive call to sum_to_one(2)

recursive call to sum_to_one(1)

Let's increase the input

sum_to_one(5)

recursive call to sum_to_one(4)

recursive call to sum_to_one(3)

recursive call to sum_to_one(2)

recursive call to sum_to_one(1)

What do you think? We added one to the input, how many more recursive calls were n
ecessary?

Talk through a few more inputs and then start coding when you’re ready to move on.
