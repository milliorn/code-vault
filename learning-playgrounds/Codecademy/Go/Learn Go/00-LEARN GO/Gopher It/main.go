//Every Go program requires a package declaration, add in package main at the top of main.go.

//Now let’s import the packages that we need.
//In this case, we want to create ASCII art and print it to the terminal.
//Therefore, we want to import the "fmt" package.

//Time to define the main function that will later house the code we need to print to the terminal.

package main

import (
	"time"
	"fmt"
)


func main() {
	//Inside the main function,
	//we can use functions from the fmt package and print to the terminal.
	//We’re already familiar with Println to print and add a new line each time.
	fmt.Println("      `.-::::::-.`")
	fmt.Println("  .:-::::::::::::::-:.")
	fmt.Println("  `_:::    ::    :::_`")
	fmt.Println("   .:( ^   :: ^   ):.")
	fmt.Println("   `:::   (..)   :::.")
	fmt.Println("   `:::::::UU:::::::`")
	fmt.Println("   .::::::::::::::::.")
	fmt.Println("   O::::::::::::::::O")
	fmt.Println("   -::::::::::::::::-")
	fmt.Println("   `::::::::::::::::`")
	fmt.Println("    .::::::::::::::.")
	fmt.Println("      oO:::::::Oo")
	fmt.Println()
	fmt.Println(time.Now())
}
