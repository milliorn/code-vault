package main

import (
	"encoding/json"
	"log"
	"os"
)

func main() {
	// Open the JSON file
	file, err := os.Open("sample.json")
	if err != nil {
		log.Fatal(err)
	}
	defer file.Close()

	dec := json.NewDecoder(file)      // read from file
	enc := json.NewEncoder(os.Stdout) // write to standard output

	for {
		var v map[string]interface{}           // map of strings to empty interfaces
		if err := dec.Decode(&v); err != nil { // decode JSON from file
			if err.Error() == "EOF" {
				break // End of file reached
			}
			log.Println(err) // log error
			return           // exit
		}
		for k := range v { // iterate over keys in map
			if k != "firstName" { // if key is not "firstName"
				delete(v, k) // delete key from map
			}
		}
		if err := enc.Encode(&v); err != nil { // encode JSON to standard output
			log.Println(err) // log error
		}
	}
}
