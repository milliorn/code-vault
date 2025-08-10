package main

import (
	"context"
	"fmt"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

const (
	mongoURI   = "mongodb://127.0.0.1:27017" // Docker MongoDB (IPv4)
	dbName     = "test_db"
	collection = "users"
)

type User struct {
	ID   primitive.ObjectID `bson:"_id,omitempty"`
	Name string             `bson:"name"`
	Age  int                `bson:"age"`
}

func main() {
	// --- connect ---
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	
	defer cancel()

	client, err := mongo.Connect(ctx, options.Client().ApplyURI(mongoURI))

	if err != nil {
		log.Fatal("connect:", err)
	}

	defer client.Disconnect(ctx)

	coll := client.Database(dbName).Collection(collection)

	// --- C: Create (InsertOne) ---
	u := User{Name: "John Doe", Age: 30}
	insertRes, err := coll.InsertOne(ctx, u)
	
	if err != nil {
		log.Fatal("insert:", err)
	}
	
	id := insertRes.InsertedID.(primitive.ObjectID)
	
	fmt.Printf("CREATE → inserted _id = %s\n", id.Hex())

	// --- R: Read (FindOne by _id) ---
	var got User
	
	if err := coll.FindOne(ctx, bson.M{"_id": id}).Decode(&got); err != nil {
		log.Fatal("findOne:", err)
	}
	
	fmt.Printf("READ(1) → %+v\n", got)

	// --- R: Read (Find many) ---
	cur, err := coll.Find(ctx, bson.M{})
	
	if err != nil {
		log.Fatal("find:", err)
	}
	
	defer cur.Close(ctx)

	fmt.Println("READ(many) →")
	
	for cur.Next(ctx) {
		var each User
	
		if err := cur.Decode(&each); err != nil {
			log.Fatal("decode:", err)
		}
	
		fmt.Printf("  %+v\n", each)
	}
	
	if err := cur.Err(); err != nil {
		log.Fatal("cursor:", err)
	}

	// --- U: Update (UpdateOne with $set) ---
	up := bson.M{"$set": bson.M{"age": 35}}
	upRes, err := coll.UpdateOne(ctx, bson.M{"_id": id}, up)
	
	if err != nil {
		log.Fatal("update:", err)
	}
	
	fmt.Printf("UPDATE → matched=%d, modified=%d\n", upRes.MatchedCount, upRes.ModifiedCount)

	// Verify update
	var after User
	
	if err := coll.FindOne(ctx, bson.M{"_id": id}).Decode(&after); err != nil {
		log.Fatal("verify findOne:", err)
	}
	
	fmt.Printf("VERIFY → %+v\n", after)

	// --- D: Delete (DeleteOne) ---
	delRes, err := coll.DeleteOne(ctx, bson.M{"_id": id})
	
	if err != nil {
		log.Fatal("delete:", err)
	}
	
	fmt.Printf("DELETE → deleted=%d\n", delRes.DeletedCount)

	// --- Final: count remaining docs ---
	count, err := coll.CountDocuments(ctx, bson.M{})
	
	if err != nil {
		log.Fatal("count:", err)
	}
	
	fmt.Printf("FINAL → collection count = %d\n", count)
}
