// Definition for singly-linked list.
#[derive(PartialEq, Eq, Clone, Debug)]
pub struct ListNode {
    pub val: i32, // The value of the current node
    pub next: Option<Box<ListNode>>, // The reference to the next node
}

impl ListNode {
    #[inline]
    pub fn new(val: i32) -> Self {
        ListNode { next: None, val } // Create a new node with the given value and no next node
    }
}

pub struct Solution;

impl Solution {
    pub fn add_two_numbers(
        l1: Option<Box<ListNode>>,
        l2: Option<Box<ListNode>>,
    ) -> Option<Box<ListNode>> {
        // Create a dummy head node to simplify list operations
        let mut head: ListNode = ListNode { val: 0, next: None };
        let mut current: &mut ListNode = &mut head; // Pointer to the current node being processed
        let mut carry: i32 = 0; // Variable to store the carry over value from additions
        let mut l1_ref: Option<Box<ListNode>> = l1; // Local variable to traverse the first list
        let mut l2_ref: Option<Box<ListNode>> = l2; // Local variable to traverse the second list

        // Loop until both lists are fully traversed
        while l1_ref.is_some() || l2_ref.is_some() {
            // Get the values of the current nodes, defaulting to 0 if the node is None
            let val1 = l1_ref.as_ref().map_or(0, |node| node.val);
            let val2 = l2_ref.as_ref().map_or(0, |node| node.val);

            // Calculate the sum of the values and the carry
            let sum = val1 + val2 + carry;

            // Update the carry for the next iteration
            carry = sum / 10;

            // Create a new node with the digit part of the sum and attach it to the result list
            current.next = Some(Box::new(ListNode {
                val: sum % 10,
                next: None,
            }));

            // Move the current pointer to the newly added node
            current = current.next.as_mut().unwrap();

            // Advance the pointers in the input lists if they exist
            l1_ref = l1_ref.and_then(|node| node.next);
            l2_ref = l2_ref.and_then(|node| node.next);
        }

        // If there is a leftover carry, add it as a new node
        if carry > 0 {
            current.next = Some(Box::new(ListNode {
                val: carry,
                next: None,
            }));
        }

        // Return the result list, skipping the dummy head
        head.next
    }
}

// Test cases
#[cfg(test)]
mod tests {
    use super::*;

    // Helper function to convert a linked list to a vector for easy comparison
    fn list_to_vec(list: Option<Box<ListNode>>) -> Vec<i32> {
        let mut result = Vec::new();
        let mut current = list;
        while let Some(node) = current {
            result.push(node.val); // Add the value of the current node to the result vector
            current = node.next; // Move to the next node
        }
        result
    }

    #[test]
    fn test_case_1() {
        // Input: l1 = [2,4,3], l2 = [5,6,4]
        let l1 = {
            let values = vec![2, 4, 3];
            let mut dummy = Box::new(ListNode::new(0));
            let mut current = &mut dummy;
            for &val in &values {
                current.next = Some(Box::new(ListNode::new(val)));
                current = current.next.as_mut().unwrap();
            }
            dummy.next
        };
        let l2 = {
            let values = vec![5, 6, 4];
            let mut dummy = Box::new(ListNode::new(0));
            let mut current = &mut dummy;
            for &val in &values {
                current.next = Some(Box::new(ListNode::new(val)));
                current = current.next.as_mut().unwrap();
            }
            dummy.next
        };
        let result = Solution::add_two_numbers(l1, l2);
        // Output: [7,0,8]
        assert_eq!(list_to_vec(result), vec![7, 0, 8]);
    }

    #[test]
    fn test_case_2() {
        // Input: l1 = [0], l2 = [0]
        let l1 = {
            let values = vec![0];
            let mut dummy = Box::new(ListNode::new(0));
            let mut current = &mut dummy;
            for &val in &values {
                current.next = Some(Box::new(ListNode::new(val)));
                current = current.next.as_mut().unwrap();
            }
            dummy.next
        };
        let l2 = {
            let values = vec![0];
            let mut dummy = Box::new(ListNode::new(0));
            let mut current = &mut dummy;
            for &val in &values {
                current.next = Some(Box::new(ListNode::new(val)));
                current = current.next.as_mut().unwrap();
            }
            dummy.next
        };
        let result = Solution::add_two_numbers(l1, l2);
        // Output: [0]
        assert_eq!(list_to_vec(result), vec![0]);
    }

    #[test]
    fn test_case_3() {
        // Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
        let l1 = {
            let values = vec![9, 9, 9, 9, 9, 9, 9];
            let mut dummy = Box::new(ListNode::new(0));
            let mut current = &mut dummy;
            for &val in &values {
                current.next = Some(Box::new(ListNode::new(val)));
                current = current.next.as_mut().unwrap();
            }
            dummy.next
        };
        let l2 = {
            let values = vec![9, 9, 9, 9];
            let mut dummy = Box::new(ListNode::new(0));
            let mut current = &mut dummy;
            for &val in &values {
                current.next = Some(Box::new(ListNode::new(val)));
                current = current.next.as_mut().unwrap();
            }
            dummy.next
        };
        let result = Solution::add_two_numbers(l1, l2);
        // Output: [8,9,9,9,0,0,0,1]
        assert_eq!(list_to_vec(result), vec![8, 9, 9, 9, 0, 0, 0, 1]);
    }
}
