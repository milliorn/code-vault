import pandas as pd
from matplotlib import pyplot as plt

healthcare = pd.read_csv("healthcare.csv")

# Print healthcare.head(). This will print the first five rows of the dataset.
print(healthcare.head())

# Print healthcare["DRG Definition"].unique() to see all of the different diagnoses in our dataset.
print(healthcare["DRG Definition"].unique())

# Let’s grab only the rows in the dataset that are about chest pain.
chest_pain = healthcare[healthcare['DRG Definition'] == '313 - CHEST PAIN']

# Get every chest pain diagnosis in Alabama
alabama_chest_pain = chest_pain[chest_pain['Provider State'] == "AL"]

# We now want to find the average cost of those diagnoses
costs = alabama_chest_pain[' Average Covered Charges '].values

# Find all of the unique states from the dataset chest_pain and store it in a variable named states.
states = chest_pain['Provider State'].unique()

# We’ll now use a for loop to separate the dataset into a dataset for each state:
datasets = []

for state in states:
    datasets.append(chest_pain[chest_pain['Provider State']
        == state][' Average Covered Charges '].values)

# Call plt.figure(figsize=(20,6)).
# This will make your figure long to allow room for so many boxplots!
plt.figure(figsize=(20, 6))

# Draw the boxplot using datasets as the first parameter.
# Add the second parameter labels = states to label your boxplots.
plt.boxplot(datasets, labels=states)
plt.show()
