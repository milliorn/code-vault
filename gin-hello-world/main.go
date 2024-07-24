package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

// main is the entry point of the application.
func main() {
	router := gin.Default()

	// Handle GET requests to the root path ("/").
	router.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "Hello World!",
		})
	})

	// Run the router on port 8080.
	router.Run(":8080")
}
