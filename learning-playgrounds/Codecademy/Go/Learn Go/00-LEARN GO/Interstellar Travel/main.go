package main

import (
	"fmt"
)

// Create the function fuelGauge() here
func fuelGauge(fuel int) {
	fmt.Printf("%d fuel left.", fuel)
}

// Create the function calculateFuel() here
func calculateFuel(planet string) int {
	var fuel int

	switch planet {
	case "Venus":
		fuel = 300000
	case "Mercury":
		fuel = 500000
	case "Mars":
		fuel = 700000
	default:
		fuel = 0
	}

	return fuel
}

// Create the function greetPlanet() here
func greetPlanet(planet string) {
	fmt.Printf("Welcome to %s!\n", planet)
}

// Create the function cantFly() here
func cantFly() {
	fmt.Println("We do not have the available fuel to fly there.")
}

// Create the function flyToPlanet() here
func flyToPlanet(planet string, fuel int) int {
	var fuelRemaining int
	var fuelCost int

	fuelRemaining = fuel
	fuelCost = calculateFuel(planet)

	if fuelRemaining >= fuelCost {
		greetPlanet(planet)
		fuelRemaining -= fuelCost
	} else if fuelCost >= fuelRemaining {
		cantFly()
	}

	return fuelRemaining
}

func main() {
	// Test your functions!
	fmt.Println(calculateFuel("Venus"))
	fmt.Println(calculateFuel("Mercury"))
	fmt.Println(calculateFuel("Mars"))
	fmt.Println(calculateFuel("Earth"))

	// Create `planetChoice` and `fuel`
	var fuel int
	fuel = 1000000

	planetChoice := "Venus"

	// And then liftoff!
	fuel = flyToPlanet(planetChoice, fuel)
	fuelGauge(fuel)
}
