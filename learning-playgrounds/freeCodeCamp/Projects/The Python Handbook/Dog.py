from Animal import Animal


class Dog(Animal):
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def bark(self):
        print('Woof!')

    def eat(self):
        print('Eating dog food')

    def __gt__(self, other):
        return True if self.age > other.age else False


roger = Dog('Roger', 2)
print(roger.age)
roger.bark()
print(roger.name)
roger.walk()
