# Use print to ask the user for input.
# Declare a variable called user_input and set it equal to the user’s input using gets.chomp.
print "What is your favorite color?\n"
user_input = gets.chomp

# Write an if statement in the editor. It should check to see if user_input includes "s".
# Remove the print statement you added to your if statement and
# replace it with a call to .gsub! on user_input. Have it replace /s/ with "th".


if user_input.include?("s")
  user_input.gsub!(/s/, "th")
  print user_input
end