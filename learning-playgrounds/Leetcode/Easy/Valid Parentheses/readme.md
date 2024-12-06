# 20. Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

## Intuition

The problem involves determining whether a string of parentheses is valid. A string is valid if every closing bracket matches the most recently opened bracket of the same type. This behavior can be efficiently handled using a stack data structure, which operates in a Last-In-First-Out (LIFO) manner, making it ideal for tracking and matching opening and closing brackets.

## Approach

1. **Bracket Mapping**:

   - Create a dictionary (`bracketMap`) that maps each closing bracket (`)`, `}`, `]`) to its corresponding opening bracket (`(`, `{`, `[`).

2. **Iterate Through String**:

   - Traverse each character in the string.

3. **Handle Closing Brackets**:

   - Check if the character is a closing bracket by looking it up in the map.
   - If the stack is empty or the top of the stack does not match the expected opening bracket, return `false`.
   - Otherwise, remove the top of the stack.

4. **Handle Opening Brackets**:

   - If the character is not a closing bracket, push it onto the stack.

5. **Final Check**:
   - After processing the entire string, return `true` if the stack is empty; otherwise, return `false`.

## Complexity

- **Time Complexity**:
  $$O(n)$$

  - Each character in the string is processed once.
  - Stack operations (push, pop) are \(O(1)\).

- **Space Complexity**:
  $$O(n)$$
  - In the worst case, the stack holds all the opening brackets in the string.

## Code

```cpp
class Solution
{
public:
    bool isValid(std::string s)
    {
        // Define the bracket map
        static const std::unordered_map<char, char> bracketMap = {
            {')', '('},
            {'}', '{'},
            {']', '['}};

        // Stack to keep track of unmatched opening brackets
        std::stack<char> stack;

        for (const char &letter : s)
        {
            // If the character is a closing bracket
            if (bracketMap.count(letter))
            {
                // Get the top of the stack or a placeholder if the stack is empty
                char top = stack.empty() ? '#' : stack.top();
                stack.pop(); // Remove the top element

                // If the top element does not match the corresponding opening bracket, return false
                if (top != bracketMap.at(letter))
                {
                    return false;
                }
            }
            else
            {
                // If the character is an opening bracket, push it onto the stack
                stack.push(letter);
            }
        }

        // If the stack is empty, all brackets were matched; otherwise, return false
        return stack.empty();
    }
};
```
