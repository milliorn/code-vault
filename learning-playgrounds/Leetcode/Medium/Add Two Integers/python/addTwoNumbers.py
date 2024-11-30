# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, val=0, next=None):
        # Initialize a node with a value and a pointer to the next node
        self.val = val
        self.next = next


class Solution(object):
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: Optional[ListNode]
        :type l2: Optional[ListNode]
        :rtype: Optional[ListNode]
        """
        # Initialize variables
        head = None  # To keep track of the head of the result list
        current = None  # Pointer to traverse and build the list
        carry = 0  # Initialize carry

        while l1 or l2:
            # Extract values or use 0 if the list is exhausted
            val1 = l1.val if l1 else 0
            val2 = l2.val if l2 else 0

            # Calculate the sum and carry
            total = val1 + val2 + carry
            carry = total // 10
            digit = total % 10

            # Create a new node for the result
            new_node = ListNode(digit)

            if not head:
                # If this is the first node, set it as the head
                head = new_node
                current = head  # Initialize current
            else:
                # Otherwise, append to the current node
                current.next = new_node
                current = current.next

            # Move l1 and l2 forward if they're not None
            if l1:
                l1 = l1.next
            if l2:
                l2 = l2.next

        # Handle leftover carry
        if carry > 0:
            current.next = ListNode(carry)

        return head


# Utility functions
def create_list(values):
    """Creates a linked list from a list of integers."""
    dummy = ListNode(0)  # Dummy node to simplify construction
    current = dummy
    for value in values:
        # Create a new node and link it to the current node
        current.next = ListNode(value)
        current = current.next  # Move current pointer forward
    return dummy.next  # Return the node after the dummy


def to_list(node):
    """Converts a linked list to a Python list."""
    result = []  # Initialize an empty list to store the node values
    # Traverse the linked list and append each node's value to the result list
    while node:
        result.append(node.val)
        node = node.next
    # Return the final Python list
    return result


# Test cases
test_cases = [
    {"l1": [2, 4, 3], "l2": [5, 6, 4], "expected": [7, 0, 8]},  # Test case 1
    {"l1": [0], "l2": [0], "expected": [0]},  # Test case 2
    {  # Test case 3
        "l1": [9, 9, 9, 9, 9, 9, 9],
        "l2": [9, 9, 9, 9],
        "expected": [8, 9, 9, 9, 0, 0, 0, 1],
    },
]

# Run tests
solution = Solution()

for i, case in enumerate(test_cases):
    # Convert input Python lists to linked lists
    l1 = create_list(case["l1"])
    l2 = create_list(case["l2"])
    # Expected output as a Python list
    expected = case["expected"]

    # Run the solution's addTwoNumbers method
    result = solution.addTwoNumbers(l1, l2)
    # Convert the result linked list to a Python list for comparison
    result_list = to_list(result)

    # Print test results
    print(f"Test Case {i + 1}: {'Passed' if result_list == expected else 'Failed'}")
    print(f"  Input l1: {case['l1']}, l2: {case['l2']}")
    print(f"  Expected: {expected}, Got: {result_list}")
