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

# Use .sort_by to sort the frequencies hash by word count, like step 2 above. Store the result back in frequencies.
frequencies = frequencies.sort_by do |_word, count|
  count
end

# Use .reverse! to reverse the sorted frequencies array.
frequencies.reverse!

# Iterate over .each key/value pair in the frequencies hash.
# Then, puts each word, a single space, and its frequency to the console, like in the example above.
frequencies.each do |key, value|
  puts key + ' ' + value.to_s
end
