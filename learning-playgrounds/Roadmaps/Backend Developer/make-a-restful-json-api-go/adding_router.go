package main

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func AddingRouter() {

	router := mux.NewRouter().StrictSlash(true)
	router.HandleFunc("/", Index)
	log.Fatal(http.ListenAndServe(":8080", router))
}
