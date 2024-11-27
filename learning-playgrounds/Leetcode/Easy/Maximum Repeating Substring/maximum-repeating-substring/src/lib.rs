pub struct Solution;

impl Solution {
    pub fn max_repeating(sequence: String, word: String) -> i32 {
        let mut repeated = word.clone(); // Start with one repetition of `word`
        let mut count = 0;

        while sequence.contains(&repeated) {
            count += 1; // Increment count if `repeated` is a substring
            repeated += &word; // Append `word` to itself
        }

        count
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_case_1() {
        let sequence = "ababc".to_string();
        let word = "ab".to_string();
        let result = Solution::max_repeating(sequence, word);
        assert_eq!(result, 2);
    }

    #[test]
    fn test_case_2() {
        let sequence = "ababc".to_string();
        let word = "ba".to_string();
        let result = Solution::max_repeating(sequence, word);
        assert_eq!(result, 1);
    }

    #[test]
    fn test_case_3() {
        let sequence = "ababc".to_string();
        let word = "ac".to_string();
        let result = Solution::max_repeating(sequence, word);
        assert_eq!(result, 0);
    }

    #[test]
    fn test_case_4() {
        let sequence: String = "aaabaaaabaaabaaaabaaaabaaaabaaaaba".to_string();
        let word: String = "aaaba".to_string();
        let result: i32 = Solution::max_repeating(sequence, word);
        assert_eq!(result, 5)
    }
}

/*
1. **Initial Step of the Algorithm**:
   - We begin by checking if the `word` itself is a substring of `sequence`. This is the simplest case where `word` repeats exactly **once**.

2. **Building Incrementally**:
   - By starting with one repetition, we can systematically check for longer concatenations by appending `word` to itself. This approach avoids missing cases and ensures correctness.

3. **Avoid Redundancy**:
   - If you were to build multiple repetitions right away (e.g., `word.repeat(n)`), you'd risk unnecessary computations. Starting with one and incrementally appending avoids such redundancy.

4. **Logical Progression**:
   - Repeating `word` exactly once (`word`) is the base case. If this is not a substring, we can confidently stop early without checking for longer concatenations like `word + word`.

---

### How It Works:
#### Example:
- **`sequence = "aaabaaabaaabaaaba"`**
- **`word = "aaaba"`**

   1. Start with `repeated = word` (`"aaaba"`):
      - Check if `"aaaba"` is a substring of `sequence`. It is, so increment `count` to `1`.

   2. Append `word` to `repeated` (`"aaabaaaba"`):
      - Check if `"aaabaaaba"` is a substring of `sequence`. It is, so increment `count` to `2`.

   3. Append `word` again (`"aaabaaabaaaba"`):
      - Check if `"aaabaaabaaaba"` is a substring of `sequence`. It is, so increment `count` to `3`.

   4. Append `word` again (`"aaabaaabaaabaaaba"`):
      - Check if `"aaabaaabaaabaaaba"` is a substring of `sequence`. It is, so increment `count` to `4`.

   5. Append `word` again (`"aaabaaabaaabaaabaaaba"`):
      - Check if `"aaabaaabaaabaaabaaaba"` is a substring of `sequence`. It is, so increment `count` to `5`.

   6. Append `word` again (`"aaabaaabaaabaaabaaabaaaba"`):
      - Check if `"aaabaaabaaabaaabaaabaaaba"` is a substring of `sequence`. It is **not**, so stop.

Final `count = 5`.

---
*/
