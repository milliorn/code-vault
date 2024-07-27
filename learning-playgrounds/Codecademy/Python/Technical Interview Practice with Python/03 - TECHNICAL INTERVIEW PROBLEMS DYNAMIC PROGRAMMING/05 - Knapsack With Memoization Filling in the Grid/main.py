#Directly beneath the declaration for weight_capacity, 
# add a conditional that checks if the item‘s weight is less than or equal to weight_capacity.
#If it is less we want to weigh our options. 
# Declare item_value and item_weight and initialize them to the appropriate values on item.
#Declare previous_best_less_item_weight and set it to grid[row - 1][weight_capacity - item_weight]
#Declare capacity_value_with_item and set it to the sum of item_value and previous_best_less_item_weight.
#Set grid[row][col] to the max() of capacity_value_with_item and capacity_value_without_item.
#Now add an else to our item.weight <= weight_capacity conditional.
#If the item doesn’t fit, we want to use the previous best. Set grid[row][col] to the value seen in the previous row.
from util import Loot

def knapsack(loot, weight_limit):
	grid = [[0 for col in range(weight_limit + 1)] for row in range(len(loot) + 1)]
	for row, item in enumerate(loot):
		row = row + 1
		for col in range(weight_limit + 1):
			weight_capacity = col

			if item.weight <= weight_capacity:
				item_value = item.value
				item_weight = item.weight
				previous_best_less_item_weight = grid[row - 1][weight_capacity - item_weight]
				capacity_value_with_item = previous_best_less_item_weight + item_value
				capacity_value_without_item = grid[row - 1][col]
				grid[row][col] = max(capacity_value_with_item, capacity_value_without_item)
			else:
				grid[row][col] = grid[row - 1][col]

	return grid[len(loot)][weight_limit]

available_loot = [Loot("Clock", 3, 8), Loot("Vase", 4, 12), Loot("Diamond", 1, 7)]
weight_capacity = 4
best_combo = knapsack(available_loot, weight_capacity)
print("The ideal loot given capacity {0} is\n{1}".format(weight_capacity, best_combo))
