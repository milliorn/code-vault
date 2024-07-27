# Shifting the Sorted Array and Inserting Current

Great job! So far we have created a for loop that starts at index 1 and loops through our input array: 7, 2, 5, 8, -3
We have a sorted sub-list containing our first item: 7
Our unsorted sub-list contains the rest of our array: 2, 5, 8, -3

Inside of our for loop we set the value of the input array at i, arr[i], to current. Our first time through the loop, array[i] is equal to 2.

We then created a while loop that will break if we have reached the front of the array or will break if the preceding item compared to current is indeed less than the value of current.

In this exercise we want to look at how to shift our element(s) in the sorted sub-list that is greater than current.

We will also look at how we insert current when either of the conditions in our while loop are not true.

    insertionSort(array)
      Iterate over array starting at index 1
        Compare the current element to its predecessor
          If the current element is smaller than its predecessor, compare it to the element before
          Move the greater elements one position up to make space 
        Insert current element
    end insertionSort
