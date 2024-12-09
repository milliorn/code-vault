#include <iostream>
#include <vector>

// Definition for singly-linked list.
struct ListNode
{
	int val;
	ListNode *next;
	ListNode() : val(0), next(nullptr) {}
	ListNode(int x) : val(x), next(nullptr) {}
	ListNode(int x, ListNode *next) : val(x), next(next) {}
};

class Solution
{
public:
	ListNode *mergeTwoLists(ListNode *list1, ListNode *list2)
	{
		ListNode dummy(0);					// Use a dummy node to simplify the logic
		ListNode *current = &dummy; // Pointer to build the merged list

		while (list1 && list2)
		{ // Traverse while both lists are non-empty
			if (list1->val <= list2->val)
			{
				current->next = list1;
				list1 = list1->next;
			}
			else
			{
				current->next = list2;
				list2 = list2->next;
			}
			current = current->next;
		}

		// Attach the remaining nodes of either list
		current->next = list1 ? list1 : list2;

		return dummy.next; // Skip the dummy node and return the head of the merged list
	}
};

// Helper function to create a linked list from a vector
ListNode *createLinkedList(const std::vector<int> &values)
{
	ListNode dummy(0);
	ListNode *current = &dummy;

	for (int value : values)
	{
		current->next = new ListNode(value);
		current = current->next;
	}

	return dummy.next;
}

// Helper function to convert a linked list back into a vector
std::vector<int> linkedListToVector(ListNode *head)
{
	std::vector<int> result;
	while (head)
	{
		result.push_back(head->val);
		head = head->next;
	}
	return result;
}

// Test cases
void runTests()
{
	Solution solution;

	// Test case 1
	{
		ListNode *list1 = createLinkedList({1, 2, 4});
		ListNode *list2 = createLinkedList({1, 3, 4});
		ListNode *mergedList = solution.mergeTwoLists(list1, list2);
		std::vector<int> result = linkedListToVector(mergedList);
		std::cout << "Test Case 1: ";
		for (int val : result)
			std::cout << val << " ";
		std::cout << std::endl;
	}

	// Test case 2
	{
		ListNode *list1 = createLinkedList({});
		ListNode *list2 = createLinkedList({});
		ListNode *mergedList = solution.mergeTwoLists(list1, list2);
		std::vector<int> result = linkedListToVector(mergedList);
		std::cout << "Test Case 2: ";
		for (int val : result)
			std::cout << val << " ";
		std::cout << std::endl;
	}

	// Test case 3
	{
		ListNode *list1 = createLinkedList({});
		ListNode *list2 = createLinkedList({0});
		ListNode *mergedList = solution.mergeTwoLists(list1, list2);
		std::vector<int> result = linkedListToVector(mergedList);
		std::cout << "Test Case 3: ";
		for (int val : result)
			std::cout << val << " ";
		std::cout << std::endl;
	}
}

int main()
{
	runTests();
	return 0;
}
