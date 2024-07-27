my_dict = {"key1": "value1", "key2": "value2", "key3": "value3"}

if "key1" in my_dict:
    print("Key exists in the dictionary.")
else:
    print("Key does not exist in the dictionary.")


if my_dict.get("key1") is not None:
    print("Key exists in the dictionary.")
else:
    print("Key does not exist in the dictionary.")

try:
    value = my_dict["key1"]
    print("Key exists in the dictionary.")
except KeyError:
    print("Key does not exist in the dictionary.")
