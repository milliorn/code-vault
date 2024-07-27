strings = ["HTML", "CSS", "JavaScript", "Python", "Ruby"]

# Add your code below!
# Create a new variable, symbols, and store an empty array in it.
symbols = []

# Use .each to iterate over the strings array.
strings.each do |s|
  symbols.push(s.to_sym)
end
print symbols
