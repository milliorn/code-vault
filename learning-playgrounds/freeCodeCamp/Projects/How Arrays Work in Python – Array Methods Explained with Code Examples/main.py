fruits = ["apple", "banana", "cherry"]
fruits.append("orange")  # add orange to the end of the list
print(fruits)

cars = ["Ford", "Volvo", "BMW"]
cars.clear()  # remove all elements from the list
print(cars)

fruits = ["apple", "banana", "cherry"]
x = fruits.copy()  # copy the fruits list to x
print(x)

fruits = ["apple", "banana", "cherry"]
count = fruits.count("cherry")  # count the number of cherries in the list
print(count)

fruits = ["apple", "banana", "cherry"]
more_fruits = ["orange", "mango", "grapes"]
fruits.extend(more_fruits)  # add more_fruits to fruits
print(fruits)

fruits = ["apple", "banana", "cherry"]
x = fruits.index("cherry")  # find the index of cherry
print(x)

numbers = [1, 2, 3, 4, 5]
numbers.insert(0, 0)  # insert 0 at the beginning of the list
print(numbers)

fruits = ["apple", "banana", "cherry"]
fruits.pop()  # remove the last element from the list
print(fruits)

fruits = ["apple", "banana", "cherry"]
fruits.remove("banana")  # remove banana from the list
print(fruits)

fruits = ["apple", "banana", "cherry"]
fruits.reverse()  # reverse the order of the list
print(fruits)

numbers = [3, 5, 1, 7, 9]
numbers.sort()  # sort the list
print(numbers)

numbers.sort(reverse=True)  # sort the list in reverse order
print(numbers)
