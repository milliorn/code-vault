# Setting Up

First things first: let’s create a hash to hold our movies and their ratings, and let’s prompt the user for input so we can eventually store movie/ratings pairs in our hash.

    favorite_foods = {
        'vegetable' => 'broccoli'
    }

    puts "Do you like coding in Ruby?"
    answer = gets.chomp

A hash is a way of storing data by a specifiable key, as opposed to an array which can only sort using numbers. It is created like { } above.
puts asks a question on the command line, here we ask if you like coding in Ruby.
In order to get the user input, we have to call .chomp on gets
