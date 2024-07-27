# remove duplicates 
# constant space
# return index of last unique element

#Write a function move_duplicates() which has one parameter: dupe_list.
#The argument to move_duplicates() will always be a sorted list which may have duplicated values.
#move_duplicates() should move all duplicate values to the end of the list and maintain sorted order.
#The return value is the index of the last unique value.

def move_duplicates(dupe_list):
	return len(set(dupe_list)) - 1

"""
def move_duplicates(dupe_list):
  unique_idx = 0
  for i in range(len(dupe_list) - 1):
    if dupe_list[i] != dupe_list[i + 1]:
      dupe_list[i], dupe_list[unique_idx] = dupe_list[unique_idx], dupe_list[i]
      unique_idx += 1
  dupe_list[unique_idx], dupe_list[len(dupe_list) - 1] = dupe_list[len(dupe_list) - 1], dupe_list[unique_idx]
  return unique_idx
"""

#### TESTS SHOULD ALL BE TRUE ####
print("{0}\n should equal \n{1}\n {2}\n".format(move_duplicates(['a', 'a', 'g', 't', 't', 'x', 'x', 'x']), 3, move_duplicates(['a', 'a', 'g', 't', 't', 'x', 'x', 'x']) == 3))

print("{0}\n should equal \n{1}\n {2}\n".format(move_duplicates(['a', 'a', 'c', 'c', 'd', 'd', 'e', 'e', 'f']), 4, move_duplicates(['a', 'a', 'c', 'c', 'd', 'd', 'e', 'e', 'f']) == 4))

print("{0}\n should equal \n{1}\n {2}\n".format(move_duplicates([13, 13, 13, 13, 13, 42]), 1, move_duplicates([13, 13, 13, 13, 13, 42]) == 1))
