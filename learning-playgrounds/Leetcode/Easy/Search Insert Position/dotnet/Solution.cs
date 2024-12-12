using System.Diagnostics; // For assertions

public class Solution
{
    public int SearchInsert(int[] nums, int target)
    {
        int left = 0;
        int right = nums.Length - 1;

        while (left <= right)
        {
            int mid = (left + right) / 2;

            if (nums[mid] == target)
            {
                return mid;
            }
            if (nums[mid] < target)
            {
                left = mid + 1;
            }
            if (nums[mid] > target)
            {
                right = mid - 1;
            }
        }

        return left;
    }

    static void Main(string[] args)
    {
        Solution solution = new();

        // Test case 1
        int[] nums1 = [1, 3, 5, 6];
        int target1 = 5;
        Debug.Assert(solution.SearchInsert(nums1, target1) == 2, "Test 1 Failed");

        // Test case 2
        int[] nums2 = [1, 3, 5, 6];
        int target2 = 2;
        Debug.Assert(solution.SearchInsert(nums2, target2) == 1, "Test 2 Failed");

        // Test case 3
        int[] nums3 = [1, 3, 5, 6];
        int target3 = 7;
        Debug.Assert(solution.SearchInsert(nums3, target3) == 4, "Test 3 Failed");

        // Test case 4
        int[] nums4 = [1, 3, 5, 6];
        int target4 = 0;
        Debug.Assert(solution.SearchInsert(nums4, target4) == 0, "Test 4 Failed");

        // Edge case 1: Single element array
        int[] nums5 = [1];
        int target5 = 1;
        Debug.Assert(solution.SearchInsert(nums5, target5) == 0, "Edge Case 1 Failed");

        // Edge case 2: Target not in array
        int[] nums6 = [1, 3, 5, 6];
        int target6 = 4;
        Debug.Assert(solution.SearchInsert(nums6, target6) == 2, "Edge Case 2 Failed");

        // If no assertion fails
        Console.WriteLine("All test cases passed!");
    }
}
