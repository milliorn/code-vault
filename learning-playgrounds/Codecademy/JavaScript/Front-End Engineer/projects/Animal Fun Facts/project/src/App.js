import "./App.css";
import React from "react";
import ocean from "./images/ocean.jpg";
import { animals } from "./animals";

const title = "";
const showBackground = true;
const background = <img src={ocean} alt="ocean" className="background" />;
let images = [];

for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      ariaLabel={animal}
      role="button"
      onClick={displayFact}
    />
  );
}

const animalFacts = (
  <div>
    <h1>{title === "" ? "Click an animal for a fun fact." : title}</h1>
    {showBackground && background}
    <div className="animals">{images}</div>
    <p id="fact" />
  </div>
);

function displayFact(e) {
  const facts = animals[e.target.alt].facts;
  const rand = Math.floor(Math.random() * facts.length);
  const fact = animals[e.target.alt].facts[rand];

  document.getElementById("fact").innerHTML = fact;
}

function App() {
  return <div className="App">{animalFacts}</div>;
}

export default App;
