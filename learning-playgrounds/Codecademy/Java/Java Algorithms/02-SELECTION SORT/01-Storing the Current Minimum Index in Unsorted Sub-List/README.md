# Storing the Current Minimum Index in Unsorted Sub-List

Let’s remind ourselves of the pseudo-code for our selection sort algorithm:

selectionSort(array)
 repeat (size - 1) times
  start at the beginning index of the unsorted sub-list as the current minimum
    walk through all elements of the unsorted sub-list to find the index of the smallest element and set as current minimum
  swap that element with the first element in the unsorted sub-list. That element is now part of the sorted sublist
end selectionSort
In this implementation of selection sort, we will write a for loop that runs the length of the input array minus 1.

Step 1: Inside of the for loop we will set the current minimum index to the first position of the unsorted sub-list.
Step 2: We will look through the remainder of the unsorted sub-list to find the actual minimum index.
Step 3: We will swap the actual minimum index value with the first unsorted position and now consider that position as part of the sorted sub-list.
Step 4: We move on to the next unsorted item in the array and repeat steps 2 and 3.
Step 5: We will continue to do this until we arrive at the last element in the list.

For this exercise, we will focus on the outer for loop iterating through our input array and setting the currentMinimumIndex.

selectionSort(array)
...
 repeat (size - 1) times
  start at the beginning index of the unsorted sub-list as the current minimum
   ...
end selectionSort
