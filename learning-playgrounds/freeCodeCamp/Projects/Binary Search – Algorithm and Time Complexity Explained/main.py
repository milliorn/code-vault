def linear_search(nums, target):  # O(n)
    for num in nums:  # iterate through nums
        if num == target:  # if target is found
            return True  # return True
    return False  # if target is not found


def binary_search(nums, target):  # O(log n)
    left = 0  # left pointer
    right = len(nums) - 1  # right pointer

    while left <= right:
        mid = (left + right)//2  # middle pointer

        if nums[mid] == target:  # if target is found
            return True
        elif nums[mid] > target:  # if target is less than mid
            right = mid - 1  # move right pointer to mid - 1
        else:  # if target is greater than mid
            left = mid + 1  # move left pointer to mid + 1
    return False  # if target is not found


nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]  # sorted list
target = 5  # target to search for

print(linear_search(nums, target))  # True

target = 10  # target to search for

print(linear_search(nums, target))  # False

print(binary_search(nums, target))  # False

target = 5  # target to search for

print(binary_search(nums, target))  # True
