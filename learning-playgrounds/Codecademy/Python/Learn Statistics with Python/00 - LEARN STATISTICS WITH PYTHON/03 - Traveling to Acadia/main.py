# import codecademylib3
import numpy as np
from matplotlib import pyplot as plt

# load in data
in_bloom = np.loadtxt(open("in-bloom.csv"), delimiter=",")
flights = np.loadtxt(open("flights.csv"), delimiter=",")

plt.figure(1)
plt.subplot(211)

# Plot the histograms
# Use Matplotlib to create a flights histogram.
# Set the range of your histogram to (0, 365)
# Set the number of bins in your plot to 365

plt.hist(flights, range=(0, 365), bins=365)

# Add an x-label, y-label, and title to your figure.
plt.title("Frequency of an occurrence each day of the year of Flights")
plt.xlabel("Day of Year")
plt.ylabel("Bloom Count")


plt.subplot(212)

# Under plt.subplot(212), use plt.hist() to make a histogram that displays the number of flowers
# that begin to bloom each day of the year.
plt.hist(in_bloom, range=(0, 365), bins=365)

# Label the y-axis of the plot
plt.title("Flower Blooms and Flights by Days")
plt.ylabel("Bloom Count")
plt.xlabel("Day of the Year")

# Right before calling plt.show() call plt.tight_layout().
# This will prevent the labels from overlapping with the graphs.
plt.tight_layout()

plt.show()
