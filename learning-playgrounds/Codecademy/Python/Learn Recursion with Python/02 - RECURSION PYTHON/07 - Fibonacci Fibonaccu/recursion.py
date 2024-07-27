# Define our fibonacci() function that takes n as an argument.
# Let’s address our base cases:
# if the input is 1, we return 1
# if the input is 0, we return 0

# We need to retrieve the second to last and last Fibonacci values and return their sum.
# We can get the second to last Fibonacci by decrementing the input by 2 and the last by decrementing the input by 1.

# Add print statements within fibonacci() to explore the different recursive calls.
# Set fibonacci_runtime to the appropriate big O runtime.


def fibonacci(n):
	print(n)
	if n == 0 or n == 1:
		return n
	return fibonacci(n - 1) + fibonacci(n - 2)


fibonacci(5)
# set the appropriate runtime:
# 1, logN, N, N^2, 2^N, N!
fibonacci_runtime = "2^N"
