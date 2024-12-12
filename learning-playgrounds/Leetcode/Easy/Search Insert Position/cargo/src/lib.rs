pub struct Solution;

impl Solution {
    pub fn search_insert(nums: Vec<i32>, target: i32) -> i32 {
        let mut left: usize = 0;
        let mut right: usize = nums.len();

        while left < right {
            let mid: usize = left + (right - left) / 2;

            match nums[mid].cmp(&target) {
                std::cmp::Ordering::Equal => return mid as i32,
                std::cmp::Ordering::Less => left = mid + 1,
                std::cmp::Ordering::Greater => right = mid,
            }
        }
        left as i32
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_one() {
        let input: Vec<i32> = vec![1, 3, 5, 6];
        let target: i32 = 5;
        let expected = 2;
        let output = Solution::search_insert(input, target);
        assert_eq!(output, expected);
    }

    #[test]
    fn test_two() {
        let input: Vec<i32> = vec![1, 3, 5, 6];
        let target: i32 = 2;
        let expected = 1;
        let output = Solution::search_insert(input, target);
        assert_eq!(output, expected);
    }

    #[test]
    fn test_three() {
        let input: Vec<i32> = vec![1, 3, 5, 6];
        let target: i32 = 7;
        let expected = 4;
        let output = Solution::search_insert(input, target);
        assert_eq!(output, expected);
    }

    #[test]
    fn test_four() {
        let input: Vec<i32> = vec![1, 3, 5, 6];
        let target: i32 = 0;
        let expected = 0;
        let output = Solution::search_insert(input, target);
        assert_eq!(output, expected);
    }

    #[test]
    fn test_five() {
        let input: Vec<i32> = vec![1, 3];
        let target: i32 = 2;
        let expected = 1;
        let output = Solution::search_insert(input, target);
        assert_eq!(output, expected);
    }
}
