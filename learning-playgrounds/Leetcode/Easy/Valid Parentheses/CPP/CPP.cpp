#include <cassert>
#include <iostream>
#include <stack>
#include <string>
#include <unordered_map>

// Define the Solution class
class Solution
{
public:
    // Function to check if the parentheses in the input string are valid
    bool isValid(std::string s)
    {
        // Define a mapping of closing brackets to their corresponding opening brackets
        static const std::unordered_map<char, char> bracketMap = {
            {')', '('},
            {'}', '{'},
            {']', '['}};

        // Stack to keep track of opening brackets
        std::stack<char> stack;

        // Iterate over each character in the input string
        for (const char &letter : s)
        {
            // Check if the character is a closing bracket
            if (bracketMap.count(letter))
            {
                // Get the top element of the stack, or '#' if the stack is empty
                char top = stack.empty() ? '#' : stack.top();
                stack.pop(); // Remove the top element from the stack

                // If the top element does not match the corresponding opening bracket, return false
                if (top != bracketMap.at(letter))
                {
                    return false; // The string is not valid
                }
            }
            else
            {
                // If the character is an opening bracket, push it onto the stack
                stack.push(letter);
            }
        }

        // If the stack is empty, all brackets were matched; otherwise, return false
        return stack.size() == 0;
    }

    // Test cases for the isValid function
    static void test()
    {
        Solution solution;

        // Example 1: Balanced brackets
        assert(solution.isValid("()") == true);

        // Example 2: Balanced brackets with multiple types
        assert(solution.isValid("()[]{}") == true);

        // Example 3: Mismatched brackets
        assert(solution.isValid("(]") == false);

        // Example 4: Nested balanced brackets
        assert(solution.isValid("([])") == true);

        // Additional test cases
        assert(solution.isValid("({[]})") == true);  // Complex balanced case
        assert(solution.isValid("{[()]}") == true);  // Nested balanced case
        assert(solution.isValid("((((") == false);   // Unmatched opening brackets
        assert(solution.isValid("(([]))") == true);  // Nested balanced brackets
        assert(solution.isValid("(([])]") == false); // Mismatched brackets
        assert(solution.isValid("") == true);        // Empty string (valid by default)

        // Print a success message if all tests pass
        std::cout << "All tests passed!" << std::endl;
    }
};

// Main function to run the program
int main()
{
    // Call the test function
    Solution::test();

    // Print a friendly message to indicate the program ran successfully
    std::cout << "Hello World!\n";
    return 0;
}

// Run program: Ctrl + F5 or Debug > Start Without Debugging menu
// Debug program: F5 or Debug > Start Debugging menu

// Tips for Getting Started:
//   1. Use the Solution Explorer window to add/manage files
//   2. Use the Team Explorer window to connect to source control
//   3. Use the Output window to see build output and other messages
//   4. Use the Error List window to view errors
//   5. Go to Project > Add New Item to create new code files, or Project > Add Existing Item to add existing code files to the project
//   6. In the future, to open this project again, go to File > Open > Project and select the .sln file
