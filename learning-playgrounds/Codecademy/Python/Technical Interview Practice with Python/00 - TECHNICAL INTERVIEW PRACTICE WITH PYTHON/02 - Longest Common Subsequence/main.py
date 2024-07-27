#Declare dna_1 and set it to "ACCGTT".
#Declare dna_2 and set it to "CCAGCA".
dna_1 = "ACCGTT"
dna_2 = "CCAGCA"

#Below our test variables, define the longest_common_subsequence() function, which has two parameters: string_1 and string_2.
def longest_common_subsequence(string_1, string_2):
	print("Finding longest common subsequence of {0} and {1}".format(string_1, string_2))

	#Declare the variable grid and set it to two list comprehensions, one nested inside the other.
	#The inner list comprehension will place a 0 for each character plus one in string_1.
	#The outer list comprehension will run the inner list comprehension for each character plus one in string_2.
	grid = [[0 for col in range(len(string_1) + 1)] for row in range(len(string_2) + 1)]

	#After initializing grid, loop for row in range(1, len(string_2) + 1):
	for row in range(1, len(string_2) + 1):
		print("Comparing: {0}".format(string_2[row - 1]))

		#Inside this first loop, add another for loop to compare each of the “column” characters:
		for col in range(1, len(string_1) + 1):
			print("Against: {0}".format(string_1[col - 1]))

			#Putting this together, we set grid[row][col] to be the value at grid[row - 1][col - 1] plus 1 for the current match.
			if string_1[col -1] == string_2[row - 1]:
				grid[row][col] = grid[row - 1][col - 1] + 1
			#Make an else block for our conditional.
			#Inside the block, we need to set a value for grid[row][col].
			else:
				grid[row][col] = max(grid[row - 1][col], grid[row][col - 1])

	#Code at the bottom of the function to see the entire grid:
	for x in grid:
		print(x)

longest_common_subsequence(dna_1, dna_2)
