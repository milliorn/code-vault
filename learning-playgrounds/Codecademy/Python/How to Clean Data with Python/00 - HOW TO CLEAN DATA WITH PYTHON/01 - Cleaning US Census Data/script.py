import pandas as pd
import numpy as np
import matplotlib.pyplot as pyplot
import glob

# Open some of the census csv files in the navigator.
# How are they named? What kind of information do they hold? Will they help us make this graph?
# print(pd.read_csv('states0.csv').head())
# print(pd.read_csv('states1.csv').head())
# print(pd.read_csv('states2.csv').head())
# print(pd.read_csv('states3.csv').head())
# print(pd.read_csv('states4.csv').head())
# print(pd.read_csv('states5.csv').head())
# print(pd.read_csv('states6.csv').head())
# print(pd.read_csv('states7.csv').head())
# print(pd.read_csv('states8.csv').head())
# print(pd.read_csv('states9.csv').head())

# Using glob, loop through the census files available and load them into DataFrames.
# Then, concatenate all of those DataFrames together into one DataFrame, called something like us_census.
files = glob.glob('states*.csv')

temp = []

for file in files:
    temp.append(pd.read_csv(file))

us_census = pd.concat(temp)
us_census.reset_index(drop=True, inplace=True)

# Delete column sicne we do not need it
us_census = us_census.loc[:, ~us_census.columns.str.contains('^Unnamed')]

# Look at the .columns and the .dtypes of the us_census DataFrame.
# Are those datatypes going to hinder you as you try to make histograms?
# print(us_census.dtypes)
# print(us_census.columns)

# Look at the .head() of the DataFrame so that you can understand why some of these dtypes are objects instead of integers or floats.
# print(us_census.head())

# Use regex to turn the Income column into a format that is ready for conversion into a numerical type.
us_census.Income = us_census['Income'].replace('[\$,]', '', regex=True)
us_census.Income = pd.to_numeric(us_census.Income)

# Look at the PopulationGender column.
# We are going to want to separate this into two columns, the Men column, and the Women column.
# Split the column into those two new columns using str.split and separating out those results.
us_census_split = us_census['GenderPop'].str.split("_")
us_census['Men'] = us_census_split.str.get(0)
us_census['Women'] = us_census_split.str.get(1)

# Convert both of the columns into numerical datatypes.
# There is still an M or an F character in each entry! We should remove those before we convert.
us_census.Men = us_census.Men.str[:-1]
us_census.Men = pd.to_numeric(us_census.Men)

us_census.Women = us_census.Women.str[:-1]
us_census.Women = pd.to_numeric(us_census.Women)

# Delete column, it is no longer needed
us_census = us_census.loc[:, ~us_census.columns.str.contains('^GenderPop')]

# Use matplotlib to make a scatterplot!
# Remember to call plt.show() to see the graph!
# pyplot.scatter(us_census.Women, us_census.Income)
# pyplot.show()
# print(us_census)

# Did you get an error?
# These monstrous csv files probably have nan values in them!
# Print out your column with the number of women per state to see.
# We can fill in those nans by using pandas’ .fillna() function.
# print(us_census.Women)
us_census.Women = us_census.Women.fillna(us_census.TotalPop - us_census.Men)

# We forgot to check for duplicates! Use .duplicated() on your census DataFrame to see if we have duplicate rows in there.
# print(us_census.duplicated())

# Drop those duplicates using the .drop_duplicates() function.
us_census.drop_duplicates()

# Make the scatterplot again. Now, it should be perfect! Your job is secure, for now.
# pyplot.scatter(us_census.Women, us_census.Income)
# pyplot.show()

# Now, your boss wants you to make a bunch of histograms out of the race data that you have.
# Look at the .columns again to see what the race categories are.
# Hispanic, White, Black, Native, Asian, Pacific
# print(us_census.columns)

# Try to make a histogram for each one!
# You will have to get the columns into numerical format, and those percentage signs will have to go.
# Don’t forget to fill the nan values with something that makes sense!
# You probably dropped the duplicate rows when making your last graph, but it couldn’t hurt to check for duplicates again.

# Hispanic
us_census.Hispanic = us_census['Hispanic'].replace('[\%,]', '', regex=True)
us_census.Hispanic = pd.to_numeric(us_census.Hispanic)
us_census.Hispanic = us_census.Hispanic.fillna(0)
pyplot.hist(us_census.Hispanic)
pyplot.xlabel('Percentage')
pyplot.ylabel('Frequency of Occurrence')
pyplot.show()

# White
us_census.White = us_census['White'].replace('[\%,]', '', regex=True)
us_census.White = pd.to_numeric(us_census.White)
us_census.White = us_census.White.fillna(0)

# Black
us_census.Black = us_census['Black'].replace('[\%,]', '', regex=True)
us_census.Black = pd.to_numeric(us_census.Black)
us_census.Black = us_census.Black.fillna(0)

# Native
us_census.Native = us_census['Native'].replace('[\%,]', '', regex=True)
us_census.Native = pd.to_numeric(us_census.Native)
us_census.Native = us_census.Native.fillna(0)

# Asian
us_census.Asian = us_census['Asian'].replace('[\%,]', '', regex=True)
us_census.Asian = pd.to_numeric(us_census.Asian)
us_census.Asian = us_census.Asian.fillna(0)

# Pacific
us_census.Pacific = us_census['Pacific'].replace('[\%,]', '', regex=True)
us_census.Pacific = pd.to_numeric(us_census.Pacific)
us_census.Pacific = us_census.Pacific.fillna(0)

# Final result
us_census["TotalPop"] = us_census.TotalPop.astype(float)
us_census["Men"] = us_census.Men.astype(float)
us_census.Income = round(us_census.Income)
print(us_census)
