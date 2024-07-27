# Comparing Current Value with Sorted Sub-List

Awesome, we have now captured the first item in the unsorted sub-list and set as current. We are now going to compare this to the preceding element(s) in the sorted sub-list.

Here is the skeleton we’re aiming for:

insertionSort(array)
  Iterate over array starting at index 1

    Compare the current element to its predecessor
      If the current element is smaller than its predecessor, compare it to the element before
      Move the greater elements one position up to make space 
    Insert current element

end insertionSort
So far, we have the for loop to run our algorithm. We have assigned the value of our array at the index we are iterating through in our unsorted sub-list to current. This is our unsorted element we will use to compare to our sorted sub-list. Now, we will create a while loop inside that visits the previous element(s) in our sorted sub-list. We want to work towards the beginning of our input array.

To do that, we will create a separate iterator, j, and assign it a value of i - 1. The first item we will compare is the last item in our sorted sub-list. Which happens to be the index just to the left of i.

We will next need to create an inner while loop that must satisfy two conditions:

We are going to start at the end of our sorted list and work backwards. We want to make sure to stop if we reach the front of our sorted list (which is index 0). The value of j must be greater than 0.

We are going to check that the element in our sorted sub-list we are comparing is larger than current. The value of array[j] > current.
