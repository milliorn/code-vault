#include <iostream>
#include <vector>

// Definition for singly-linked list.
struct ListNode {
	int val;
	ListNode* next;
	ListNode() : val(0), next(nullptr) {}
	ListNode(int x) : val(x), next(nullptr) {}
	ListNode(int x, ListNode* next) : val(x), next(next) {}
};

class Solution {
public:
	ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
		ListNode head = ListNode(0);
		ListNode* current = &head;

		int carry = 0;

		while (l1 != NULL || l2 != NULL) {
			int val1 = l1 != NULL ? l1->val : 0;
			int val2 = l2 != NULL ? l2->val : 0;
			int sum = val1 + val2 + carry;

			carry = sum / 10;
			current->next = new ListNode(sum % 10);
			current = current->next;

			if (l1 != NULL) l1 = l1->next;
			if (l2 != NULL) l2 = l2->next;
		}

		if (carry > 0) {
			current->next = new ListNode(carry);
		}

		return head.next;
	}
};

// Helper function to create a linked list from a vector
ListNode* createList(const std::vector<int>& nums) {
	ListNode* dummy = new ListNode(0);
	ListNode* current = dummy;
	for (int num : nums) {
		current->next = new ListNode(num);
		current = current->next;
	}
	return dummy->next;
}

// Helper function to print a linked list
void printList(ListNode* node) {
	while (node) {
		std::cout << node->val << " ";
		node = node->next;
	}
	std::cout << std::endl;
}

// Main function to run the test cases
int main() {
	Solution solution;

	// Test case 1
	ListNode* l1 = createList({ 2, 4, 3 });
	ListNode* l2 = createList({ 5, 6, 4 });
	ListNode* result = solution.addTwoNumbers(l1, l2);
	std::cout << "Test Case 1: ";
	printList(result); // Expected output: 7 0 8

	// Test case 2
	l1 = createList({ 0 });
	l2 = createList({ 0 });
	result = solution.addTwoNumbers(l1, l2);
	std::cout << "Test Case 2: ";
	printList(result); // Expected output: 0

	// Test case 3
	l1 = createList({ 9, 9, 9, 9, 9, 9, 9 });
	l2 = createList({ 9, 9, 9, 9 });
	result = solution.addTwoNumbers(l1, l2);
	std::cout << "Test Case 3: ";
	printList(result); // Expected output: 8 9 9 9 0 0 0 1

	return 0;
}
