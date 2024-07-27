# Define flatten() which has a single parameter named my_list.
# We’ll start by declaring a variable, result and setting it to an empty list.
# result is our intermediary variable that houses elements from my_list.
# Return result

# Returning an empty list isn’t much good to us, it should be filled with the values contained in my_list.
# Use a for loop to iterate through my_list.
# Inside the loop, we need a conditional for our recursive step.
# Check if the element in the current iteration is a list.

# After your print statement, declare the variable flat_list,
# and assign it to a recursive call to flatten() passing in your iterating variable as the argument.

# If the iterating variable is not a list, we can update result,
# so it includes this element at the end of the list.
# flatten() should now return the complete result.
# Print the result!


def flatten(my_list):
	result = []
	for x in my_list:
		if isinstance(x, list):
			print("List found!")
			flat_list = flatten(x)
			result += flat_list
		else:
			result.append(x)
	return result


# reserve for testing...
planets = ['mercury', 'venus', ['earth'], 'mars', [
	['jupiter', 'saturn']], 'uranus', ['neptune', 'pluto']]

print(flatten(planets))
