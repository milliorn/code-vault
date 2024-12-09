namespace DotNet
{
    public class Solution
    {
        public ListNode MergeTwoLists(ListNode? list1, ListNode? list2)
        {
            if (list1 == null) return list2!;
            if (list2 == null) return list1;

            ListNode head = new(0);
            ListNode current = head;

            while (list1 != null && list2 != null)
            {
                if (list1.val <= list2.val)
                {
                    current.next = list1;
                    list1 = list1.next;
                }
                else
                {
                    current.next = list2;
                    list2 = list2.next;
                }
                current = current.next;
            }

            current.next = list1 ?? list2; // Attach the remaining nodes, whichever list is non-null
            return head.next!;
        }
    }
}
