# Beego Framework Hello World Example

Beego is an open-source, high-performance web framework for the Go programming language, ideal for rapid development of enterprise applications including RESTful APIs, web apps, and backend services. Inspired by Tornado, Sinatra, and Flask, Beego incorporates Go-specific features such as interfaces and struct embedding.

## Features

- RESTful support
- MVC architecture
- Modularity
- Auto API documentation
- Annotation router
- Namespace support
- Powerful development tools
- Full stack for Web & API

## Quick Start

### Create Project Directory

```sh
mkdir hello
cd hello
```

## Initialize Module

```sh
go mod init example.com/hello
```

in this example I did the following:

```sh
go mod init beego/hello
```

## Install Beego

```sh
go get github.com/beego/beego/v2@latest
```

## Create Main Application

Create a new file named `main.go` or `hello.go` as seen in this repo in the project directory with the following content:

```sh
touch hello.go
```

```go
package main

import (
    "github.com/beego/beego/v2/server/web"
)

type MainController struct {
    web.Controller
}

func (c *MainController) Get() {
    c.Ctx.WriteString("Hello, Beego!")
}

func main() {
    web.Router("/", &MainController{})
    web.Run()
}
```

## Download Dependencies

```sh
go mod tidy
```

## Build Application

```sh
go build -o main.go
```

or

```sh
go run hello.go
```

## Run Application

```sh
./hello
```

or

```sh
./main
```

## Open Browser

Navigate to `http://localhost:8080` in your web browser to see the output `Hello, world`.
