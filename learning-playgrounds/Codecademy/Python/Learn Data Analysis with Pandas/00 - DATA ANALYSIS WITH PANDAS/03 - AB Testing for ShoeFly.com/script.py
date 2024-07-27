import pandas as pd
from itertools import groupby

ad_clicks = pd.read_csv('ad_clicks.csv')

# Examine the first few rows of ad_clicks.
# print(ad_clicks.head())

# Your manager wants to know which ad platform is getting you the most views.
# How many views (i.e., rows of the table) came from each utm_source?
# print(ad_clicks.groupby('utm_source').user_id.count().reset_index())

# If the column ad_click_timestamp is not null, then someone actually clicked on the ad that was displayed.
# Create a new column called is_click, which is True if ad_click_timestamp is not null and False otherwise.
ad_clicks['is_click'] = ~ad_clicks.ad_click_timestamp.isnull()

# We want to know the percent of people who clicked on ads from each utm_source.
# Start by grouping by utm_source and is_click and counting the number of user_id‘s in each of those groups.
# Save your answer to the variable clicks_by_source.
clicks_by_source = ad_clicks.groupby(
    ['utm_source', 'is_click']).user_id.count().reset_index()

# Now let’s pivot the data so that the columns are is_click (either True or False),
# the index is utm_source, and the values are user_id.
# Save your results to the variable clicks_pivot.
clicks_pivot = clicks_by_source.pivot(
    columns='is_click', index='utm_source', values='user_id').reset_index()

# Create a new column in clicks_pivot called percent_clicked
# which is equal to the percent of users who clicked on the ad from each utm_source.
# Was there a difference in click rates for each source?
clicks_pivot['percent_clicked'] = clicks_pivot[True] / \
    (clicks_pivot[True] + clicks_pivot[False])

# The column experimental_group tells us whether the user was shown Ad A or Ad B.
# Were approximately the same number of people shown both adds?
# print(ad_clicks.groupby('experimental_group').user_id.count().reset_index())

# Using the column is_click that we defined earlier,
# check to see if a greater percentage of users clicked on Ad A or Ad B.
# print(ad_clicks.groupby(['experimental_group', 'is_click']).user_id.count().reset_index(
# ).pivot(index='experimental_group', columns='is_click', values='user_id').reset_index())

# The Product Manager for the A/B test thinks that the clicks might have changed by day of the week.
# Start by creating two DataFrames: a_clicks and b_clicks,
# which contain only the results for A group and B group, respectively.
a_clicks = ad_clicks[ad_clicks.experimental_group == 'A']
b_blicks = ad_clicks[ad_clicks.experimental_group == 'B']

# For each group (a_clicks and b_clicks), calculate the percent of users who clicked on the ad by day.
a_clicks_pivot = a_clicks.groupby(['is_click', 'day']).user_id.count().reset_index().pivot(
    index='day',
    columns='is_click',
    values='user_id').reset_index()

a_clicks_pivot['percent_clicked'] = a_clicks_pivot[True] / \
    (a_clicks_pivot[True] + a_clicks_pivot[False])

b_clicks_pivot = b_blicks.groupby(['is_click', 'day']).user_id.count().reset_index().pivot(
    index='day',
    columns='is_click',
    values='user_id').reset_index()

b_clicks_pivot['percent_clicked'] = b_clicks_pivot[True] / \
    (b_clicks_pivot[True] + b_clicks_pivot[False])
# Compare the results for A and B. What happened over the course of the week?
# Do you recommend that your company use Ad A or Ad B?
print(a_clicks_pivot)
print()
print(b_clicks_pivot)
