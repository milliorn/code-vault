#Inside knapsack(), declare the variable grid.
#grid will be a two-dimensional list, or matrix, (a list of lists) where we store answers to our sub-problems.

#After initializing our grid, we’ll want to populate it with values.
#We can do this by iterating through each item in the loot parameter.
#We need information about the item as well as its location. Use enumerate(loot) for the iteration so we have access to row (the index) and item (the Loot instance).
#Inside the loop, increment row by 1.
#We do this because the first row is “no item” and we’ve already stored that sub-answer by using 0 as the default value.

from util import Loot

def knapsack(loot, weight_limit):
	grid = [[0 for column in range(weight_limit + 1)] for row in range(len(loot) + 1)] 

	for row, item in enumerate(loot):
		row = row + 1

		for col in range(weight_limit + 1):
			weight_capacity = col
	return grid

available_loot = [Loot("Clock", 3, 8), Loot("Vase", 4, 12), Loot("Diamond", 1, 7)]
weight_capacity = 4
best_combo = knapsack(available_loot, weight_capacity)
print("The ideal loot given capacity {0} is\n{1}".format(weight_capacity, best_combo))
