#After each variable assignment: first_name, last_name, and city add the .capitalize! method

# print the question "What's your first name?" to the screen.
# Feel free to peek back at the first exercise if you need a syntax reminder.
print "What's your first name? "

#Declare a variable first_name and set it equal to gets.chomp.
first_name = gets.chomp.capitalize!

#Add print prompts, variables, and gets.chomps for the user’s last name, city, and state/province
print "What's your last name? "
last_name = gets.chomp.capitalize!

print "What's your city's name? "
city = gets.chomp.capitalize!

print "What's your state's name? "
state = gets.chomp.upcase

#Let’s use this syntax to print out the values of first_name, last_name, city, and state using #{} syntax.
print "My name is #{first_name} #{last_name}.  I live in #{city}, #{state}."

