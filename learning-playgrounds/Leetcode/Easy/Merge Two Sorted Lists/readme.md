# 21. Merge Two Sorted Lists

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

## Intuition

The problem involves merging two sorted linked lists into one sorted list. Since both input lists are already sorted, the merging process can be achieved efficiently by iterating through both lists simultaneously and comparing their values. This avoids the need for sorting after the merge.

## Approach

1. Create a dummy node to simplify the merging process and act as a placeholder for the start of the merged list.
2. Use a `current` pointer to track the last node in the merged list.
3. Traverse both input lists:
   - Compare the values at the current nodes of `list1` and `list2`.
   - Attach the smaller value node to `current.next`.
   - Move the pointer of the list from which the node was taken.
   - Move the `current` pointer forward.
4. If one list is fully traversed before the other, attach the remaining nodes of the other list to `current.next`.
5. Return the next node of the dummy node as the head of the merged list.

## Complexity

- **Time complexity:** $$O(n + m)$$
  Where $$n$$ and $$m$$ are the lengths of `list1` and `list2`, respectively. Each node in both lists is visited exactly once.

- **Space complexity:** $$O(1)$$
  The merging is performed in-place without using additional data structures.

## Code

```python []
class Solution(object):
    def mergeTwoLists(self, list1, list2):
        """
        Merge two sorted linked lists into a single sorted linked list.
        """
        # Edge cases: if either list is empty, return the other list
        if not list1:
            return list2
        if not list2:
            return list1

        dummy_node = ListNode(0)  # Placeholder for the merged list head
        current = dummy_node  # Pointer to track the current position in the merged list

        # While both lists have nodes, compare and attach the smaller node
        while list1 and list2:
            if list1.val <= list2.val:
                current.next = list1
                list1 = list1.next
            else:
                current.next = list2
                list2 = list2.next
            current = current.next

        # Attach the remaining list (if any) to the merged list
        current.next = list1 if list1 else list2

        return dummy_node.next  # Return the actual head of the merged list
```
