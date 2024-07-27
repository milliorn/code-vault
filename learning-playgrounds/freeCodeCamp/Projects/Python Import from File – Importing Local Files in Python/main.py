import csv
import numpy as np
import pandas as pd

names = ["John", "Mary", "Peter", "George", "James"]

# Open the file in read mode ("r")
file = open("readme.md", "r")

for line in file.readlines():
    print(line)

file.close()

# Open the file in append mode ("a")
file = open("readme.md", "a")

file.write("\n")

for name in names:
    file.write(name + "\n")

file.close()

# Define the field names for the CSV
field_names = ["Name", "Age", "City"]

# Generate a list of mock data
data = [
    {"Name": "John", "Age": 25, "City": "New York"},
    {"Name": "Emily", "Age": 30, "City": "London"},
    {"Name": "Michael", "Age": 35, "City": "Paris"},
    {"Name": "Sophia", "Age": 28, "City": "Berlin"},
    {"Name": "Daniel", "Age": 32, "City": "Tokyo"}
]

# Generate a random CSV file name
file_name = "mock_data.csv"

# Open the CSV file in write mode
with open(file_name, mode="w", newline="") as file:
    writer = csv.DictWriter(file, fieldnames=field_names)

    # Write the header row
    writer.writeheader()

    # Write the data rows
    for row in data:
        writer.writerow(row)

print(f"Mock CSV file '{file_name}' generated successfully.")

# Load the CSV data into a NumPy array
data = np.genfromtxt('mock_data.csv', delimiter=',', names=True, dtype=None, encoding='utf-8')

print(data)
