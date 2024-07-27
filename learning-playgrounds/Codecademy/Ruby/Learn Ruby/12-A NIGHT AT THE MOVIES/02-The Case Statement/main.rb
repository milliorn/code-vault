# Create a hash and assign it to the variable movies. Put in your favorite movie as the key, with a number rating for the value.
movies = {
    "Braveheart" => 1,
    "Cowboy Bebop" => 2
}

# Prompt the user for input with puts and save that input in a variable called choice.
puts "What is your favorite movie?"
choice = gets.chomp

# Below your existing code, create a case statement for the choice variable with the following when conditions:
case choice
when "add"
  puts "Added!"
when "update"
  puts "Updated!"
when "display"
  puts "Movies!"
when "delete"
  puts "Deleted!"
else
  puts "Error!"
end