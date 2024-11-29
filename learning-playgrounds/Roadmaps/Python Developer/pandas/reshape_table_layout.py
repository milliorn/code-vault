"""
https://pandas.pydata.org/docs/getting_started/intro_tutorials/07_reshape_table_layout.html
"""

import matplotlib.pyplot as plt # type: ignore
import pandas as pd

titanic = pd.read_csv("data/titanic.csv")

air_quality = pd.read_csv(
    "data/air_quality_long.csv", index_col="date.utc", parse_dates=True
)

print(titanic.head())  # print first 5 rows
print(air_quality.head())  # print first 5 rows

print(titanic.sort_values(by="Age").head())  # sort by Age

# sort by Age in descending order
print(titanic.sort_values(by=["Pclass", "Age"], ascending=False).head())

no2 = air_quality[air_quality["parameter"] == "no2"]
no2_subset = no2.sort_index().groupby("location").head(2)

print(no2_subset)

print(no2_subset.pivot(columns="location", values="value"))  # pivot table

print(no2.head())

no2.pivot(columns="location", values="value").plot()
plt.show()  # This line ensures that the plot is displayed

print(air_quality.pivot_table(
    values="value", index="location", columns="parameter", aggfunc="mean"
))

print(air_quality.pivot_table(
    values="value",
    index="location",
    columns="parameter",
    aggfunc="mean",
    margins=True,
))

no2_pivoted = no2.pivot(columns="location", values="value").reset_index()

print(no2_pivoted.head())

no_2 = no2_pivoted.melt(id_vars="date.utc")
print(no_2.head())

no_2 = no2_pivoted.melt(
    id_vars="date.utc",
    value_vars=["BETR801", "FR04014", "London Westminster"],
    value_name="NO_2",
    var_name="id_location",
)  # rename columns

print(no_2.head())
