import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

data = pd.read_csv("country_data.csv")

# Access the Data
# Print data.head() to see the first 5 rows of the dataset.
print(data.head())
print()

# Let’s isolate the column that contains the life expectancy and store it in a variable named life_expectancy.
life_expectancy = data['Life Expectancy']

# Find the Quantiles
# Use the np.quantile() function to find the quartiles of life_expectancy.
# Store the result in a variable named life_expectancy_quartiles and print the results.
life_expectancy_quartiles = np.quantile(life_expectancy, [.25, .50, .75])
print(life_expectancy_quartiles)
print()

# Plot the histogram
# plt.hist(life_expectancy)
# plt.show()

# Splitting the Data by GDP
# Isolate the GDP column and store it in a variable named gdp
gdp = data['GDP']

# We now want to find the median GDP.
# Store the median in a variable named median_gdp. Print that variable to see the median.
median_gdp = np.quantile(gdp, 0.5)
print(median_gdp)
print()

# Let’s now grab all of the rows from our original dataset that have a GDP less than or equal to the median.
# Do the same for all of the rows that have a GDP higher than the median. Store those rows in a variable named high_gdp.
low_gdp = data[data['GDP'] <= median_gdp]
high_gdp = data[data['GDP'] > median_gdp]

# Find the quartiles of the "Life Expectancy" column of low_gdp.
# Store the quartiles in a variable named low_gdp_quartiles. Print the results.
low_gdp_quartiles = np.quantile(low_gdp['Life Expectancy'], [.25, .50, .75])
print(low_gdp_quartiles)
print()

# Find the quartiles of the high GDP countries and store them in a variable named high_gdp_quartile
high_gdp_quartile = np.quantile(high_gdp['Life Expectancy'], [.25, .50, .75])
print(high_gdp_quartile)
print()

# Remove the two lines of code that are currently plotting the histogram of the original dataset.
# At the bottom of your code, add these four lines:
plt.hist(high_gdp["Life Expectancy"], alpha=0.5, label="High GDP")
plt.hist(low_gdp["Life Expectancy"], alpha=0.5, label="Low GDP")
plt.legend()
plt.show()
