# Import the modules that you’ll be using in this project:
import pandas as pd
import seaborn as sns
from matplotlib import pyplot as plt

# Inspect the raw CSV files that you will be using in this project by selecting them in the file navigator.
# Load WorldCupMatches.csv into a DataFrame called df.
# This will allow you to eventually plot the DataFrame with Seaborn.
# Load goals.csv into a DataFrame called df_goals, and take a quick look at the DataFrame using .head().
df_goals = pd.read_csv('goals.csv')
df = pd.read_csv('WorldCupMatches.csv')

# Inspect the DataFrame using .head().
# Make sure to use print() to wrap any output you want to inspect.
# print(goals.head())
# print(df.head())

# Create a new column in df named Total Goals,
# and set it equal to the sum of the columns Home Team Goals and Away Team Goals.
# Print the results of df.head() to confirm your new column.
df['Total Goals'] = df['Home Team Goals'] + df['Away Team Goals']
# print(df.head())

# You are going to create a bar chart visualizing how many goals were scored each year the World Cup was held between 1930-2014.
# Set the style of your plot to be whitegrid.
# This will add gridlines to the plot which will make it easier to read the visualization.
sns.set(style='whitegrid')

# To make the text in your visualization bigger and easier to read, set the context to be "poster".
sns.set_context('poster', font_scale=0.5)

# Create a figure and axes for your plot using the syntax:
f, ax = plt.subplots(figsize=(12, 7))

# Using the data in df and the syntax:
# visualize the columns Year and Total Goals as a bar chart.
ax = sns.barplot(x=df['Year'], y=df['Total Goals'])

# Give your bar chart a meaningful title using ax.set_title().
ax.set_title('Fifa World Cup')

# Render your bar chart so you can see it.
plt.show()

# df_goals
# Try setting the context of the plot to be notebook and the font_scale to be 1.25.
sns.set_context('notebook', font_scale=1.25)

# Set the variables f, ax2 and instantiate a figure that is 12 inches wide and 7 inches tall.
f, ax2 = plt.subplots(figsize=(12, 7))

# Set ax2 equal to a box plot with the color palette Spectral that visualizes the data in the DataFrame df_goals
# with the column year on the x-axis and goals on the y-axis.
ax2 = sns.boxplot(x=df_goals['year'], y=df_goals['goals'], palette='Spectral')

# Give your box plot a meaningful and clear title.
ax2.set_title('Goals')

# Render your box plot so you can see it.
plt.show()
