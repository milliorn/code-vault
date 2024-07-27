package main

import (
	"fmt"
	"math/rand"
	"time"
)

func main() {

	//Since we’re running a simulator,
	//we are going to generate random numbers to mock up the uncertainty that comes with a minimally planned bank heist.
	//To do that, we need to provide a unique seed value.
	rand.Seed(time.Now().UnixNano())

	//We need a variable that keeps track of whether how successful our heist is.
	isHeistOn := true

	//Create another variable, eludedGuards and assign it a value of rand.Intn(100).
	eludedGuards := rand.Intn(100)

	//Create an if statement that checks if eludedGuards is at least 50.
	//Inside if block, add a print statement that confirms that the heist continues
	//There’s a chance that we won’t make it past the guards in which case, we’ve failed.
	if eludedGuards >= 50 {
		fmt.Println("Looks like you've managed to make it past the guards." +
			" Good job, but remember, this is the first step...")
	} else {
		isHeistOn = false
		fmt.Println("Plan a better disguise next time?")
	}

	//After the if...else statement and before the print statement,
	//create a variable openedVault and assign it a random number between 0 and 99 using rand.Intn(100).
	openedVault := rand.Intn(100)

	//Below the if...else statement, add a print statement to view the current status of isHeistOn.
	fmt.Println(isHeistOn)

	//Create an if statement that checks if isHeistOn is true and if openedVault is at least 70.
	//Inside the if block, add a print statement that states that the vault has been opened, e.g. "Grab and GO!".
	//We need to account for failure, add an else if statement that only checks isHeistOn.
	//To meet this condition, this means that up until this point, isHeistOn is true,
	//but openedVault is less than 70 (so we couldn’t open the vault).
	if isHeistOn && openedVault >= 70 {
		fmt.Println("Vault has been opened. Grab and GO!")
	} else if isHeistOn {
		isHeistOn = false
		fmt.Println("Vault cannot be opened.")
	}

	//Like we’ve done before, we’ll use a random number that represents possible outcomes.
	//Under the previous conditional,
	//create a variable leftSafely that has a value of rand.Intn(5) to account for five different situations.
	leftSafely := rand.Intn(5)

	//Create another if statement that checks if isHeistOn still evaluates to true.
	//Inside the if block, add a switch statement that checks leftSafely.
	if isHeistOn {
		switch leftSafely {
		case 0:
			isHeistOn = false
			fmt.Println("The heist has failed.")
		case 1:
			isHeistOn = false
			fmt.Println("Cops have arrived an apprehended you.")
		case 2:
			isHeistOn = false
			fmt.Println("You enter the vault and the door closes behind you.")
		case 3:
			isHeistOn = false
			fmt.Println("You get scared and run away.")
		default:
			fmt.Println("Start the getaway car!")
		}
	}

	//Under the conditional we used to check if we safely left, add another if statement that checks isHeistOn.
	//Inside the if statement, create a variable amtStolen and assign it 10000 + rand.Intn(1000000).
	if isHeistOn {
		amtStolen := 10000 + rand.Intn(1000000)
		fmt.Printf("You found and took %d from the vault", amtStolen)
	}
}
