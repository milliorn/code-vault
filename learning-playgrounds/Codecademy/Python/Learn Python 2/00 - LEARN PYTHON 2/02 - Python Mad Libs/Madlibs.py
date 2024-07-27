"""
This program generates passages that are generated in mad-lib format
Author: Katherin
"""

print("Mad Libs has started.")

name = input("Enter a name:")
adj1 = input("Enter an adjective:")
adj2 = input("Enter another adjective:")
adj3 = input("Enter one more adjective:")
verb = input("Enter a verb:")
noun1 = input("Enter a noun:")
noun2 = input("Enter another noun:")
animal = input("Name an animal:")
food = input("Name a food:")
fruit = input("Name a fruit:")
superhero = input("Name a superhero:")
country = input("Name a country:")
dessert = input("Name a dessert:")
year = input("Name a year:")

STORY = "This morning %s woke up feeling %s. 'It is going to be a %s day!' Outside, a bunch of %ss were protesting to keep %s in stores. They began to %s to the rhythm of the %s, which made all the %ss very %s. Concerned, %s texted %s, who flew %s to %s and dropped %s in a puddle of frozen %s. %s woke up in the year %s, in a world where %ss ruled the world." % (
    name, adj1, adj2, animal, food, verb, noun1, fruit, adj3, name, superhero, name, country, name, dessert, name, year, noun2)

print(STORY)