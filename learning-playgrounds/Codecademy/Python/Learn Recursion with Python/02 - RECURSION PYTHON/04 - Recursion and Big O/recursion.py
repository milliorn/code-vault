# Define the factorial function with one parameter: n.
# Set up a base case.
# Think about the input(s) that wouldn’t need a recursive call for your function.
# Return the appropriate value.

# Now let’s consider the recursive step for factorial().
# If we’re in the recursive step that means factorial() has been invoked with an integer of at least 2.
# We need to return the current input value multiplied by the return value of the recursive call.
# Structure the recursive call so it invokes factorial() with an argument one less than the current input.

# Nice work, test out your function by printing the result of calling factorial() with 12 as an input.
# Now, change the input to a really large number, think big, and run the code.
# If you chose an input large enough, you should see a RecursionError


def factorial(n):
    if n == 1:
        return n
    return n * factorial(n - 1)

print(factorial(12))
print(factorial(998))
print(factorial(999))