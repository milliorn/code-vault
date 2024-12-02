# 2. Add Two Numbers

https://leetcode.com/problems/add-two-numbers/description/

# Intuition

The problem is about adding two numbers represented as linked lists, digit by digit, in reverse order. The challenge is to handle carry-over between digits correctly and to ensure that the addition stops when both lists are fully traversed, even if the lengths are different.

# Approach

1. Initialize a dummy head node to simplify adding new nodes to the result list.
2. Use pointers to traverse the two input lists (`l1` and `l2`) while managing a carry value.
3. For each position in the lists:
   - Add the values from `l1` and `l2` (or 0 if a list is exhausted) along with the carry.
   - Compute the new digit as `sum % 10` and the new carry as `sum / 10`.
   - Add a new node with the computed digit to the result list.
4. Continue until both lists are fully traversed and there is no carry left.
5. Return the result list starting from the node after the dummy head.

# Complexity

- **Time complexity:**
  $$O(\max(m, n))$$
  where \( m \) and \( n \) are the lengths of `l1` and `l2`. Each list is traversed once.

- **Space complexity:**
  $$O(\max(m, n))$$
  New nodes are created for the result list, proportional to the length of the longer input list.

# Code

```rust
impl Solution {
    pub fn add_two_numbers(
        l1: Option<Box<ListNode>>,
        l2: Option<Box<ListNode>>,
    ) -> Option<Box<ListNode>> {
        let mut head: ListNode = ListNode { val: 0, next: None };
        let mut current: &mut ListNode = &mut head;
        let mut carry: i32 = 0;
        let mut l1_ref: Option<Box<ListNode>> = l1; // Local variable to track the current node of l1
        let mut l2_ref: Option<Box<ListNode>> = l2; // Local variable to track the current node of l2

        while l1_ref.is_some() || l2_ref.is_some() {
            let val1 = l1_ref.as_ref().map_or(0, |node| node.val); // Extract value or default to 0
            let val2 = l2_ref.as_ref().map_or(0, |node| node.val); // Extract value or default to 0
            let sum = val1 + val2 + carry;

            carry = sum / 10;
            current.next = Some(Box::new(ListNode {
                val: sum % 10,
                next: None,
            }));

            current = current.next.as_mut().unwrap(); // Move to the newly added node

            l1_ref = l1_ref.and_then(|node| node.next);
            l2_ref = l2_ref.and_then(|node| node.next);
        }

        if carry > 0 {
            current.next = Some(Box::new(ListNode {
                val: carry,
                next: None,
            }))
        }

        head.next
    }
}
```
