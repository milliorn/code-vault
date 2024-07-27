# find rotation point 
# No time/space requirements
# return index of "rotation point" element
#Write a function count_rotations() which has one parameter rotated_list.
#count_rotations() should return the index where the sorted list would begin.
def count_rotations(rotated_list):
	index = 0
	lis = sorted(rotated_list)
	first = lis[0]

	for x in rotated_list:
		if x == first:
			return index
		else:
			index += 1
	return index

def rotation_point(rotated_list):
	return count_rotations(rotated_list)



#### TESTS SHOULD ALL BE TRUE ####
print("{0}\n should equal \n{1}\n {2}\n".format(rotation_point(['a', 'b', 'c', 'd', 'e', 'f']), 0, rotation_point(['a', 'b', 'c', 'd', 'e', 'f']) == 0))

print("{0}\n should equal \n{1}\n {2}\n".format(rotation_point(['c', 'd', 'e', 'f', 'a']), 4, rotation_point(['c', 'd', 'e', 'f', 'a']) == 4))

print("{0}\n should equal \n{1}\n {2}\n".format(rotation_point([13, 8, 9, 10, 11]), 1, rotation_point([13, 8, 9, 10, 11]) == 1))
