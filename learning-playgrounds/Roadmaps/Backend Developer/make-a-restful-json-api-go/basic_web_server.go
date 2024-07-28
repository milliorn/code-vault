package main // package name

import ( // import package
	"fmt" // import fmt package
	"html"
	"log"      // import log package
	"net/http" // import net/http package
)

func BasicWebServer() { // main function
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) { // handle function
		fmt.Fprintf(w, "Hello, %q", html.EscapeString(r.URL.Path)) // print hello
	})

	log.Fatal(http.ListenAndServe(":8080", nil)) // log fatal
}
