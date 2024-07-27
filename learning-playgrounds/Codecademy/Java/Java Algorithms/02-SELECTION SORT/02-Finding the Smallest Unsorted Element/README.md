# Finding the Smallest Unsorted Element

Awesome, we have begun iterating through our input array and inside of our for loop have captured the first position in the unsorted sub-list and saved the value as currentMinimumIndex.

To review, here’s the skeleton we’re aiming for:

selectionSort(array)
 repeat (size - 1) times
  start at the beginning index of the unsorted sub-list as the current minimum
    walk through all elements of the unsorted sub-list to find the index of the smallest element and set as current minimum
  swap that element with the first element in the unsorted sub-list. That element is now part of the sorted sublist
end selectionSort
Now, we will create another loop inside that visits each element in the unsorted sub-list after currentMinimumIndex for our comparisons. To do that we will want to have our counter start at the value of i + 1. We want to stop once we’ve reached the end of our unsorted sub-list, which is the last item in the input array. Here is how we might use a nested loop to make our comparisons:

int arr[] = {30, 50, 10, 70};

for (int i = 0; i < arr.length; i++) {
  System.out.println(“Outer loop unsorted position “ + i);
  for (int j = i + 1; j < arr.length; j++) {
    System.out.println(“i = “ + i + “; j = “ + j);
  }
}
Output:

Outer loop unsorted position 1
i = 30; j = 50
i = 30; j = 10
i = 30; j = 70
Outer loop unsorted position 2
i = 50; j = 10
i = 50; j = 70
Outer loop unsorted position 3
i = 10 ; j = 70
Let’s add some logic to our code in SelectionSort.java file that will compare our element at the first position in the unsorted sub-list with the rest of the items in the sub-list and set currentMinimumIndex to the index of the element with the smallest value. Remember, we are saving the index of the element to use for the swap, not the value.

selectionSort(array)
 ...
  start at the beginning index of the unsorted sub-list
  walk through all elements of the unsorted sub-list to find the index of the smallest element
  ...
end selectionSort
