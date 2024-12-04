function isValid(s: string): boolean {
  const bracket_map: { [key: string]: string } = { ')': '(', '}': '{', ']': '[' };
  const stack: string[] = [];

  for (const char of s) {
    if (Object.values(bracket_map).includes(char)) {
      stack.push(char);
    } else if (char in bracket_map) {
      if (stack.length === 0 || stack.pop() !== bracket_map[char]) {
        return false
      }
    }
  }

  return stack.length === 0
};
