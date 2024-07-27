my_list = [1, 2, 3, 4, 5]

my_string = ",".join(str(x) for x in my_list)

print(my_string)

# Output: 1,2,3,4,5

string_list = [str(element) for element in my_list]

print(string_list)

# Output: ['1', '2', '3', '4', '5']

delimiter = ", "
print(delimiter.join(string_list))

# Output: 1, 2, 3, 4, 5

converted_list = map(str, my_list)

print(" ".join(converted_list))

my_list = ['apple', 'banana', 'cherry']

generator_expr = (str(element) for element in my_list)

print(" ".join(generator_expr))
