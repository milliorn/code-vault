from string import Template

template_string = Template("My name is $name! I create content on $language")

output = template_string.substitute(name="Ihechikara", language="Python")

print(output)  # My name is Ihechikara! I create content on Python

name = "John"
age = 80
print("%s is %d years old" % (name, age))  # John is 80 years old

name = "John"
age = 80
print("{} is {} years old".format(name, age))  # John is 80 years old

name = "John"
age = 80
print(f"{name} is {age} years old")  # John is 80 years old

num1 = 20
num2 = 80
print(f"{num1} + {num2} = {num1 + num2}")  # 20 + 80 = 100
