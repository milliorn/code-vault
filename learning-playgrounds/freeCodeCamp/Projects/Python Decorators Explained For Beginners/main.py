import logging
from functools import lru_cache

# In Python, a function is written like so:
def add_one(num):
    return num + 1


# When we want to call it,
# we can write the function's names with parenthesis and pass in the necessary inputs (arguments):
final_value = add_one(1)
print(final_value)  # 2

# How to Pass Functions as Arguments


def inner_function():
    print("inner_function is called")


def outer_function(func):
    print("outer_function is called")
    func()


outer_function(inner_function)
# outer_function is called
# inner_function is called

# For example, if we wanted to create a decorator that will add 1 to the return value of any function,
# we can do it like so:


def add_one_decorator(func):
    def add_one():
        value = func()
        return value + 1
    return add_one

# Now, if we have a function that returns a number, 
# we can use this decorator to add 1 to whatever value it outputs.
def example_function():
    return 1

final_value = add_one_decorator(example_function)
print(final_value()) # 2

# We can also use the @ symbol to decorate a function:
@add_one_decorator
def example_function():
    return 1

print(example_function()) # 2

# How to Create a Decorator with Arguments
def add(a, b):
    return a + b

print(add(1, 2)) # 3

def add_one_decorator(func):
    def add_one(*args, **kwargs):
        value = func(*args, **kwargs)
        return value + 1
    return add_one

@add_one_decorator
def add(a, b):
    return a + b

print(add(1, 2)) # 4


def function_logger(func):
    logging.basicConfig(level = logging.INFO, filename='main.log')
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        logging.info(f"{func.__name__} ran with positional arguments: {args} and keyword arguments: {kwargs}. Return value: {result}")
        return result
    return wrapper

@function_logger
def add(value):
    return value + 1

print(add_one(1))

# Caching

@lru_cache
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(100)) # 354224848179261915075