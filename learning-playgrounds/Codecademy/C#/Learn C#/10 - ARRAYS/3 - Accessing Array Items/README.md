ARRAYS
Accessing Array Items
Arrays are useful for storing values, but they’re not very useful if they simply stay there — we also need a way to access them.

Arrays order items so that they’re in a specific sequence, which makes it helpful for accessing each item. Each value has a specific position in the array, which is known as its index. You can think of an index like an address - it’s what we use to locate an item in an array. In C#, arrays start their index at 0 and then add one for each value.

To access a value from a list, we write out the name of the array, followed by brackets [] and within the brackets, the index number of that value that we want:

int[] plantHeights = {3, 4, 6};

// plantTwoHeight will be 4
int plantTwoHeight = plantHeight[1];
We can now use that value and do something with it, like save it to a variable.
