from Animal import Animal
import Dog


class Cat:
    def eat(self):
        print('Eating cat food')


animal1 = Dog.Dog('Roger', 2)
animal2 = Cat()

animal1.eat()
animal2.eat()
