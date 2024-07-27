# Add Two Numbers

Add Two Numbers
For our last problem, we’re going to pretend that each node in a linked list holds the digit of a number. The tail node holds the most significant digit and the head node holds the least significant digit.

    # 2 -> 4 -> 1
    # represents the number 142
    # 7 -> 1
    # represents the number 17

Given two of these linked lists, write a function that returns the sum of the two numbers as a new linked list.

    # 2 -> 4 -> 1
    # plus
    # 7 -> 1
    # returns
    # 9 -> 5 -> 1

To recap:

    write a function: add_two().
    add_two() takes two arguments, each an instance of LinkedList.
    return an instance of LinkedList which contains the sum of the input linked lists.
