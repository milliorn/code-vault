# Selection Sort: Swap

As mentioned, the selection sort algorithm swaps the element in the first position of the unsorted sub-list with the element with the lowest value in the remainder of the unsorted sub-list.

How does this algorithm swap these elements in practice? Let’s say we have the two values stored at the following indices index_1 and index_2. How would we swap these two elements within the list?

It is tempting to write code like:

    array[index_1] = array[index_2]; 
    array[index_2] = array[index_1]; 

However, if we do this, we lose the original value at index1. The element gets replaced by the value at index2. Both indices end up with the value at index2.

Programming languages have different ways of avoiding this issue. In some languages, we create a temporary variable which holds one element during the swap:

    int temp = array[index_1]; 
    array[index_1] = array[index_2]; 
    array[index_2] = temp; 
