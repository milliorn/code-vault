#!/usr/bin/env python3
# countasync.py

import asyncio


async def count():  # Define an asynchronous function
    print("One")  # Print "One"
    await asyncio.sleep(1)  # Pause for 1 second
    print("Two")  # Print "Two"


async def main():  # Define an asynchronous function
    # Run three instances of count() concurrently
    await asyncio.gather(count(), count(), count())


if __name__ == "__main__":  # If this script is run directly
    import time
    s = time.perf_counter()  # Get the current time
    asyncio.run(main())  # Run the main() function
    elapsed = time.perf_counter() - s  # Calculate the elapsed time
    # Print the elapsed
    print(f"{__file__} executed in {elapsed:0.2f} seconds.")
