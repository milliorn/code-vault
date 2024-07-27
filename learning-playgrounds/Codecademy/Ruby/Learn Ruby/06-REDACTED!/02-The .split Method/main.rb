# Use puts to prompt the user for input two times. For the first puts,
# declare a variable called text and set it equal to the user’s input via gets.chomp.
puts "Enter some text"
text = gets.chomp


#For the second puts, declare a variable called redact and set it equal to the user’s input using gets.chomp.
puts "Enter some more text"
redact = gets.chomp

#Declare a variable called words and set it equal to the result of calling the .split method on text.
# Pass .split a space (" ") to use as a delimiter so that we get an array made up of the words from text.
words = text.split(" ")
