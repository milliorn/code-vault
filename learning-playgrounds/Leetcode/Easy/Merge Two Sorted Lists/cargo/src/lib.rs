// Definition for singly-linked list.
#[derive(PartialEq, Eq, Clone, Debug)]
pub struct ListNode {
    pub val: i32,                    // Value of the node
    pub next: Option<Box<ListNode>>, // Pointer to the next node
}

// Placeholder for future implementation, unused in this context
impl ListNode {}

pub struct Solution;

impl Solution {
    pub fn merge_two_lists(
        list1: Option<Box<ListNode>>, // First sorted linked list
        list2: Option<Box<ListNode>>, // Second sorted linked list
    ) -> Option<Box<ListNode>> {
        // Create a dummy node to simplify operations on the merged list
        let mut head: ListNode = ListNode { val: 0, next: None };
        let mut current: &mut ListNode = &mut head; // Pointer to the current node in the merged list
        let mut l1_ref = list1; // Reference to traverse list1
        let mut l2_ref = list2; // Reference to traverse list2

        // If one of the lists is empty, return the other list
        if l1_ref.is_none() {
            return l2_ref;
        }
        if l2_ref.is_none() {
            return l1_ref;
        }

        // Loop until one of the lists is fully traversed
        while let (Some(l1_node), Some(l2_node)) = (l1_ref.as_ref(), l2_ref.as_ref()) {
            if l1_node.val <= l2_node.val {
                // If the current node in list1 has a smaller or equal value
                current.next = l1_ref; // Attach it to the merged list
                l1_ref = current.next.as_mut().unwrap().next.take(); // Move to the next node in list1
            } else {
                // If the current node in list2 has a smaller value
                current.next = l2_ref; // Attach it to the merged list
                l2_ref = current.next.as_mut().unwrap().next.take(); // Move to the next node in list2
            }
            current = current.next.as_mut().unwrap(); // Move to the newly added node
        }

        // Attach the remaining nodes from either list1 or list2
        current.next = l1_ref.or(l2_ref);

        // Return the merged list, skipping the dummy node
        head.next
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_merge_two_lists_example_1() {
        // Test case: Merge [1,2,4] and [1,3,4]
        let list1 = Some(Box::new(ListNode {
            val: 1,
            next: Some(Box::new(ListNode {
                val: 2,
                next: Some(Box::new(ListNode { next: None, val: 4 })),
            })),
        }));
        let list2 = Some(Box::new(ListNode {
            val: 1,
            next: Some(Box::new(ListNode {
                val: 3,
                next: Some(Box::new(ListNode { next: None, val: 4 })),
            })),
        }));

        let merged = Solution::merge_two_lists(list1, list2);
        let mut result = Vec::new();
        let mut current = merged;

        // Collect the values of the merged list into a vector
        while let Some(node) = current {
            result.push(node.val);
            current = node.next;
        }

        // Verify the merged list is sorted
        assert_eq!(result, vec![1, 1, 2, 3, 4, 4]);
    }

    #[test]
    fn test_merge_two_lists_example_2() {
        // Test case: Merge two empty lists
        let list1 = None;
        let list2 = None;

        let merged = Solution::merge_two_lists(list1, list2);
        let mut result = Vec::new();
        let mut current = merged;

        // Collect the values of the merged list into a vector
        while let Some(node) = current {
            result.push(node.val);
            current = node.next;
        }

        // Verify the merged list is empty
        assert_eq!(result, Vec::<i32>::new());
    }

    #[test]
    fn test_merge_two_lists_example_3() {
        // Test case: Merge an empty list with [0]
        let list1 = None;
        let list2 = Some(Box::new(ListNode { next: None, val: 0 }));

        let merged = Solution::merge_two_lists(list1, list2);
        let mut result = Vec::new();
        let mut current = merged;

        // Collect the values of the merged list into a vector
        while let Some(node) = current {
            result.push(node.val);
            current = node.next;
        }

        // Verify the merged list contains [0]
        assert_eq!(result, vec![0]);
    }
}
