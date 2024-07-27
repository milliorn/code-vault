#Implement your version of sum_digits() which has the same functionality using recursive calls!
def sum_digits(input):
	return input if not input else input % 10 + sum_digits(input // 10)

# test cases
print(sum_digits(12) == 3)
print(sum_digits(552) == 12)
print(sum_digits(123456789) == 45)
print(sum_digits(9) == 9)
# Linear - O(N), where "N" is the number of digits in the number
#def sum_digits(n):
#	if n < 0:
#		ValueError("Inputs 0 or greater only!")
#	result = 0
#	while n is not 0:
#		result += n % 10
#		n = n // 10
#	return result + n
