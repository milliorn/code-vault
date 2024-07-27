# Remove Duplicates

Our next problem assumes a sorted linked list. Nodes held at .next will have values greater than or equal to the current node’s value.

Write a method on the LinkedList class which removes all duplicates. In the following example, there are multiple nodes which hold the same value ('a' and 'c').

    # a -> a -> b -> c -> c -> c -> d
    sorted_linked_list.remove_duplicates()
    # a -> b -> c -> d

“Removing” nodes in a linked list is a matter of removing the reference to that node.

    # a -> b -> c
    # a.next points to b
    a.next = c
    # a -> c

We have no way of reaching the node holding 'b' once the .next property of the node holding 'a' is set to the node holding 'c'. We have “removed” 'b' from the linked list.

To recap:

    write a method in the LinkedList class: .remove_duplicates().
    .remove_duplicates() takes no arguments.
    return self after all duplicate nodes are removed.
