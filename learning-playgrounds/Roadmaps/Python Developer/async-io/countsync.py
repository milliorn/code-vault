#!/usr/bin/env python3
# countsync.py

import time


def count():  # Define a function
    print("One")  # Print "One"
    time.sleep(1)  # Pause for 1 second
    print("Two")  # Print "Two"


def main():  # Define a function
    # Run three instances of count() sequentially
    for _ in range(3):
        count()


if __name__ == "__main__":  # If this script is run directly
    s = time.perf_counter()  # Get the current time
    main()  # Run the main() function
    elapsed = time.perf_counter() - s  # Calculate the elapsed time
    # Print the elapsed
    print(f"{__file__} executed in {elapsed:0.2f} seconds.")
