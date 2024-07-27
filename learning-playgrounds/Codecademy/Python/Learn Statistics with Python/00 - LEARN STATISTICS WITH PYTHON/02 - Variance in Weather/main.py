import numpy as np
import pandas as pd

from weather_data import london_data

# All of the weather data is stored in a variable named london_data.
# Print the first few rows of the dataset
print(london_data.head())

# Look at how many data points we have.
print(len(london_data))

# Create a variable named temp and set it equal to the "TemperatureC" column of london_data.
temp = london_data['TemperatureC']

# Find the average temperature in London in 2015. Store it in a variable named average_temp.
average_temp = np.mean(london_data)

# Calculate the variance of the temperature column and
# store the results in the variable temperature_var.
# Print the results.
temperature_var = np.var(temp)
print(temperature_var)

# Calculate the standard deviation of the temperature column and
# store a variable named temperature_standard_deviation.
# Print this variable.
temperature_standard_deviation = np.std(temp)
print(temperature_standard_deviation)

# We want to filter by the "month" column!
june = london_data.loc[london_data["month"] == 6]["TemperatureC"]
july = london_data.loc[london_data['month'] == 7]['TemperatureC']

# Calculate and print the mean temperature in London for both June and July using the np.mean() function.
print(np.mean(june))
print(np.mean(july))

# Calculate and print the standard deviation of temperature in London for both June and July.
print(np.std(june))
print(np.std(july))

# See the mean and standard deviation of every month
for i in range(1, 13):
    month = london_data.loc[london_data["month"] == i]["TemperatureC"]
    print("The mean temperature in month " +
            str(i) + " is " + str(np.mean(month)))
    print("The standard deviation of temperature in month " +
            str(i) + " is " + str(np.std(month)) + "\n")

