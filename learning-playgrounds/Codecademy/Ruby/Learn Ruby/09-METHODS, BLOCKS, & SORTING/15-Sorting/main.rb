# Use .sort! to sort the fruits array in descending (that is, reverse) alphabetical order. You can use the combined comparison operator (like the example above) or an if/elsif/else statement.
fruits = ["orange", "apple", "banana", "pear", "grapes"]

fruits.sort! { |a, b|
  b <=> a
}