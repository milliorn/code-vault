from linked_list import LinkedList, Node, set_up_test_case

linked_list_1, linked_list_2 = set_up_test_case()
print(linked_list_1)
print(linked_list_2)

def merge_point(linked_list_a, linked_list_b):
	size_a = linked_list_a.size()
	size_b = linked_list_b.size()
	diff = abs(size_a - size_b)

	if size_a > size_b:
		big = linked_list_a.head
		small = linked_list_b.head
	else:
		big = linked_list_b.head
		small = linked_list_a.head

	for i in range(diff):
		big = big.next

	while big and small:
		if big == small:
			return big
		big = big.next
		small = small.next

	return None

test_result = merge_point(linked_list_1, linked_list_2)

print("Function should return merge point node holding 'q': {0}".format(test_result.val))
