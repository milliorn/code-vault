# Start by importing NumPy as np.
import numpy as np
from numpy.lib.npyio import genfromtxt

# Create a NumPy array that represents this data. Each element should be a number (i.e., 2 for “2 cups”). Save this array as cupcakes.
cupcakes = np.array([2, 0.75, 2, 1, 0.5])

# Display recipes using print.
recipes = genfromtxt('recipes.csv', delimiter=',')
# print(recipes)

# Select all elements from the 3rd column and save them to the variable eggs.
eggs = recipes[:, 2]
# print(eggs)

# Which recipes require exactly 1 egg? Use a logical statement to get True or False for each value of eggs.
#print(eggs == 1)

# You already have a variable for cupcakes. Create a variable for cookies with the data from the 3rd row.
cookies = recipes[2:-1]

# Get the number of ingredients for a double batch of cupcakes by using multiplication on cupcakes.
# Save your new variable to double_batch.
double_batch = cupcakes * 2

# Create a new variable called grocery_list by adding cookies and double_batch.
grocery_list = cookies + double_batch
