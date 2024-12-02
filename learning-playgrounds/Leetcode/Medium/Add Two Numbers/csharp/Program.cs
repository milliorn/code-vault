using System;

namespace csharp
{
    public class ListNode
    {
        public int val;
        public ListNode next;
        public ListNode(int val = 0, ListNode next = null)
        {
            this.val = val;
            this.next = next;
        }
    }

    public class Solution
    {
        public ListNode AddTwoNumbers(ListNode l1, ListNode l2)
        {
            ListNode head = new(0); // Dummy node
            ListNode current = head;        // Pointer for building the result list
            int carry = 0;                  // Initialize carry

            // Traverse both lists
            while (l1 != null || l2 != null)
            {
                int val1 = l1 != null ? l1.val : 0;
                int val2 = l2 != null ? l2.val : 0;
                int sum = val1 + val2 + carry;

                carry = sum / 10; // Update carry
                current.next = new ListNode(sum % 10); // Create and link the new node
                current = current.next; // Move the pointer forward

                if (l1 != null) l1 = l1.next; // Move to the next node in l1
                if (l2 != null) l2 = l2.next; // Move to the next node in l2
            }

            // Handle leftover carry
            if (carry > 0)
            {
                current.next = new ListNode(carry);
            }

            return head.next; // Return the result list (skipping dummy node)
        }
    }

    internal class Program
    {
        static void Main(string[] args)
        {
            // Helper methods
            ListNode BuildList(int[] nums)
            {
                ListNode dummy = new ListNode(0);
                ListNode current = dummy;
                foreach (int num in nums)
                {
                    current.next = new ListNode(num);
                    current = current.next;
                }
                return dummy.next;
            }

            void PrintList(ListNode node)
            {
                while (node != null)
                {
                    Console.Write(node.val + " ");
                    node = node.next;
                }
                Console.WriteLine();
            }

            // Test cases
            Solution solution = new Solution();

            // Test case 1
            ListNode l1 = BuildList(new int[] { 2, 4, 3 });
            ListNode l2 = BuildList(new int[] { 5, 6, 4 });
            ListNode result = solution.AddTwoNumbers(l1, l2);
            Console.Write("Test Case 1: ");
            PrintList(result); // Expected Output: 7 0 8

            // Test case 2
            l1 = BuildList(new int[] { 0 });
            l2 = BuildList(new int[] { 0 });
            result = solution.AddTwoNumbers(l1, l2);
            Console.Write("Test Case 2: ");
            PrintList(result); // Expected Output: 0

            // Test case 3
            l1 = BuildList(new int[] { 9, 9, 9, 9, 9, 9, 9 });
            l2 = BuildList(new int[] { 9, 9, 9, 9 });
            result = solution.AddTwoNumbers(l1, l2);
            Console.Write("Test Case 3: ");
            PrintList(result); // Expected Output: 8 9 9 9 0 0 0 1
        }
    }
}
