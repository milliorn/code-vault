const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('mydatabase.db');

// Create table
db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    name TEXT,
    age INTEGER
)`);

// Insert data
const insertQuery = `INSERT INTO users (name, age) VALUES (?, ?)`; // ? is a placeholder
const name = 'John';
const age = 25;

db.run(insertQuery, [ name, age ], function (err) {
  if (err) {
    console.error(err.message);
  }
  console.log(`Inserted data with id ${this.lastID}`);
});

//  Modify data
const updateQuery = `UPDATE users SET name = ?, age = ? WHERE id = ?`; // ? is a placeholder
const updateName = 'Jack';
const updatedAge = 26;

db.run(updateQuery, [ updateName, updatedAge, 1 ], function (err) {
  if (err) {
    console.error(err.message);
  }
  console.log(`Modified data with id ${this.lastID} on ${this.changes} row(s`);
});

// Delete data
const deleteQuery = `DELETE FROM users WHERE id = ?`; // ? is a placeholder
const deleteName = 'Jon';

db.run(deleteQuery, [ deleteName ], function (err) {
  if (err) {
    console.error(err.message);
  }
  console.log(`Deleted data with id ${this.lastID} on ${this.changes} row(s`);
});

db.close();