"""
https://pandas.pydata.org/docs/getting_started/intro_tutorials/03_subset_data.html
"""

import pandas as pd

titanic = pd.read_csv('data/titanic.csv')
print(titanic.head())  # print the first 5 rows of the dataframe

ages = titanic['Age']  # select the 'Age' column
print(ages)

print(type(titanic['Age']))  # the type of the column is a pandas Series

print(titanic['Age'].shape)  # the shape of the Series

age_sex = titanic[["Age", "Sex"]]  # select multiple columns
print(age_sex.head())

# the type of the column is a pandas DataFrame
print(type(titanic[["Age", "Sex"]]))

print(titanic[["Age", "Sex"]].shape)  # the shape of the DataFrame

above_35 = titanic[titanic["Age"] > 35]  # filter rows based on the condition
print(above_35.head())

# the condition returns a pandas Series of True/False values
print(titanic["Age"] > 35)

print(above_35.shape)  # the shape of the DataFrame

# filter rows based on the condition
class_23 = titanic[titanic["Pclass"].isin([2, 3])]
print(class_23.head())

age_no_na = titanic[titanic["Age"].notna()]  # filter out missing values
print(age_no_na.head())

adult_names = titanic.loc[titanic["Age"] >
                          35, "Name"]  # select specific columns
print(adult_names.head())

print(titanic.iloc[9:25, 2:5])  # select specific rows and columns

titanic.iloc[0:3, 3] = "anonymous"
print(titanic.head())
