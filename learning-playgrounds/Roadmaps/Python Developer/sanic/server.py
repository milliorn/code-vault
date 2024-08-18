import asyncio
import time
from sanic import Sanic
from sanic.response import HTTPResponse, text
from sanic.request import Request


app = Sanic("MyHelloWorldApp")  # Create a new Sanic app


@app.get("/")  # Define a new route
async def hello_world(request: Request) -> HTTPResponse:  # Define a new route handler
    return text("Hello, world.")  # Return a simple text response


@app.get("/hello/<name>")  # Define a new route
async def hello_name(request: Request, name) -> HTTPResponse:  # Define a new route handler
    return text(f"Hello, {name}.")


@app.get("/hello/<name>/<age:int>")  # Define a new route
# Define a new route handler
async def hello_name_age(request: Request, name, age) -> HTTPResponse:
    return text(f"Hello, {name}. You are {age} years old.")


@app.get("foo")
async def foo_handler(request: Request) -> HTTPResponse:
    return text("foo foo foo")


@app.get("/sync")
def sync_handler(request: Request) -> HTTPResponse:
    return text("I am a synchronous handler")


@app.get("/sleep")
def sleep_handler(request: Request) -> HTTPResponse:
    time.sleep(1.1)
    return text("Done.")


@app.get("/async")
async def async_handler(request: Request) -> HTTPResponse:
    await asyncio.sleep(0.1)
    return text("Done.")
