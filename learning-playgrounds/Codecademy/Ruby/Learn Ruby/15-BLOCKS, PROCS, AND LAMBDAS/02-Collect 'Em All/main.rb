fibs = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

# Add your code below!
# We’ve created an array, fibs, and placed the first ten Fibonacci numbers in it.
# Create a new variable, doubled_fibs, and set it equal to the result of calling fibs.collect.
# The block you pass to .collect should double each Fibonacci number, similar to the example above.
doubled_fibs = fibs.collect {|x| x * 2}
puts doubled_fibs