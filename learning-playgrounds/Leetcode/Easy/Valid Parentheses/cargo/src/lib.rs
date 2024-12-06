use std::collections::HashMap;

pub struct Solution;

impl Solution {
    pub fn is_valid(s: String) -> bool {
        // Define a map for closing brackets and their corresponding opening brackets
        let bracket_map: HashMap<char, char> = HashMap::from([(')', '('), ('}', '{'), (']', '[')]);
        let mut stack: Vec<char> = Vec::new();

        // Iterate over each character in the input string
        for letter in s.chars() {
            if let Some(&expected_open) = bracket_map.get(&letter) {
                // If the character is a closing bracket
                if stack.pop().unwrap_or('#') != expected_open {
                    // Check if the top of the stack matches the expected opening bracket
                    return false;
                }
            } else {
                // If the character is an opening bracket, push it onto the stack
                stack.push(letter);
            }
        }

        // Return true if the stack is empty, indicating all brackets are balanced
        stack.is_empty()
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    fn check_test_case(input: &str, expected: bool) {
        let result = Solution::is_valid(input.to_owned());
        if result != expected {
            println!(
                "Test failed for input: {}\nExpected: {}\nGot: {}\n",
                input, expected, result
            );
        }
        assert_eq!(result, expected);
    }

    #[test]
    fn test_empty_string() {
        check_test_case("", true);
    }

    #[test]
    fn test_single_opening_or_closing() {
        check_test_case("(", false);
        check_test_case("{", false);
        check_test_case("]", false);
    }

    #[test]
    fn test_nested_and_mixed() {
        check_test_case("{[()]}", true);
        check_test_case("({[]})", true);
    }

    #[test]
    fn test_imbalanced_brackets() {
        check_test_case("(((())))", true);
        check_test_case("))(((", false);
    }

    #[test]
    fn test_long_input() {
        check_test_case("()()()()()", true);
    }

    #[test]
    fn test_unmatched_closing() {
        check_test_case(")(", false);
        check_test_case("]}", false);
    }

    #[test]
    fn test_random_invalid() {
        check_test_case("[(])", false);
        check_test_case("([{})]", false);
    }

    #[test]
    fn test_edge_case_nested() {
        check_test_case(
            "((((((((((((((((((())))))))))))))))))",
            false, // This is a mismatched bracket case
        );
    }
}
