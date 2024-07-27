# Sorting

Great! Now let’s add a little logic to our method.

    numbers = [5, 1, 3, 8]
    numbers.sort!
    puts numbers

In the above example, we create a new array called numbers.
Then, we sort the array.
Finally, we print out 1, 3, 5, 8, the sorted array.
In Ruby, there are two sorting methods, .sort or sort!. The first method, .sort, simply returns a sorted array while leaving the original array alone. The second method, .sort!, modifies the actual array.
