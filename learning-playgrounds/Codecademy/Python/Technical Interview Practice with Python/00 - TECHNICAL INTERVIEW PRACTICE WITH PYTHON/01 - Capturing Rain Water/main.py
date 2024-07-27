from time import time

#We’ll start with an input where we can easily determine the answer. Add the following variable to script.py:
small = [1, 0, 1]

#Now let’s use a more complicated input:
medium = [4, 2, 1, 3, 0, 1, 2]

#This input will collect no water, but it’s good to test these cases where something unusual might happen.
edge_case = [0, 2, 0]
edge_case1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

#Define the rain_water() function, which has one parameter: histogram, a Python list of positive integers.
#Let’s start by finding the maximum value at a lesser index for each value in the list.
#Iterate from index 1 to the second to last index of histogram.
#Within the loop, declare left_values and set it to every value up to but not including the current index.
#Below left_values, declare another variable: left_max. This should be the maximum value within left_values.
#Add print() statements to check out the variables.
#Add two new variables to the loop: right_values and right_max.
#Use the same logic as before, but for values at indices greater than the current index.
#Make a fill_mark variable and set it to the lesser of the two maximums.
#Now, at the beginning of the function outside of the loop, declare a total_water variable set to 0.
#At each iteration, add fill_mark to total_water.
#Return total_water at the end of the function.
#Go back and subtract the current value from fill_mark.
#Change the function so it only adds fill_mark - current_value if the result is positive.
def rain_water(histogram):
	total_water = 0

	for i in range(1, len(histogram) - 1):
		left_values = histogram[:i]
		left_max = max(left_values)
		right_values = histogram[i:]
		right_max = max(right_values)
		fill_mark = min(left_max, right_max) - histogram[i]

		if fill_mark > 0:
			total_water += fill_mark

	return total_water

#Define a optimized_rain_water() function which has a single parameter: histogram.
#To start, print max_value in each iteration of the loop.
#To start, print max_value in each iteration of the loop.
#Alter optimized_rain_water() so it initializes an empty list of left_maxes and 
# adds the max_value variable to left_maxes in each iteration.
#Reset max_value to be the value at the last index and declare an empty list as right_maxes.
#Below the loop which populates left_maxes, 
# make another loop which iterates from the last index to the first index (from right to left).
#Follow the same logic as before where we check if the current value is greater than our max, 
# set the max if necessary, and add max_value to right_maxes.
#When the loop concludes, use .reverse() on right_maxes so they match the direction of right to left.
#Within optimize_rain_water() at the top of the function make a total variable set to 0.
#Make one final loop through histogram:
#Take the min() of the two maxes at the current index (one from left_maxes, one from right_maxes)
#Subtract the current value from the result of min()
#Add the result to total

def optimized_rain_water(histogram):
	total = 0
	max_value = histogram[0]
	left_maxes = []

	for x in histogram:
		if x > max_value:
			max_value = x
		left_maxes.append(max_value)

	max_value = histogram[-1]
	right_maxes = []

	for x in reversed(histogram):
		if x > max_value:
			max_value = x
		right_maxes.append(max_value)

	for i in range(0, len(histogram)):
		total += histogram[i] - min(left_maxes[i], right_maxes[i])

	right_maxes.reverse()
	return max_value, total

#print(rain_water(small))
#print(rain_water(medium))
#print(rain_water(edge_case))
#print(rain_water(edge_case1))

#print(optimized_rain_water(small))
#print(optimized_rain_water(medium))
#print(optimized_rain_water(edge_case))
#print(optimized_rain_water(edge_case1))
