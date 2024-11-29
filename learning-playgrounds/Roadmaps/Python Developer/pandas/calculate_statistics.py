"""
https://pandas.pydata.org/docs/getting_started/intro_tutorials/06_calculate_statistics.html
"""
import pandas as pd

# This path is relative to the script's current working directory
titanic = pd.read_csv('data/titanic.csv')

print(titanic.head())  # Display the first few rows of the dataset
print(titanic['Age'].mean())  # Calculate the mean of the 'Age' column

# Calculate the median of the 'Age' column
print(titanic[['Age', "Fare"]].median())
print(titanic[['Age', "Fare"]].describe())  # Generate descriptive statistics

print(titanic.agg(
    {
        "Age": ["min", "max", "median", "skew"],
        "Fare": ["min", "max", "median", "mean"],
    }
))  # Calculate multiple statistics for multiple columns

print(titanic[["Sex", "Age"]].groupby("Sex").mean())

# Calculate the mean of all numeric columns
print(titanic.groupby("Sex").mean(numeric_only=True))

# Calculate the mean of the 'Age' column for each group
print(titanic.groupby("Sex")["Age"].mean())

# Calculate the mean of the 'Fare' column for each group
print(titanic.groupby(["Sex", "Pclass"])["Fare"].mean())

# Count the number of occurrences of each value in the 'Pclass' column
print(titanic["Pclass"].value_counts())

# Count the number of occurrences of each value in the 'Pclass' column
print(titanic.groupby("Pclass")["Pclass"].count())
