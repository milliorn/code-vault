package main

import (
	"context"
	"log"
	"os"
	"time"

	"blog/handlers"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

const defaultMongoURI = "mongodb://127.0.0.1:27017" // use IPv4 to avoid ::1 mismatch
const defaultHTTPPort = "8080"

func main() {
	// --- DB connect ---
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	uri := os.Getenv("MONGODB_URI")
	if uri == "" {
		uri = defaultMongoURI
	}

	client, err := mongo.Connect(ctx, options.Client().ApplyURI(uri))
	if err != nil {
		log.Fatal(err)
	}
	defer client.Disconnect(ctx)

	if err := client.Ping(ctx, nil); err != nil {
		log.Fatal(err)
	}
	log.Println("MongoDB connection established.")

	db := client.Database("blog_db")
	h := handlers.NewHandler(db)

	// --- HTTP server ---
	router := gin.Default()

	// Local dev: don’t trust all proxies (silences warning)
	_ = router.SetTrustedProxies(nil)

	// Only load .html files (avoids blank template name)
	router.LoadHTMLGlob("templates/*.html")

	router.GET("/", h.HomePage)
	router.GET("/post/:id", h.ViewPost)
	router.GET("/create", h.CreatePost)
	router.GET("/edit/:id", h.EditPost)
	router.POST("/save", h.SavePost)
	router.GET("/delete/:id", h.DeletePost)

	port := os.Getenv("PORT")
	if port == "" {
		port = defaultHTTPPort
	}
	addr := ":" + port

	log.Println("HTTP listening on", addr)
	if err := router.Run(addr); err != nil {
		log.Fatal(err)
	}
}
