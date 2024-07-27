# Big O Cheat Sheet – Time Complexity Chart

## URL
  
<https://www.freecodecamp.org/news/big-o-cheat-sheet-time-complexity-chart>

## In Big O, there are six major types of complexities (time and space)

### Constant: O(1)

- Linear time: O(n)
- Logarithmic time: O(n log n)
- Quadratic time: O(n^2)
- Exponential time: O(2^n)
- Factorial time: O(n!)

### Best to Worst

- O(1) - Excellent/Best
- O(log n) - Good
- O(n) - Fair
- O(n log n) - Bad
- O(n^2), O(2^n) and O(n!) - Horrible/Worst

When your calculation is not dependent on the input size, it is a constant time complexity (O(1)).

When the input size is reduced by half, maybe when iterating, handling recursion, or whatsoever, it is a logarithmic time complexity (O(log n)).

When you have a single loop within your algorithm, it is linear time complexity (O(n)).

When you have nested loops within your algorithm, meaning a loop in a loop, it is quadratic time complexity (O(n^2)).

When the growth rate doubles with each addition to the input, it is exponential time complexity (O2^n).
