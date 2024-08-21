"""
https://fastapi.tiangolo.com/
"""

from typing import Annotated
from enum import Enum

from pydantic import BaseModel
from fastapi import FastAPI, Query


class ModelName(str, Enum):  # Define an enumeration
    alexnet = "alexnet"
    resnet = "resnet"
    lenet = "lenet"


class Item(BaseModel):
    name: str
    description: str | None = None
    price: float
    tax: float | None = None


fake_items_db = [{"item_name": "Foo"}, {
    "item_name": "Bar"}, {"item_name": "Baz"}]

app = FastAPI()  # Create an instance of the FastAPI class


@app.get("/")  # Decorator to define the path and method
def read_root():  # Function to be executed when the path is accessed
    # Return a dictionary that will be converted to JSON
    return {"Hello": "World"}


@app.get("/models/{model_name}")
async def get_model(model_name: ModelName):
    if model_name is ModelName.alexnet:
        return {"model_name": model_name, "message": "Deep Learning FTW!"}

    if model_name.value == "lenet":
        return {"model_name": model_name, "message": "LeCNN all the images"}

    return {"model_name": model_name, "message": "Have some residuals"}


@app.get("/items/{item_id}")
async def read_item(item_id: str, q: str | None = None, short: bool = False):
    item = {"item_id": item_id}
    if q:
        item.update({"q": q})
    if not short:
        item.update(
            {"description": "This is an amazing item that has a long description"}
        )
    return item


@app.put("/items/{item_id}")  # Path with a parameter
def update_item(item_id: int, item: Item):  # Receive a Pydantic model as a parameter
    # Return the received data
    return {"item_name": item.name, "item_id": item_id}


@app.get("/items/")
# Query parameter with validation
async def read_items(q: Annotated[str, Query(min_length=3)] = "fixedquery"):
    # Define a dictionary
    results = {"items": [{"item_id": "Foo"}, {"item_id": "Bar"}]}
    if q:  # Check if the query parameter is present
        results.update({"q": q})  # Add a new key-value pair to the dictionary
    return results  # Return the dictionary


@app.post("/items/")
async def create_item(item: Item):
    item_dict = item.dict()  # Convert the Pydantic model to a dictionary

    if item.tax:
        price_with_tax = item.price + item.tax
        # Add a new key-value pair to the dictionary
        item_dict.update({"price_with_tax": price_with_tax})
    return item_dict  # Return the dictionary


@app.put("/items/{item_id}")
# Receive a Pydantic model and a query parameter
async def update_item(item_id: int, item: Item, q: str | None = None):
    # Convert the Pydantic model to a dictionary
    result = {"item_id": item_id, **item.dict()}
    if q:  # Check if the query parameter is present
        result.update({"q": q})  # Add a new key-value pair to the dictionary
    return result  # Return the dictionary
