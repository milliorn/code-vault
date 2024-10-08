# Import packages
import numpy as np
import pandas as pd
from scipy import stats

# Read in housing data
brooklyn_one_bed = pd.read_csv('brooklyn-one-bed.csv')

brooklyn_price = brooklyn_one_bed['rent']

manhattan_one_bed = pd.read_csv('manhattan-one-bed.csv')
manhattan_price = manhattan_one_bed['rent']

queens_one_bed = pd.read_csv('queens-one-bed.csv')
queens_price = queens_one_bed['rent']

# Add mean calculations below
# Find the average value of one-bedroom apartments in Brooklyn and save the value to brooklyn_mean.
# Find the average value of one-bedroom apartments in Manhattan and save the value to manhattan_mean.
# Find the average value of one-bedroom apartments in Queens and save the value to queens_mean.

brooklyn_mean = np.mean(brooklyn_price)
manhattan_mean = np.mean(manhattan_price)
queens_mean = np.mean(queens_price)

# Add median calculations below
# Find the median value of one-bedroom apartments in Brooklyn and save the value to brooklyn_median.
# Find the median value of one-bedroom apartments in Manhattan and save the value to manhattan_median.
# Find the median value of one-bedroom apartments in Queens and save the value to queens_median.

brooklyn_median = np.median(brooklyn_price)
manhattan_median = np.median(manhattan_price)
queens_median = np.median(queens_price)

# Add mode calculations below
# Find the mode value of one-bedroom apartments in Brooklyn and save the value to brooklyn_mode.
# Find the mode value of one-bedroom apartments in Manhattan and save the value to manhattan_mode.
# Find the mode value of one-bedroom apartments in Queens and save the value to queens_mode.

brooklyn_mode = stats.mode(brooklyn_price)
manhattan_mode = stats.mode(manhattan_price)
queens_mode = stats.mode(queens_price)

##############################################
##############################################
##############################################


# Don't look below here
# Mean
try:
    print("The mean price in Brooklyn is " + str(round(brooklyn_mean, 2)))
except NameError:
    print("The mean price in Brooklyn is not yet defined.")
try:
    print("The mean price in Manhattan is " + str(round(manhattan_mean, 2)))
except NameError:
    print("The mean in Manhattan is not yet defined.")
try:
    print("The mean price in Queens is " + str(round(queens_mean, 2)))
except NameError:
    print("The mean price in Queens is not yet defined.")

# Space out text in terminal
print()

# Median
try:
    print("The median price in Brooklyn is " + str(brooklyn_median))
except NameError:
    print("The median price in Brooklyn is not yet defined.")
try:
    print("The median price in Manhattan is " + str(manhattan_median))
except NameError:
    print("The median price in Manhattan is not yet defined.")
try:
    print("The median price in Queens is " + str(queens_median))
except NameError:
    print("The median price in Queens is not yet defined.")

# Space out text in terminal
print()

# Mode
try:
    print("The mode price in Brooklyn is " + str(brooklyn_mode[0][0]) + " and it appears " + str(
        brooklyn_mode[1][0]) + " times out of " + str(len(brooklyn_price)))
except NameError:
    print("The mode price in Brooklyn is not yet defined.")
try:
    print("The mode price in Manhattan is " + str(manhattan_mode[0][0]) + " and it appears " + str(
        manhattan_mode[1][0]) + " times out of " + str(len(manhattan_price)))
except NameError:
    print("The mode price in Manhattan is not yet defined.")
try:
    print("The mode price in Queens is " + str(queens_mode[0][0]) + " and it appears " + str(
        queens_mode[1][0]) + " times out of " + str(len(queens_price)))
except NameError:
    print("The mode price in Queens is not yet defined.")
