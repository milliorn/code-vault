#!/usr/bin/env python3
# rand.py

import asyncio
import random

# ANSI colors
c = (
    "\033[0m",   # End of color
    "\033[36m",  # Cyan
    "\033[91m",  # Red
    "\033[35m",  # Magenta
)


# Define an asynchronous function
async def makerandom(idx: int, threshold: int = 6) -> int:
    print(c[idx + 1] + f"Initiated makerandom({idx}).")  # Print a message
    i = random.randint(0, 10)  # Generate a random number between 0 and 10
    while i <= threshold:  # While the number is less than or equal to the threshold
        # Print a message
        print(c[idx + 1] + f"makerandom({idx}) == {i} too low; retrying.")
        await asyncio.sleep(idx + 1)  # Pause for idx + 1 seconds
        i = random.randint(0, 10)  # Generate a new random number
    # Print a message
    print(c[idx + 1] + f"---> Finished: makerandom({idx}) == {i}" + c[0])
    return i


async def main():
    # Run three instances of makerandom() concurrently
    res = await asyncio.gather(*(makerandom(i, 10 - i - 1) for i in range(3)))
    return res  # Return the results


if __name__ == "__main__":  # If this script is run directly
    random.seed(444)  # Seed the random number generator
    r1, r2, r3 = asyncio.run(main())  # Run the main() function
    print()
    print(f"r1: {r1}, r2: {r2}, r3: {r3}")  # Print the results
