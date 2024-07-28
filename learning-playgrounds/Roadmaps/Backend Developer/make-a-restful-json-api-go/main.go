package main

import (
	"log"
	"net/http"
)

func main() {
	// BasicWebServer()
	// AddingRouter()

	router := NewRouter()

	log.Fatal(http.ListenAndServe(":8080", router))
}
