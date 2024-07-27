import json


class Person:  # Create a class
    def __init__(self, name, age):  # Create a constructor
        self.name = name  # Set the name attribute
        self.age = age  # Set the age attribute


class PersonEncoder(json.JSONEncoder):  # Create a custom JSON encoder
    def default(self, obj):  # Override the default method
        if isinstance(
            obj, Person
        ):  # Check if the object is an instance of the Person class
            return {"name": obj.name, "age": obj.age}  # Return the dictionary
        return super().default(obj)  # Return the default method


person = Person("John Doe", 25)  # Create an instance of the Person class
json_data = json.dumps(person, cls=PersonEncoder)  # Convert the object to JSON
print(json_data)  # Print the JSON data
