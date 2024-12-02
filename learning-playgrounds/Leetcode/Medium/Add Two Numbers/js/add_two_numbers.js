// Definition for singly-linked list.
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(l1, l2) {
  // Initialize a dummy node and pointers
  let head = new ListNode(0); // Dummy node to simplify the result list
  let current = head;        // Pointer to build the result list
  let carry = 0;             // Initialize carry

  // Traverse both linked lists until all nodes are processed
  while (l1 || l2) {
    // Extract values or use 0 if the list is exhausted
    let val1 = l1 ? l1.val : 0;
    let val2 = l2 ? l2.val : 0;

    // Calculate the sum and carry
    let sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10); // Update carry
    let digit = sum % 10;         // Extract the digit

    // Create a new node for the result digit and append it
    current.next = new ListNode(digit);
    current = current.next;

    // Move to the next nodes in l1 and l2 if they exist
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  // Handle leftover carry
  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  // Return the result linked list (skipping the initial dummy node)
  return head.next;
}

// Helper function to create a linked list from an array
function createList(arr) {
  let head = new ListNode(0);
  let current = head;
  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return head.next;
}

// Helper function to convert a linked list to an array
function toArray(list) {
  let result = [];
  while (list) {
    result.push(list.val);
    list = list.next;
  }
  return result;
}

// Test cases
function runTests() {
  const tests = [
    {
      l1: [2, 4, 3],
      l2: [5, 6, 4],
      expected: [7, 0, 8],
    },
    {
      l1: [0],
      l2: [0],
      expected: [0],
    },
    {
      l1: [9, 9, 9, 9, 9, 9, 9],
      l2: [9, 9, 9, 9],
      expected: [8, 9, 9, 9, 0, 0, 0, 1],
    },
  ];

  tests.forEach(({ l1, l2, expected }, index) => {
    const list1 = createList(l1);
    const list2 = createList(l2);
    const result = addTwoNumbers(list1, list2);
    const resultArray = toArray(result);

    console.log(
      `Test Case ${index + 1}:`,
      JSON.stringify(resultArray) === JSON.stringify(expected)
        ? "Passed"
        : `Failed (Expected: ${expected}, Got: ${resultArray})`
    );
  });
}

// Run the tests
runTests();
