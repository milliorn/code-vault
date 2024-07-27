import json

import requests

BASE_URL = 'https://fakestoreapi.com'

new_product = {
    "title": 'test product',
    "price": 13.5,
    "description": 'lorem ipsum set',
    "image": 'https://i.pravatar.cc',
    "category": 'electronic'
}

headers = {
    "Content-Type": "application/json"
}

response = requests.post(f"{BASE_URL}/products",
                         data=json.dumps(new_product), headers=headers)
print(response.json())

query_params = {
    "limit": 3
}

response = requests.get(f"{BASE_URL}/products/18")
print(response.json())

updated_product = {
    "title": 'updated_product',
    "category": 'clothing'
}

response = requests.put(f"{BASE_URL}/products/21", json=updated_product)
print(response.json())

updated_product = {
    "category": 'electronic'
}

response = requests.patch(f"{BASE_URL}/products/21", json=updated_product)
print(response.json())

response = requests.delete(f"{BASE_URL}/products/21")
print(response.json())
