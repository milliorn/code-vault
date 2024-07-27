# frozen_string_literal: true

# Use a puts statement to prompt the user for input. Use gets.chomp to save this input to a variable called text.
puts 'Give me input'
text = gets.chomp

# Declare a variable called words and set it equal to the result of calling .split on text.
words = text.split

# Create a hash called frequencies in the editor.
# Give it a default value of 0.
frequencies = Hash.new(0)
