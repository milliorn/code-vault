/*
LEARN EXPRESS ROUTES

Adding Animals Routes

Congratulations, you have made our glorious Express Yourself Machine fully operational! Not only that, you now have all the tools you need to create a basic CRUD API! Time to practice your skills with a new set of routes.

You are going to add an additional set of functionality to our machine: Animal Mode! This will involve creating similar GET, POST, PUT, and DELETE routes.
*/

const express = require('express');
const app = express();

// Serves Express Yourself website
app.use(express.static('public'));

const { getElementById, getIndexById, updateElement,
        seedElements, createElement } = require('./utils');

const expressions = [];
seedElements(expressions, 'expressions');
const animals = [];
seedElements(animals, 'animals');

const PORT = process.env.PORT || 4001;
// Use static server to serve the Express Yourself Website
app.use(express.static('public'));

app.get('/expressions', (req, res, next) => {
  res.send(expressions);
});

app.get('/expressions/:id', (req, res, next) => {
  const foundExpression = getElementById(req.params.id, expressions);
  if (foundExpression) {
    res.send(foundExpression);
  } else {
    res.status(404).send();
  }
});

app.put('/expressions/:id', (req, res, next) => {
  const expressionIndex = getIndexById(req.params.id, expressions);
  if (expressionIndex !== -1) {
    updateElement(req.params.id, req.query, expressions);
    res.send(expressions[expressionIndex]);
  } else {
    res.status(404).send();
  }
});

app.post('/expressions', (req, res, next) => {
  const receivedExpression = createElement('expressions', req.query);
  if (receivedExpression) {
    expressions.push(receivedExpression);
    res.status(201).send(receivedExpression);
  } else {
    res.status(400).send();
  }
});

app.delete('/expressions/:id', (req, res, next) => {
  const expressionIndex = getIndexById(req.params.id, expressions);
  if (expressionIndex !== -1) {
    expressions.splice(expressionIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send();
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`); 
});

app.get('/animals', (req, res, next) => {
  res.send(animals);
});

app.get('/animals/:id', (req, res, next) => {
  const foundAnimals = getElementById(req.params.id, animals);
  if (foundAnimals) {
    res.send(foundAnimals);
  } else {
    res.status(404).send();
  }
});

app.put('/animals/:id', (req, res, next) => {
  const animalsIndex = getIndexById(req.params.id, animals);
  if (animalsIndex !== -1) {
    updateElement(req.params.id, req.query, animals);
    res.send(animals[animalsIndex]);
  } else {
    res.status(404).send();
  }
});

app.post('/animals', (req, res, next) => {
  const receivedAnimals = createElement('animals', req.query);
  if (receivedAnimals) {
    animals.push(receivedAnimals);
    res.status(201).send(receivedAnimals);
  } else {
    res.status(400).send();
  }
});

app.delete('/animals/:id', (req, res, next) => {
  const animalsIndex = getIndexById(req.params.id, animals);
  if (animalsIndex !== -1) {
    animals.splice(animalsIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send();
  }
});
