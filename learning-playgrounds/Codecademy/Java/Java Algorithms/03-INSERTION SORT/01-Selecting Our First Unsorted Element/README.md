# Selecting Our First Unsorted Element

Let’s take a look at the steps needed to achieve our insertion sort algorithm. Step 1: Consider the first element in our input array to be part of our sorted sub-list.

int[] array = {7, 2, 5, 8, -3};
// sorted sub-list:  7
// unsorted sub-list: 2, 5, 8, -3

Step 2: Pick the next element as your current value to insert.

int[] array = {7, 2, 5, 8, -3};
// sorted sub-list:  7
// unsorted sub-list: 2, 5, 8, -3
// current: 2

Step 3: Compare current with all the element(s) in the sorted sub-list.

int[] array = {7, 2, 5, 8, -3};
// sorted sub-list:  7
// unsorted sub-list: 2, 5, 8, -3
// current: 2
// compare: 2 and 7

Step 4: Shift all the element(s) in the sorted sub-list that are greater than current.

// shift: 7

Step 5: Insert current.

// insert: 2
array = {7, 2, 5, 8, -3};
// sorted sub-list:  2, 7
// unsorted sub-list: 5, 8, -3

Repeat Steps 2 - 5

Here is a skeleton of what we will be building: (expand narrative window to fit pseudocode length)

insertionSort(array)
  Iterate over array starting at index 1
    Compare the current element to its predecessor
      If the current element is smaller than its predecessor, compare it to the element before
      Move the greater elements one position up to make space
    Insert current element
end insertionSort

For this exercise, we will focus on the initial outer loop iterating through our input beginning at index 1 and setting the value of current in our unsorted sub-list to use for comparing with the values in our sorted list.
