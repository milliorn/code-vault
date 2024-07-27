#Create two variables, first and last, and set them equal to the first and last positions in the dataset.
#Create a while loop that checks if first is less than or equal to last.
#Within the while loop, create a variable called mid and set it to the average of first and last.
#In the while loop, create an if statement that checks the following: mid of the data is empty
#Within the if statement, do the following:
#Create a variable, left, and set it equal to the position directly left of the mid.
#Create a variable, right, and set it equal to the position directly right of the mid
#Within the if statement, create a while(True) loop. 
# In this loop, we will be checking if the surrounding values are empty and will break once we find a non-empty value.
#In the new inner while loop, check if both of the following conditions are met:
#left is less than first
#right is greater than last
#If so, do the following:
#Print the statement: "{0} is not in the dataset". {0} corresponds to the search_val.
#return from the function
#In the inner while loop, create an elif statement that checks if both of the following are True:
#right is the less than or equal to last
#data[right] is not empty.
#If so, do the following:
#Set mid equal to right
#break out of the inner while loop
#In the inner while loop, create another elif statement that checks if both of the following are True:
#left is greater than or equal to first
#data[left] is not empty
#If so, do the following:
#Set mid equal to left
#break out of the inner while loop
#In the inner while loop, after the conditional statements, do the following:
#Increment right by 1
#Decrement left by 1
#Outside the inner while loop and below its encompassing if statement, check if the following is true:
#mid of the data is equal to the search_val
#If so, do the following:
#Print the statement: "{0} found at position {1}". {0} corresponds to the search_val and {1} corresponds to the mid
#return from the function.
#Below the if statement, check if the following is true:
#search_val is less than data[mid] If so, do the following:
#Set last equal to mid - 1
#Below the if statement, check if the following is true:
#search_val is greater than data[mid]
#If so, do the following:
#Set first equal to mid + 1
#Outside of the outer while loop, do the following:
#Print the statement: "{0} is not in the dataset". {0} corresponds to the search_val.


def sparse_search(data, search_val):
	print("Data: " + str(data))
	print("Search Value: " + str(search_val))

	first = 0
	last = len(data) - 1

	while first <= last:
		mid = (first + last) // 2

		if not data[mid]:
			left = mid - 1
			right = mid + 1

			while True:
				if left < first and right > last:
					print("{0} is not in the dataset", search_val)
					return
				elif right <= last and data[right]:
					mid = right
					break
				elif left >= first and data[left]:
					mid = left
					break

				right += 1
				left -= 1

		if data[mid] == search_val:
			print("{0} found at position {1}", search_val, mid)
			return

		if search_val < data[mid]:
			last = mid - 1

		if search_val > data[mid]:
			first = mid + 1

	print("{0} is not in the dataset", search_val) 
