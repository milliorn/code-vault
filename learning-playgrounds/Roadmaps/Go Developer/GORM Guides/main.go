package main

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

// Product is a struct that represents the product table
type Product struct {
	gorm.Model
	Code  string
	Price uint
}

func main() {
	// Connect to the database
	db, err := gorm.Open(sqlite.Open("test.db"), &gorm.Config{})

	// Check if the connection to the database was successful
	if err != nil {
		panic("failed to connect database")
	}

	// Migrate the schema
	db.AutoMigrate(&Product{})

	// Create
	db.Create(&Product{Code: "D42", Price: 100})

	// Read
	var product Product
	db.First(&product, 1)                 // find product with integer primary key
	db.First(&product, "code = ?", "D42") // find product with code D42

	// Update - update product's price to 200
	db.Model(&product).Update("Price", 200)

	// Update - update multiple fields
	db.Model(&product).Updates(Product{Price: 200, Code: "F42"})                    // non-zero fields
	db.Model(&product).Updates(map[string]interface{}{"Price": 200, "Code": "F42"}) // non-zero fields

	// Delete - delete product
	db.Delete(&product, 1)
}
