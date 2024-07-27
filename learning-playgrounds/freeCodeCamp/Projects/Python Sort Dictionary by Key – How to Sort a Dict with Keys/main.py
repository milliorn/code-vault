from collections import OrderedDict

# Method 1: Using the sorted() Function
my_dict = {"b": 2, "a": 1, "c": 3}
sorted_dict = dict(sorted(my_dict.items()))

print(sorted_dict)

# Method 2: Using a List of Tuples
sorted_list = sorted(my_dict.items())

sorted_dict = {}
for key, value in sorted_list:
    sorted_dict[key] = value

print(sorted_dict)

# Method 3: Using the collections.OrderedDict Class
sorted_dict = OrderedDict(sorted(my_dict.items()))
print(sorted_dict)
