package main

import (
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"net/http"
)

func main() {
	echo := echo.New() // create a new echo instance

	// Middleware
	echo.Use(middleware.Logger())  // log every request
	echo.Use(middleware.Recover()) // recover from panics

	// Routes
	echo.GET("/", hello)

	// Start server
	echo.Logger.Fatal(echo.Start(":1323"))
}

// Handler
func hello(c echo.Context) error {
	return c.String(http.StatusOK, "Hello, World!")
}
