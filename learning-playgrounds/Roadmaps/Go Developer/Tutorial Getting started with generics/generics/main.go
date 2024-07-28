package main

import "fmt"

// Number is an interface that represents a numeric value.
// It can be either an int64 or a float64.
type Number interface {
	int64 | float64
}

// main is the entry point of the program.
// It demonstrates the usage of generic functions for summing integer and float values.
func main() {
	// Initialize a map for the integer values
	ints := map[string]int64{
		"first":  34,
		"second": 12,
	}

	// Initialize a map for the float values
	floats := map[string]float64{
		"first":  35.98,
		"second": 26.99,
	}

	fmt.Printf("Non-Generic Sums: %v and %v\n",
		SumInts(ints),
		SumFloats(floats))

	fmt.Printf("Generic Sums: %v and %v\n",
		SumIntsOrFloats[string, int64](ints),
		SumIntsOrFloats[string, float64](floats))

	fmt.Printf("Generic Sums, type parameters inferred: %v and %v\n",
		SumIntsOrFloats(ints),
		SumIntsOrFloats(floats))

	fmt.Printf("Generic Sums with Constraint: %v and %v\n",
		SumNumbers(ints),
		SumNumbers(floats))
}

// SumInts calculates the sum of all int64 values in the given map.
func SumInts(m map[string]int64) int64 {
	var sum int64
	for _, v := range m {
		sum += v
	}
	return sum
}

// SumFloats calculates the sum of all float64 values in the given map.
func SumFloats(m map[string]float64) float64 {
	var sum float64
	for _, v := range m {
		sum += v
	}
	return sum
}

// SumIntsOrFloats calculates the sum of values in a map of integers or floats.
// The map must have keys of a comparable type and values of type int64 or float64.
// It returns the sum of the values.
func SumIntsOrFloats[K comparable, V int64 | float64](m map[K]V) V {
	var sum V
	for _, v := range m {
		sum += v
	}
	return sum
}

// SumNumbers calculates the sum of values in a map.
// The map must have keys of a comparable type and values of a type that implements the Number interface.
// It returns the sum of the values.
func SumNumbers[K comparable, V Number](m map[K]V) V {
	var sum V
	for _, v := range m {
		sum += v
	}
	return sum
}
