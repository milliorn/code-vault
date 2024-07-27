# Use print to ask the user for input.
# Declare a variable called user_input and set it equal to the user’s input using gets.chomp.
print "What is your favorite color?\n"
user_input = gets.chomp.downcase!

# Write an if statement in the editor. It should check to see if user_input includes "s".
if user_input.includes("s")
  print "Yes it has the letter s"
end