import pandas as pd
import matplotlib.pyplot as plt

# load rankings data here:
# Roller coasters are often split into two main categories based on their construction material: wood or steel.
# Rankings for the best wood and steel roller coasters from the 2013 to 2018 Golden Ticket Awards are
# provided in 'Golden_Ticket_Award_Winners_Wood.csv' and 'Golden_Ticket_Award_Winners_Steel.csv', respectively.
# Load each csv into a DataFrame and inspect it to gain familiarity with the data.
df_steel = pd.read_csv('Golden_Ticket_Award_Winners_Steel.csv')
df_wood = pd.read_csv('Golden_Ticket_Award_Winners_Wood.csv')
df_coaster = pd.read_csv('roller_coasters.csv')

# print(df_steel.head)
# print(df_wood.head)
# print(df_coaster)

# write function to plot rankings over time for 1 roller coaster here:


plt.clf()

# write function to plot rankings over time for 2 roller coasters here:


plt.clf()

# write function to plot top n rankings over time here:


plt.clf()

# load roller coaster data here:


# write function to plot histogram of column values here:


plt.clf()

# write function to plot inversions by coaster at a park here:


plt.clf()

# write function to plot pie chart of operating status here:


plt.clf()

# write function to create scatter plot of any two numeric columns here:


plt.clf()
