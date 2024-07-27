#Add a second parameter to fibonacci() of memo. 
# Inside the function, update the recursive calls so memo is passed as the second argument.
#Add an elif conditional before the recursive function calls and check memo.get(num).
#Update the final line of the fibonacci() function so instead of returning the recursive call it stores the result under memo[num]. 
# Now the computation will be available for other function calls.

num_in_fibonacci = 9
function_calls = []

def fibonacci(num, memo):
	function_calls.append(1)
	if num < 0:
		print("Not a valid number")
	if num <= 1:
		return num
	elif memo.get(num):
		return memo.get(num)
	else:
		memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo)
		return memo[num]

fibonacci_result = fibonacci(num_in_fibonacci, {})
print("Number {0} in the fibonacci sequence is {1}.".format(num_in_fibonacci, fibonacci_result))

print("Fibonacci function called {0} total times!".format(len(function_calls)))
