function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2); // Ensure you use Math.floor for integers
        if (nums[mid] == target) {
            return mid;
        }
        if (nums[mid] < target) {
            left = mid + 1;
        }
        if (nums[mid] > target) {
            right = mid - 1;
        }
    }
    return left;
}
;
function testSearchInsert() {
    // Example Test Cases
    console.assert(searchInsert([1, 3, 5, 6], 5) === 2, 'Test Case 1 Failed');
    console.assert(searchInsert([1, 3, 5, 6], 2) === 1, 'Test Case 2 Failed');
    console.assert(searchInsert([1, 3, 5, 6], 7) === 4, 'Test Case 3 Failed');
    // Edge Test Cases
    console.assert(searchInsert([1, 3, 5, 6], 0) === 0, 'Edge Case 1 Failed');
    console.assert(searchInsert([-10, -5, 0, 3, 8, 12], -5) === 1, 'Edge Case 2 Failed');
    console.assert(searchInsert([-10, -5, 0, 3, 8, 12], 6) === 4, 'Edge Case 3 Failed');
    console.assert(searchInsert([-10, -5, 0, 3, 8, 12], 13) === 6, 'Edge Case 4 Failed');
    // Single Element Array Test Cases
    console.assert(searchInsert([1], 1) === 0, 'Single Element Case 1 Failed');
    console.assert(searchInsert([1], 0) === 0, 'Single Element Case 2 Failed');
    console.assert(searchInsert([1], 2) === 1, 'Single Element Case 3 Failed');
    // Large Range Test Cases
    console.assert(searchInsert([-10000, -9999, -5000, -100, 0, 100, 5000, 9999, 10000], -100) === 3, 'Large Range Case 1 Failed');
    console.assert(searchInsert([-10000, -9999, -5000, -100, 0, 100, 5000, 9999, 10000], 200) === 6, 'Large Range Case 2 Failed');
    console.assert(searchInsert([-10000, -9999, -5000, -100, 0, 100, 5000, 9999, 10000], -10001) === 0, 'Large Range Case 3 Failed');
    console.assert(searchInsert([-10000, -9999, -5000, -100, 0, 100, 5000, 9999, 10000], 10001) === 9, 'Large Range Case 4 Failed');
    console.log('All test cases passed!');
}
testSearchInsert();
//# sourceMappingURL=app.js.map