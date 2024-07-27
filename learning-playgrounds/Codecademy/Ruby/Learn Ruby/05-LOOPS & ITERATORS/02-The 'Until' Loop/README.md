# The 'Until' Loop

The 'Until' Loop
The complement to the while loop is the until loop. It’s sort of like a backward while:

    i = 0
    until i == 6
        i = i + 1
    end
    puts i

In the example above, we first create a variable i and set it to 0 (zero).
Then we execute a block of code until i is equal to 6. That block of code increments i.
When i is equal to 6, the block ends.
Finally, we print 6, the value of i, to the console.
