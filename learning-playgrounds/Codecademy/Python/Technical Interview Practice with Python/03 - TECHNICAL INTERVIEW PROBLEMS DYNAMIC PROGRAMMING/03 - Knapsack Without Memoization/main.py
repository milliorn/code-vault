from util import powerset, Loot

#After best_value, declare all_combo.
#all_combo: Use powerset() to create all combinations of the loot argument.
#best_value: Tracks the best loot combination. Initialized at None.
#Iterate through each combo in all_combo.
#Inside the loop, create two new variables:
#combo_weight: The sum of all loot weight in combo.
#combo_value: The sum of all loot value in combo.

def knapsack(loot, weight_limit):
	best_value = None
	all_combo = powerset(loot)

	for combo in all_combo:
		combo_weight = sum([item.weight for item in combo])
		combo_value = sum([item.value for item in combo])

		if combo_weight <= weight_limit:
			if not best_value or best_value < combo_value:
				best_value = combo_value
	return best_value

available_loot = [Loot("Clock", 3, 8), Loot("Vase", 4, 12), Loot("Diamond", 1, 7)]
weight_capacity = 4
best_combo = knapsack(available_loot, weight_capacity)
print("The ideal loot given capacity {0} is\n{1}".format(weight_capacity, best_combo))
