import spacy  # Library for natural language processing
import json  # Library for working with JSON data

# Create an empty list to store the training data
training_data = []

# Load the English language model provided by spaCy
nlp = spacy.load("en_core_web_lg")

# Open the JSON file containing the event schedule data
with open("./event_schedule_data.json", "r") as f:
    data = json.load(f)

# Iterate over each example in the JSON data
for example in data["examples"]:
    # Create a temporary dictionary to store the text and entities of the example
    temp_dict = {}
    temp_dict["text"] = example["content"]
    temp_dict["entities"] = []

    # Iterate over each annotation in the example
    for annotation in example["annotations"]:
        # Extract the start and end positions, as well as the label of the annotation
        start = annotation["start"]
        end = annotation["end"] + 1
        label = annotation["tag_name"].upper()

        # Append the entity information to the temporary dictionary
        temp_dict["entities"].append((start, end, label))

    # Append the temporary dictionary to the training data list
    training_data.append(temp_dict)

# Print the training data
print(training_data)
