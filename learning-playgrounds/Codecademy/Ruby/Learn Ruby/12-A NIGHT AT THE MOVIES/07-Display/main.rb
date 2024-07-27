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
# Call .to_sym on your title and .to_i on your rating so that your movie titles are stored as symbols in the hash and the associated ratings are stored as integers.
# Add an if/else statement to the add branch of your case. If the movie isn’t already in the hash (that is, if movies[title.to_sym] is nil), it should add the movie/rating pair; otherwise, it should puts that the movie already exists and not add anything to the hash. Make sure to test it!
# Inside your when "update" block, remove the puts "Updated!" statement.
# Prompt the user for a movie title. Store it in title.
# if the movies[title] is nil, then the movie is not in the hash. Please puts a string telling the user of their error.
# First, remove the puts "Movies!" when the user types “display”.
# Next, iterate through the hash using .each and puts each movie/rating pair. The format should be "#{movie}: #{rating}. Make sure to test it out!

case choice
when "add"
  puts "What movie would you like to add? "
  title = gets.chomp
  if movies[title.to_sym].nil?
    puts "What rating does the movie have? "
    rating = gets.chomp
    movies[title.to_sym] = rating.to_i
  else
    puts "That movie already exists! Its rating is #{movies[title.to_sym]}."
  end
when "update"
  puts "Enter a movie title"
  title = gets.chomp
  if movies[title].nil?
    puts "Movie not found."
  else
    puts "Enter a new rating."
    rating = gets.chomp
  end
when "display"
  movies.each { |movie, ratings| puts "#{movie}: #{ratings}" }
when "delete"
  puts "Deleted!"
else
  puts "Error!"
end
