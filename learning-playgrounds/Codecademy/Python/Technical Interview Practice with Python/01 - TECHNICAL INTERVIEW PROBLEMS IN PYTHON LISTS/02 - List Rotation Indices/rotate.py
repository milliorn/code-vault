# rotate list
# Constant space requirement
# return input list "rotated"
#It’s always harder to optimize, so don’t get discouraged!
#Write a function rotate(), with the parameters my_list and num_rotations.
#rotate() should return the same input list rotated num_rotations backward.
def rotate(my_list, num_rotations):
	return my_list[+num_rotations:] + my_list[:+num_rotations]

#### TESTS SHOULD ALL BE TRUE ####
print("{0}\n should equal \n{1}\n {2}\n".format(rotate(['a', 'b', 'c', 'd', 'e', 'f'], 1), ['b', 'c', 'd', 'e', 'f', 'a'], rotate(['a', 'b', 'c', 'd', 'e', 'f'], 1) == ['b', 'c', 'd', 'e', 'f', 'a']))

print("{0}\n should equal \n{1}\n {2}\n".format(rotate(['a', 'b', 'c', 'd', 'e', 'f'], 2), ['c', 'd', 'e', 'f', 'a', 'b'], rotate(['a', 'b', 'c', 'd', 'e', 'f'], 2) == ['c', 'd', 'e', 'f', 'a', 'b']))

print("{0}\n should equal \n{1}\n {2}\n".format(rotate(['a', 'b', 'c', 'd', 'e', 'f'], 3), ['d', 'e', 'f', 'a', 'b', 'c'], rotate(['a', 'b', 'c', 'd', 'e', 'f'], 3) == ['d', 'e', 'f', 'a', 'b', 'c']))

print("{0}\n should equal \n{1}\n {2}\n".format(rotate(['a', 'b', 'c', 'd', 'e', 'f'], 4), ['e', 'f', 'a', 'b', 'c', 'd'], rotate(['a', 'b', 'c', 'd', 'e', 'f'], 4) == ['e', 'f', 'a', 'b', 'c', 'd']))

"""
# rotate list
# Constant space requirement
# return input list "rotated"

def rev(lst, low, high):
  while low < high:
    lst[low], lst[high] = lst[high], lst[low]
    high -= 1
    low += 1
  return lst

def rotate(my_list, num_rotations):
  # first half
  rev(my_list, 0, num_rotations - 1)

  # second half
  rev(my_list, num_rotations, len(my_list) - 1)

  # whole list
  rev(my_list, 0, len(my_list) - 1)
  return my_list




#### TESTS SHOULD ALL BE TRUE ####
print("{0}\n should equal \n{1}\n {2}\n".format(rotate(['a', 'b', 'c', 'd', 'e', 'f'], 1), ['b', 'c', 'd', 'e', 'f', 'a'], rotate(['a', 'b', 'c', 'd', 'e', 'f'], 1) == ['b', 'c', 'd', 'e', 'f', 'a']))

print("{0}\n should equal \n{1}\n {2}\n".format(rotate(['a', 'b', 'c', 'd', 'e', 'f'], 2), ['c', 'd', 'e', 'f', 'a', 'b'], rotate(['a', 'b', 'c', 'd', 'e', 'f'], 2) == ['c', 'd', 'e', 'f', 'a', 'b']))

print("{0}\n should equal \n{1}\n {2}\n".format(rotate(['a', 'b', 'c', 'd', 'e', 'f'], 3), ['d', 'e', 'f', 'a', 'b', 'c'], rotate(['a', 'b', 'c', 'd', 'e', 'f'], 3) == ['d', 'e', 'f', 'a', 'b', 'c']))

print("{0}\n should equal \n{1}\n {2}\n".format(rotate(['a', 'b', 'c', 'd', 'e', 'f'], 4), ['e', 'f', 'a', 'b', 'c', 'd'], rotate(['a', 'b', 'c', 'd', 'e', 'f'], 4) == ['e', 'f', 'a', 'b', 'c', 'd']))
"""
