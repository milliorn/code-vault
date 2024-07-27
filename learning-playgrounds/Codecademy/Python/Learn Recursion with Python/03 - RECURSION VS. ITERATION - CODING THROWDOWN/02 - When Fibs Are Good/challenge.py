# Implement your version of fibonacci() which has the same functionality without using any recursive calls!
def fibonacci(n):
	fibs = [0, 1]
	if n < 0:
		return -1
	elif n == 0 or n == 1:
		return n
	else:
		for i in range(2, n + 1):
			fibs.append(fibs[i - 1] + fibs[i - 2])
		return fibs[n]

# test cases
print(fibonacci(3) == 2)
print(fibonacci(7) == 13)
print(fibonacci(0) == 0)
