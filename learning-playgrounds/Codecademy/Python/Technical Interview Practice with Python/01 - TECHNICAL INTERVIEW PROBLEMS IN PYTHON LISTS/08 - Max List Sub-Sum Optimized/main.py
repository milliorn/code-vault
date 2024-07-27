# max sub sum
# linear time, constant space requirements
# return maximum contiguous sum in list
#Write a function max_sub_sum() which has a single parameter: my_list.
#max_sub_sum() should return the maximum sum of contiguous values in my_list.
#Your solution should run in O(N) time and O(1) space!
def maximum_sub_sum(my_list):

	result = my_list[0] 
	temp = my_list[0] 

	for i in range(1, len(my_list)): 
		temp = max(my_list[i], temp + my_list[i]) 
		result = max(result, temp) 

	return result 

#### TESTS SHOULD ALL BE TRUE ####
print("{0}\n should equal \n{1}\n {2}\n".format(maximum_sub_sum([1, 2, 3, 4, 5]), 15, maximum_sub_sum([1, 2, 3, 4, 5]) == 15))

print("{0}\n should equal \n{1}\n {2}\n".format(maximum_sub_sum([-1, -1, -2, -4, -5, -9, -12, -13]), -1, maximum_sub_sum([-1, -1, -2, -4, -5, -9, -12, -13]) == -1))

print("{0}\n should equal \n{1}\n {2}\n".format(maximum_sub_sum([1, -7, 2, 15, -11, 2]), 17, maximum_sub_sum([1, -7, 2, 15, -11, 2]) == 17))
