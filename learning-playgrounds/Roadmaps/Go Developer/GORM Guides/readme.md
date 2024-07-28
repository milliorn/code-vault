# GORM Guides

The error you're seeing indicates that `go get` is deprecated outside a module context. To install a package with `go get`, you need to be inside a Go module. Here are the steps to properly install the `gorm` package within a Go module:

1. **Initialize a Go Module** (if you haven't already):

   ```sh
   go mod init your-module-name
   ```

   Replace `your-module-name` with the name of your module.

2. **Install GORM** using `go get` within the module context:

   ```sh
   go get gorm.io/gorm
   ```

Alternatively, you can use `go install` if you need a specific version:

```sh
go install gorm.io/gorm@latest
```

Here’s a step-by-step example:

1. Open your terminal.
2. Navigate to your project directory.
3. Initialize a Go module (if not done yet):

   ```sh
   go mod init myproject
   ```

4. Install GORM:

   ```sh
   go get gorm.io/gorm
   go get -u gorm.io/driver/sqlite
   ```

This should set up the module and install the GORM package correctly.

https://gorm.io/docs/
https://gorm.io/docs/models.html
