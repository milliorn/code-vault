#include <iostream>
#include <vector> // Include the vector header

class Solution
{
public:
    int searchInsert(std::vector<int> &nums, int target)
    {
        int left = 0;
        int right = nums.size() - 1;

        while (left <= right)
        {
            int mid = (left + right) / 2;

            if (nums[mid] == target)
                return mid;

            if (nums[mid] < target)
                left = mid + 1;
            else
                right = mid - 1;
        }

        return left;
    }
};

int main()
{
    Solution solution;

    // Test cases
    std::vector<int> nums1 = {1, 3, 5, 6};
    int target1 = 5;
    std::cout << "Test Case 1: " << solution.searchInsert(nums1, target1) << " (Expected: 2)" << std::endl;

    std::vector<int> nums2 = {1, 3, 5, 6};
    int target2 = 2;
    std::cout << "Test Case 2: " << solution.searchInsert(nums2, target2) << " (Expected: 1)" << std::endl;

    std::vector<int> nums3 = {1, 3, 5, 6};
    int target3 = 7;
    std::cout << "Test Case 3: " << solution.searchInsert(nums3, target3) << " (Expected: 4)" << std::endl;

    std::vector<int> nums4 = {1, 3, 5, 6};
    int target4 = 0;
    std::cout << "Test Case 4: " << solution.searchInsert(nums4, target4) << " (Expected: 0)" << std::endl;

    // Edge case: Single element array
    std::vector<int> nums5 = {1};
    int target5 = 0;
    std::cout << "Test Case 5: " << solution.searchInsert(nums5, target5) << " (Expected: 0)" << std::endl;

    int target6 = 1;
    std::cout << "Test Case 6: " << solution.searchInsert(nums5, target6) << " (Expected: 0)" << std::endl;

    int target7 = 2;
    std::cout << "Test Case 7: " << solution.searchInsert(nums5, target7) << " (Expected: 1)" << std::endl;

    return 0;
}
