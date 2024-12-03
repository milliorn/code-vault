class Solution(object):
    def isValid(self, s):
        bracket_map = {")": "(", "}": "{", "]": "["}
        stack = []

        for char in s:
            if char in bracket_map.values():  # Check if it's an opening bracket
                stack.append(char)
            elif char in bracket_map:  # It's a closing bracket
                if not stack or stack.pop() != bracket_map[char]:
                    return False  # imbalance

        return not stack  # True if stack is empty, meaning all brackets matched
