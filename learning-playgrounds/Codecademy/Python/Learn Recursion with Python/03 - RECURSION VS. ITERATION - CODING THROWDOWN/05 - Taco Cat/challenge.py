def is_palindrome(str):
	first_length = round(len(str) / 2)
	first_half = str[0:first_length]
	second_half = str[first_length:]

	return True if first_half == second_half or len(str) < 2 else is_palindrome(str[1:-1])

# test cases
print(is_palindrome("abba") == True)
print(is_palindrome("abcba") == True)
print(is_palindrome("") == True)
print(is_palindrome("abcd") == False)
