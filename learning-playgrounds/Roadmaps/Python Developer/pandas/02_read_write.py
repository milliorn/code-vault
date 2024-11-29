"""
https://pandas.pydata.org/docs/getting_started/intro_tutorials/02_read_write.html
"""
import pandas as pd

titanic = pd.read_csv('data/titanic.csv')

print(titanic)  # print all rows
print(titanic.head(8))  # print first 8 rows
print(titanic.tail(8))  # print last 8 rows
print(titanic.dtypes)  # print data types of each column

# Write to a spreadsheet
titanic.to_excel('data/titanic.xlsx', sheet_name='passengers', index=False)

# Read from a spreadsheet
titanicRead = pd.read_excel('data/titanic.xlsx', sheet_name='passengers')
print(titanicRead)

titanic.info()
