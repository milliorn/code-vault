# Insert at Point

Start by extending the functionality of the LinkedList class. Write a method to insert a node anywhere in the linked list based on an input number. 0 means inserting at the head, 1 is the node following the head, and so on.

    # '->' is the .next property
    # nodes are referenced by the values they hold
    # x -> z means a node holding 'x'
    # pointing to a node holding 'z'

    # a -> b -> c -> d
    linked_list.insert('x', 2)
    # a -> b -> x -> c -> d

    # 'b' node's next is set to x
    # 'x' node's next is set to c

    linked_list.insert('t', 0)
    # t -> a -> b -> x -> c -> d
    # head node is set to t
    # 't' node's next is set to a

We’ll need to traverse from the head node and change the .next property on two nodes.

To recap:

write a method in the LinkedList class: .insert().
.insert() takes two arguments:
the value which will be used to initialize a Node.
the insertion location for the node instance.
return self at the end of the function.
