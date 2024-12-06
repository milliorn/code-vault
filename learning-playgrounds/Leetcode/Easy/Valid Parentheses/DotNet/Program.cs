using System;
using System.Collections.Generic;

namespace DotNet
{
    internal class Program
    {
        public bool IsValid(string s)
        {
            Dictionary<char, char> bracketMap = new Dictionary<char, char>
            {
                { ')', '(' },
                { '}', '{' },
                { ']', '[' }
            };

            Stack<char> stack = new Stack<char>();

            foreach (char letter in s)
            {
                if (bracketMap.ContainsKey(letter))
                {
                    char top = stack.Count > 0 ? stack.Pop() : '#';

                    if (top != bracketMap[letter])
                    {
                        return false;
                    }
                }
                else
                {
                    stack.Push(letter);
                }
            }

            return stack.Count == 0;
        }

        static void Main(string[] args)
        {
            // Test cases
            Program program = new Program();

            var testCases = new List<(string Input, bool Expected)>
            {
                ("()", true), // Example 1
                ("()[]{}", true), // Example 2
                ("(]", false), // Example 3
                ("([])", true), // Example 4
                ("{[()]}", true), // Valid nested
                ("{[(])}", false), // Invalid nested
                ("", true), // Empty string is valid
                ("(", false), // Single opening bracket
                ("]", false), // Single closing bracket
                ("()(){}", true), // Multiple valid pairs
            };

            foreach ((string Input, bool Expected) in testCases)
            {
                var result = program.IsValid(Input);
                Console.WriteLine($"Input: \"{Input}\", Expected: {Expected}, Got: {result}");
            }
        }
    }
}
