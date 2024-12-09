//Definition for singly - linked list.
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
function mergeTwoLists(list1, list2) {
    let head = new ListNode(0);
    let current = head;
    while (list1 != null && list2 != null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        }
        else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    current.next = list1 != null ? list1 : list2;
    return head.next;
}
;
// Helper function to create a linked list from an array
function createLinkedList(arr) {
    if (arr.length === 0)
        return null;
    const head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}
// Helper function to convert a linked list back into an array
function linkedListToArray(head) {
    const result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}
// Test cases
function testMergeTwoLists() {
    // Test case 1
    let list1 = createLinkedList([1, 2, 4]);
    let list2 = createLinkedList([1, 3, 4]);
    let mergedList = mergeTwoLists(list1, list2);
    console.assert(JSON.stringify(linkedListToArray(mergedList)) === JSON.stringify([1, 1, 2, 3, 4, 4]), 'Test case 1 failed');
    // Test case 2
    list1 = createLinkedList([]);
    list2 = createLinkedList([]);
    mergedList = mergeTwoLists(list1, list2);
    console.assert(JSON.stringify(linkedListToArray(mergedList)) === JSON.stringify([]), 'Test case 2 failed');
    // Test case 3
    list1 = createLinkedList([]);
    list2 = createLinkedList([0]);
    mergedList = mergeTwoLists(list1, list2);
    console.assert(JSON.stringify(linkedListToArray(mergedList)) === JSON.stringify([0]), 'Test case 3 failed');
    console.log("All test cases passed!");
}
testMergeTwoLists();
//# sourceMappingURL=app.js.map