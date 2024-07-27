# Define the build_bst() function with my_list as the sole parameter.
# If my_list has no elements, return “No Child” to represent the lack of a child tree node.
# The recursive step will need to remove an element from the input to eventually reach an empty list.

# Outside of the conditional you just wrote, declare middle_idx and set it to the middle index of my_list.
# Then, declare middle_value and set it to the value in my_list located at middle_idx.
# Print “Middle index: “ + middle_idx.

# After the print statements,
# declare the variable tree_node that points to a Python dictionary with a key of "data" pointing to middle_value.


def build_bst(my_list):
	if len(my_list) == 0:
		return "No Child"

	middle_index = len(my_list) // 2
	middle_value = my_list[middle_index]

	print("Middle index: {0}".format(middle_index))
	print("Middle value: {0}".format(middle_value))

	tree_node = {"data": middle_value}

	tree_node["left_child"] = build_bst(my_list[ : middle_index])
	tree_node["right_child"] = build_bst(my_list[middle_index + 1 : ])

	return tree_node

sorted_list = [12, 13, 14, 15, 16]
binary_search_tree = build_bst(sorted_list)
print(binary_search_tree)

# fill in the runtime as a string
# 1, logN, N, N*logN, N^2, 2^N, N!
runtime = "???"
