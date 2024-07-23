package main

import "github.com/beego/beego/v2/server/web"

// MainController is a controller that handles the main route.
type MainController struct {
	web.Controller
}

// Get is a method that handles the HTTP GET request for the main route.
func (c *MainController) Get() {
	c.Ctx.WriteString("hello world")
}

func main() {
	// Router sets the route "/" to be handled by the MainController.
	web.Router("/", &MainController{})

	// Run starts the web server.
	web.Run()
}
