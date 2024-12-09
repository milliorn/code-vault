# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution(object):
    def mergeTwoLists(self, list1, list2):
        """
        Merge two sorted linked lists into a single sorted linked list.
        """
        # edge cases
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


def list_to_linked_list(values):
    """Helper function to convert a list to a linked list."""
    dummy = ListNode()
    current = dummy
    for val in values:
        current.next = ListNode(val)
        current = current.next
    return dummy.next


def linked_list_to_list(node):
    """Helper function to convert a linked list to a list."""
    result = []
    while node:
        result.append(node.val)
        node = node.next
    return result


def test_merge_two_lists():
    solution = Solution()

    test_cases = [
        {"list1": None, "list2": None, "expected": []},
        {"list1": None, "list2": [1, 2, 4], "expected": [1, 2, 4]},
        {"list1": [1, 3, 4], "list2": None, "expected": [1, 3, 4]},
        {"list1": [1, 2, 4], "list2": [1, 3, 4], "expected": [1, 1, 2, 3, 4, 4]},
        {"list1": [1, 2, 3], "list2": [4, 5, 6], "expected": [1, 2, 3, 4, 5, 6]},
        {"list1": [1, 3, 5], "list2": [2, 4, 6], "expected": [1, 2, 3, 4, 5, 6]},
    ]

    for i, case in enumerate(test_cases, 1):
        list1 = list_to_linked_list(case["list1"]) if case["list1"] else None
        list2 = list_to_linked_list(case["list2"]) if case["list2"] else None
        expected = case["expected"]
        result = linked_list_to_list(solution.mergeTwoLists(list1, list2))

        if result == expected:
            print(f"Test case {i}: Passed")
        else:
            print(f"Test case {i}: Failed (Expected: {expected}, Got: {result})")

    print("All test cases passed!")


# Run the tests
test_merge_two_lists()
