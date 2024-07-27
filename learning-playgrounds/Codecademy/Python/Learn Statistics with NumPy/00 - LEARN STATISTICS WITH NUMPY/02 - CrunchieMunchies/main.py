# First, import numpy.
import numpy as np

# Look over the cereal.csv file.
# This file contains the reported calorie amounts for different cereal brands.
# Load the data from the file and save it as calorie_stats.
calorie_stats = np.genfromtxt('cereal.csv', delimiter=',')

# There are 60 calories per serving of CrunchieMunchies.
# How much higher is the average calorie count of your competition?
# Save the answer to the variable average_calories and print the variable to the terminal to see the answer.
average_calories = np.mean(calorie_stats)

# Sort the data and save the result to the variable calorie_stats_sorted.
# Print the sorted data to the terminal.
calorie_stats_sorted = np.sort(calorie_stats)
# print(calorie_stats_sorted)

# Calculate the median of the dataset and save your answer to median_calories.
# Print the median so you can see how it compares to the mean.
median_calories = np.median(calorie_stats)
# print(median_calories)

# Calculate different percentiles and
# print them to the terminal until you find the lowest percentile that is greater than 60 calories.
# Save this value to the variable nth_percentile.
nth_percentile = np.percentile(calorie_stats, 4)
# print(nth_percentile)

# Instead, let’s calculate the percentage of cereals that have more than 60 calories per serving.
# Save your answer to the variable more_calories and print it to the terminal.
more_calories = np.mean(calorie_stats > 60)
# print(more_calories)

# Calculate the amount of variation by finding the standard deviation.
# Save your answer to calorie_std and print to the terminal.
# How can we incorporate this value into our analysis?
calorie_std = np.std(calorie_stats)
print(calorie_std)
