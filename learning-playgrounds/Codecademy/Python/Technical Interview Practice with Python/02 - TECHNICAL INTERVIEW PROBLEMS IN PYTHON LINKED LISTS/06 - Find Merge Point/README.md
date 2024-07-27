# Find Merge Point

Nodes within a linked list can be referenced multiple times. We’ll explore this idea with a partially merged linked list.

    # a -> b
    #        \
    #         -> c -> e
    #        /
    # d -> f

In this example, two different heads (nodes holding 'a' and 'd') merge into a single linked list with the node holding 'c'. This “merge point” results from nodes holding 'b' and 'f' both referencing the node holding 'c' as the .next property.

Write a function that returns the merge point node of two linked lists if it exists.

    # x -> a -> b
    #            \
    #             -> q -> e
    #            /
    #      d -> f

    # node holding 'q'

    # r
    #  \
    #   -> x
    #  /
    # f

    # node holding 'x'

    # j -> k
    # l -> q

    # None

To recap:

    write a function: merge_point().
    merge_point() takes two arguments, both instances of a linked list.
    return the first node referenced by both linked lists, or None if such a node does not exist.
