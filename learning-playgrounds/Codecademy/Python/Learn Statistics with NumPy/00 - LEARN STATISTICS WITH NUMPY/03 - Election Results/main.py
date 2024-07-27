# First, import numpy and matplotlib.
import numpy as np
import matplotlib.pyplot as plt

survey_responses = ['Ceballos', 'Kerrigan', 'Ceballos', 'Ceballos', 'Ceballos', 'Kerrigan', 'Kerrigan', 'Ceballos', 'Ceballos', 'Ceballos',
                    'Kerrigan', 'Kerrigan', 'Ceballos', 'Ceballos', 'Kerrigan', 'Kerrigan', 'Ceballos', 'Ceballos', 'Kerrigan', 'Kerrigan', 'Kerrigan', 'Kerrigan', 'Kerrigan', 'Kerrigan', 'Ceballos', 'Ceballos', 'Ceballos', 'Ceballos', 'Ceballos', 'Ceballos',
                    'Kerrigan', 'Kerrigan', 'Ceballos', 'Ceballos', 'Ceballos', 'Kerrigan', 'Kerrigan', 'Ceballos', 'Ceballos', 'Kerrigan', 'Kerrigan', 'Ceballos', 'Ceballos', 'Kerrigan', 'Kerrigan', 'Kerrigan', 'Kerrigan', 'Kerrigan', 'Kerrigan', 'Ceballos',
                    'Kerrigan', 'Kerrigan', 'Ceballos', 'Ceballos', 'Ceballos', 'Kerrigan', 'Kerrigan', 'Ceballos', 'Ceballos', 'Kerrigan', 'Kerrigan', 'Ceballos', 'Ceballos', 'Kerrigan', 'Kerrigan', 'Kerrigan', 'Kerrigan', 'Kerrigan', 'Kerrigan', 'Ceballos']

# Calculate the number of people who answered ‘Ceballos’ and save the answer to the variable total_ceballos.
# Print the variable to the terminal to see its value.
total_ceballos = survey_responses.count('Ceballos')
# print(total_ceballos)

length = len(survey_responses)
# Calculate the percentage of people in the survey who voted for Ceballos and save it to the variable percentage_ceballos.
# Print the variable to the terminal to see its value.
percentage_ceballos = 100 * total_ceballos / length
# print(percentage_ceballos)

# Generate a binomial distribution that takes the number of total survey responses,
# the actual success rate,
# and the size of the town’s population as its parameters.
# Then divide the distribution by the number of survey responses.
# Save your calculation to the variable possible_surveys.
possible_surveys = np.random.binomial(length, 0.54, size=10000) / length
# print(possible_surveys)

# Plot a histogram of possible_surveys with a range of 0-1 and 20 bins.
plt.hist(possible_surveys, bins=20, range=(0, 1))
# plt.show()

# Calculate the percentage of surveys that could have an outcome of Ceballos receiving less than 50% of the vote and
# save it to the variable ceballos_loss_surveys.
# Print the variable to the terminal.
ceballos_loss_surveys = len(
    possible_surveys[possible_surveys < 0.5]) / len(possible_surveys)
# print(ceballos_loss_surveys)

# Generate another binomial distribution,
# but this time,
# see what would happen if you had instead surveyed 7,000 people.
# Divide the distribution by the size of the survey and save your findings to large_survey.
large_survey_length = 7000
large_survey = np.random.binomial(
    large_survey_length, 0.54, size=10000) / large_survey_length

# Now, recalculate the percentage of surveys that would have an outcome of Ceballos losing and save it to the variable ceballos_loss_new, and print the value to the terminal.
ceballos_loss_new = len(large_survey[large_survey < .5]) / large_survey_length
# print(ceballos_loss_new)
