package main

import (
	"fmt"
	"time"
)

// isEven checks if a given number is even.
// It returns true if the number is even, otherwise false.
func isEven(n int) bool {
	return n%2 == 0
}

// main is the entry point of the program.
// It initializes a variable n to 0 and spawns two goroutines.
// The first goroutine checks if n is even or odd and prints the result.
// The second goroutine increments the value of n.
// The main goroutine waits for one second before exiting.
func main() {
	n := 0

	go func() {
		nIsEven := isEven(n) // n is even

		time.Sleep(5 * time.Millisecond) // sleep for 5 milliseconds

		if nIsEven {
			fmt.Println("n is even")
		} else {
			fmt.Println("n is odd")
		}

		fmt.Println("Done")
	}()

	go func() {
		n++
	}()

	time.Sleep(time.Second)
}
