# Create a hash and assign it to the variable movies. Put in your favorite movie as the key, with a number rating for the value.
movies = {
    "Braveheart" => 1,
    "Cowboy Bebop" => 2
}

# Prompt the user for input with puts and save that input in a variable called choice.
puts "What would you like to do?"
choice = gets.chomp

# Below your existing code, create a case statement for the choice variable with the following when conditions:
# Inside your when "add" block, remove the puts "Added!" statement.
# In its place, prompt the user for a movie title. Save the result in a new variable called title. (Your code already has an example of how to do this!)
# Next, prompt the user for the rating of the movie. Save that in a new variable called rating.
# Add that movie/rating pair to the movies hash and puts a message indicating the pair was added. (No need for to_sym or to_i just yet!)

case choice
when "add"
  puts "Name a movie"
  title = gets.chomp
  puts "Give it a rating"
  rating = gets.chomp
  movies[title] = rating
when "update"
  puts "Updated!"
when "display"
  puts "Movies!"
when "delete"
  puts "Deleted!"
else
  puts "Error!"
end