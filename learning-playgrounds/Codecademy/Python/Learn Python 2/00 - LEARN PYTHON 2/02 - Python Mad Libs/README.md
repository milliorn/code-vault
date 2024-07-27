# Python Mad Libs

In this project, we’ll use Python to write a Mad Libs word game! Mad Libs have short stories with blank spaces that a player can fill in. The result is usually funny (or strange).

Mad Libs require:

A short story with blank spaces (asking for different types of words).
Words from the player to fill in those blanks.
“Roses are Red” poem example:

Mad Libs Example

For this project, we have provided the story, but it will be up to you to complete the following:

Prompt the user for inputs.
Print the story with the inputs in the right places.
Let’s begin!

If you get stuck during this project or would like to see an experienced developer work through it, click “Get Help“ to see a project walkthrough video.

Tasks

1.
Begin by completing the multi-line comment that describes this program.

The """s are already written.
2.
Take a look at the variable named STORY. It is set equal to a string that contains our story.
3.
Let’s inform the user that the program is running.

After the STORY, print a message to let the user know that Mad Libs has started.
4.
The story that we have provided is going to need a main character.

Ask the user to input a name, and store the user’s input in a variable:

name = raw_input("Enter a name: ")
Note: It’s common practice to use short, but descriptive variable names.
5.
You will need to ask the user for three adjectives.

Ask the user for input three separate times. Store each adjective that the user inputs into descriptive variables as you did when you asked the user for a name.
6.
It’s a good practice to save, and run the code every few steps to make sure there are no bugs.

In the terminal, type the following command and press Enter on your keyboard:

python Madlibs.py
7.
Moving on! You’ll also need to ask the user for one verb.

Ask the user for input a verb. Store the verb in a variable.
8.
The story also needs two nouns.

Ask the user to input two nouns. Store each noun in its own variable.
9.
This is where the story can get really fun and weird.

Ask the user to input one of each of the following:

An animal
A food
A fruit
A superhero
A country
A dessert
A year
Make sure to save the inputs into different variables.
10.
At this point, we have all the words needed for the story.

The next step is to insert all of the user’s inputs into the blank spaces of the story using string formatting.

In the STORY, replace all the _ with %s.
11.
Write the final line of the program that prints the story and inserts all the variables (using string formatting with %) in the following order:

Name
First adjective
Second adjective
Animal
Food
Verb
First noun
Fruit
Third adjective
Name
Superhero
Name
Country
Name
Dessert
Name
Year
Second noun
12.
Let’s run the program!

Save the program. Then, in the terminal, type the following command and press Enter:

python Madlibs.py
