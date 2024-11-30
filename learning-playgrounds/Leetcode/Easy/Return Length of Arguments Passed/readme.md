# 2703. Return Length of Arguments Passed

Write a function argumentsLength that returns the count of arguments passed to it.

## Example 1:

Input: args = [5]
Output: 1
Explanation:
argumentsLength(5); // 1

One value was passed to the function so it should return 1.

## Example 2:

Input: args = [{}, null, "3"]
Output: 3
Explanation:
argumentsLength({}, null, "3"); // 3

Three values were passed to the function so it should return 3.

## Constraints:

args is a valid JSON array
0 <= args.length <= 100

# Intuition

<!-- Describe your first thoughts on how to solve this problem. -->

The problem requires determining the number of arguments passed to a function. Since JavaScript functions can accept a dynamic number of arguments, using the rest parameter syntax (`...args`) is a straightforward way to collect these arguments into an array-like structure. The length of this array can then directly provide the number of arguments.

# Approach

<!-- Describe your approach to solving the problem. -->

1. Use the rest parameter (`...args`) to collect all arguments passed to the function into an array-like structure.
2. Use the `.length` property of the array to count the number of arguments passed.
3. Return this count as the result.

# Complexity

- Time complexity:
  <!-- Add your time complexity here, e.g. O(n) -->

  O(1) – Accessing the `.length` property of an array is a constant-time operation.

- Space complexity:
  <!-- Add your space complexity here, e.g. O(n) -->
  O(n) – The space required depends on the number of arguments passed, as they are stored in the array `args`.
