# Search Insert Position

## Problem Description

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

### Examples:

#### Example 1:

- **Input:** nums = [1,3,5,6], target = 5
- **Output:** 2

#### Example 2:

- **Input:** nums = [1,3,5,6], target = 2
- **Output:** 1

#### Example 3:

- **Input:** nums = [1,3,5,6], target = 7
- **Output:** 4

## Constraints:

- `nums` contains distinct values sorted in ascending order.
- The algorithm must run in O(log n) time complexity.

---

## Intuition

To efficiently find the target or determine its insertion position, binary search is an appropriate choice. Binary search halves the search space at each step, ensuring logarithmic time complexity.

---

## Approach

1. Initialize two pointers: `left` at the beginning and `right` at the end of the array.
2. Use a loop to calculate the middle index `mid` of the current search space.
3. Compare the target with the value at `nums[mid]`:
   - If equal, return `mid`.
   - If greater, adjust `right` to `mid`.
   - If less, adjust `left` to `mid + 1`.
4. When the loop ends, `left` will represent the position where the target should be inserted.

---

## Complexity

- **Time complexity:**
  $$O(\log n)$$
  The binary search algorithm divides the search space in half at each step.

- **Space complexity:**
  $$O(1)$$
  The algorithm operates in constant space as it uses only a few variables for tracking pointers.

---

## Code

```rust
impl Solution {
    pub fn search_insert(nums: Vec<i32>, target: i32) -> i32 {
        let mut left: usize = 0;
        let mut right: usize = nums.len();

        while left < right {
            let mid: usize = left + (right - left) / 2;

            match nums[mid].cmp(&target) {
                std::cmp::Ordering::Equal => return mid as i32,
                std::cmp::Ordering::Less => left = mid + 1,
                std::cmp::Ordering::Greater => right = mid
            }
        }
        left as i32
    }
}
```
