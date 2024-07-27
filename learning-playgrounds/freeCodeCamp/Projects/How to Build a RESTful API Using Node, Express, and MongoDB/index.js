/*import the contents of our .env file */
require("dotenv").config();

/* Connect the database to our server using Mongoose */
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;

/* Throw a success or an error message if database connection is successful or fails. */
database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

const express = require("express");
const app = express();

/*
Create our Routes for the Endpoints
localhost:3000/api/
*/
const routes = require("./routes/routes");
app.use("/api", routes);
app.use(express.json());

/* Listen for changes of this file. */
app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});
