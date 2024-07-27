# Define the sum_to_one() function.
# It takes n as the sole parameter.
# We’ll start by setting up our base case.
# This function should NOT recurse if the given input, n is 1.
# In the base case, we return n.

# Now, we’ll consider the recursive step.
# We want our return value to be the current input added to the return value of sum_to_one().
# We also need to invoke sum_to_one() with an argument that will get us closer to the base case.

# Each recursive call is responsible for adding one of those integers to the ultimate total.
# To help us visualize the different function calls,
# add a print statement before the recursive call that tells us the current value of n.
# Use the following string for the print statement: print("Recursing with input: {0}".format(n))
# Let’s test out our function. Call sum_to_one() with 7 as input and print out the result. Nice work!



def sum_to_one(n):
	print("Recursing with input: {0}".format(n))
	if n == 1:
		return n
	return n + sum_to_one(n - 1)


print(sum_to_one(7))
