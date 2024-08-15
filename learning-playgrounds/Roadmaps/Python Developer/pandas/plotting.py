"""
https://pandas.pydata.org/docs/getting_started/intro_tutorials/04_plotting.html
"""

import matplotlib.pyplot as plt
import pandas as pd

air_quality = pd.read_csv("data/air_quality_no2.csv",
                          index_col=0, parse_dates=True)
print(air_quality.head())

air_quality.plot()  # line plot
plt.show()

air_quality["station_paris"].plot()
plt.show()

air_quality.plot.scatter(
    x="station_london", y="station_paris", alpha=0.5)  # scatter plot
plt.show()

print([
    method_name
    for method_name in dir(air_quality.plot)
    if not method_name.startswith("_")
])

air_quality.plot.box()  # box plot
plt.show()

axs = air_quality.plot.area(figsize=(12, 4), subplots=True)  # area plot
plt.show()

fig, axs = plt.subplots(figsize=(12, 4))  # multiple plots
air_quality.plot.area(ax=axs)
axs.set_ylabel("NO$_2$ concentration")  # set label
fig.savefig("media/no2_concentrations.png")  # save plot to file
plt.show()
