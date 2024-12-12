class Solution(object):
    def searchInsert(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        left = 0  # left pointer
        right = len(nums) - 1  # right pointer

        while left <= right:  # binary search
            mid = (left + right) // 2  # midpoint index

            if nums[mid] == target:
                return mid
            if nums[mid] < target:
                left = mid + 1  # narrow the search to the right chunk
            if nums[mid] > target:
                right = mid - 1  # narrow the search to the left chunk

        return left  # target should be here if not found in loop


# Example Test Cases
nums = [1, 3, 5, 6]
target = 5
expected = 2
print(f"Test 1: {Solution().searchInsert(nums, target)} == {expected}")

nums = [1, 3, 5, 6]
target = 2
expected = 1
print(f"Test 2: {Solution().searchInsert(nums, target)} == {expected}")

nums = [1, 3, 5, 6]
target = 7
expected = 4
print(f"Test 3: {Solution().searchInsert(nums, target)} == {expected}")

# Edge Cases
nums = [1, 3, 5, 6]
target = 0
expected = 0
print(f"Edge Case 1: {Solution().searchInsert(nums, target)} == {expected}")

nums = [-10, -5, 0, 3, 8, 12]
target = -5
expected = 1
print(f"Edge Case 2: {Solution().searchInsert(nums, target)} == {expected}")

nums = [-10, -5, 0, 3, 8, 12]
target = 6
expected = 4
print(f"Edge Case 3: {Solution().searchInsert(nums, target)} == {expected}")

nums = [-10, -5, 0, 3, 8, 12]
target = 13
expected = 6
print(f"Edge Case 4: {Solution().searchInsert(nums, target)} == {expected}")

# Single Element Arrays
nums = [1]
target = 1
expected = 0
print(f"Single Element Case 1: {Solution().searchInsert(nums, target)} == {expected}")

nums = [1]
target = 0
expected = 0
print(f"Single Element Case 2: {Solution().searchInsert(nums, target)} == {expected}")

nums = [1]
target = 2
expected = 1
print(f"Single Element Case 3: {Solution().searchInsert(nums, target)} == {expected}")

# Large Range
nums = [-10000, -9999, -5000, -100, 0, 100, 5000, 9999, 10000]
target = -100
expected = 3
print(f"Large Range Case 1: {Solution().searchInsert(nums, target)} == {expected}")

nums = [-10000, -9999, -5000, -100, 0, 100, 5000, 9999, 10000]
target = 200
expected = 6
print(f"Large Range Case 2: {Solution().searchInsert(nums, target)} == {expected}")

nums = [-10000, -9999, -5000, -100, 0, 100, 5000, 9999, 10000]
target = -10001
expected = 0
print(f"Large Range Case 3: {Solution().searchInsert(nums, target)} == {expected}")

nums = [-10000, -9999, -5000, -100, 0, 100, 5000, 9999, 10000]
target = 10001
expected = 9
print(f"Large Range Case 4: {Solution().searchInsert(nums, target)} == {expected}")

# Array Length Edge Cases
nums = [1]
target = 1
expected = 0
print(f"Min Length Case: {Solution().searchInsert(nums, target)} == {expected}")

nums = [i for i in range(-100, 101)]  # [-100, -99, ..., 100]
target = 50
expected = 150
print(f"Max Length Case: {Solution().searchInsert(nums, target)} == {expected}")
