"""https://pandas.pydata.org/docs/getting_started/intro_tutorials/05_add_columns.html"""

import pandas as pd

air_quality = pd.read_csv("data/air_quality_no2.csv",
                          index_col=0, parse_dates=True)  # read data
print(air_quality.head())  # print first 5 rows

air_quality["london_mg_per_cubic"] = air_quality["station_london"] * \
    1.882  # add new column
print(air_quality.head())  # print first 5 rows

air_quality["ratio_paris_antwerp"] = (
    air_quality["station_paris"] / air_quality["station_antwerp"]
)  # add new column

print(air_quality.head())  # print first 5 rows

air_quality_renamed = air_quality.rename(
    columns={
        "station_antwerp": "BETR801",
        "station_paris": "FR04014",
        "station_london": "London Westminster",
    }
)
print(air_quality_renamed.head())

air_quality_renamed = air_quality_renamed.rename(columns=str.lower)
print(air_quality_renamed.head())
