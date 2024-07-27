//Let’s start by making a basic Go program.
//Before anything, we should declare our package information.
//In Go, this is done with the line package main.
//Type this as the first line of the program.

//Next we want to print out our data to the terminal,
//so we’ll be using the fmt package.
//Import fmt into our Go program.

//Now let’s create our base program by adding in a main function.

package main

import (
	"fmt"
)

func main() {
	//Let’s start by defining our string-type data.
	//Define variables for publisher, writer, artist, and title.
	//Make all of these variables strings!
	var publisher, writer, artist, title string

	//Define integer variables called year and pageNumber.
	var year, pageNumber int

	//Create a grade variable that is a float32.
	var grade float32

	//The honor of our first comic book goes to the award-winning "Mr. GoToSleep". Assign that value to title.
	title = "Mr. GoToSleep"

	//We need to give the author her due credit,
	//store the author’s name "Tracey Hatchet" in our writer variable.
	writer = "Tracey Hatchet"

	//Let’s keep the momentum going by storing the artist,
	//the American legend herself "Jewel Tampson".
	artist = "Jewel Tampson"

	//Be sure to save the publisher of this graphic novel,
	//"DizzyBooks Publishing Inc." as well.
	publisher = "DizzyBooks Publishing Inc."

	//This copy of Mr. GoToSleep came out in 1997 so let’s use that value as our year.
	year = 1997

	//It’s a floppy comic so it’s only got 14 pages.
	//Save that value in our pageNumber variable.
	pageNumber = 14

	//Our beloved vintage Mr. GoToSleep comic has unfortunately seen some wear-and-tear in the intervening decades and
	//is currently valued at a 6.5 in terms of condition.
	//Assign that value to its grade.
	grade = 6.5

	//Let’s use all of our variables in a series of fmt.Println statements!
	//We want to output all the information from each of our comic books in a way that is repeatable,
	//so be sure to format all of our information in a human-readable way.
	fmt.Println("Title:", title, "\nWriter", writer, "\nArtist", artist, "\nPublisher", publisher, "\nYear:", year, "\nPages", pageNumber, "\nGrade", grade)

	//Our next comic book is the esteemed first trade paperback of the incredible comic Epic.
	//Reassign title to "Epic Vol. 1", remember add this code in between the two print statements.
	title = "Epic Vol. 1"

	//The author,
	//a noted comics writer in his own right,
	//is named Ryan N. Shawn.
	//Reassign the writer variable to give the writer his due credit.
	writer = "Ryan N. Shawn"

	//Reassign artist with our current artist’s name,
	//the Spiegeler-winning "Phoebe Paperclips".
	artist = "Phoebe Paperclips"

	//Epic Vol. 1 was released in 2013, so use that number to update our year variable.
	year = 2013

	//As a trade paperback it’s a compilation of a few floppy comics and comes out to 160 pages.
	//Use that value to store over our pageNumber variable.
	pageNumber = 160

	//This comic is in fantastic condition but has a small shipping defect,
	//warranting a 9.0 for its grade.
	grade = 9.0

	fmt.Println("Title:", title, "\nWriter", writer, "\nArtist", artist, "\nPublisher", publisher, "\nYear:", year, "\nPages", pageNumber, "\nGrade", grade)

}
