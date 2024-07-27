import requests
import json

url = "https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=sagittarius&day=today"  # Change the sign and day as per your requirement
response = requests.get(url)  # Get the response from the API
data = response.json()  # Convert the response to JSON

with open("horoscope_data.json", "w") as file:  # Open a file in write mode
    json.dump(data, file)  # Dump the data to the file
    print("Data stored successfully!")  # Print a success message

with open("horoscope_data.json", "r") as file:  # Open the file in read mode
    data = json.load(file)  # Load the data from the file
    print(data)  # Print the data
    print()  # Print a new line
    formatted_data = json.dumps(data, indent=2)  # Format the data
    print(formatted_data)  # Print the formatted data
    print()  # Print a new line

date = data["data"]["date"]  # Get the date from the data
horoscope_data = data["data"]["horoscope_data"]  # Get the horoscope data from the data

print(f"Horoscope for date {date}: {horoscope_data}")  # Print the horoscope data

data = {
    "name": "John Doe",
    "age": 25,
    "is_married": False,
}  # Create a dictionary

json_str = json.dumps(data)  # Convert the dictionary to JSON
print(json_str)  # Print the JSON string

data = json.loads(json_str)  # Convert the JSON string to dictionary
print(data["name"])  # Print the name from the dictionary
print(data["age"])  # Print the age from the dictionary
print(data["is_married"])  # Print the is_married from the dictionary
