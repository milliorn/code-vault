# frozen_string_literal: true

# Use a puts statement to prompt the user for input. Use gets.chomp to save this input to a variable called text.
puts 'Give me input'
text = gets.chomp

# Declare a variable called words and set it equal to the result of calling .split on text.
words = text.split

# Create a hash called frequencies in the editor.
frequencies = Hash.new(0)

# Use .each to iterate over the words array.
# For each word we find, assume that the word itself is a key in frequencies and increment its value by 1.
words.each { |key| frequencies[key] += 1 }
