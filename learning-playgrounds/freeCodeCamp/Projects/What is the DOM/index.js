const paragraph1 = document.getElementById("para1");
const h1Element = document.querySelector("h1");
const list = document.querySelector(".list");
const listItems = document.querySelectorAll("ul > li");
const h3 = document.querySelector("h3");
const button = document.getElementById("btn");

console.log(paragraph1);
console.log(paragraph1.textContent);
console.log(h1Element);
console.log(list);
console.log(listItems);

listItems.forEach((item) => {
  console.log(item);
});

let unorderedList = document.createElement("ul");
document.body.appendChild(unorderedList);

let listItem1 = document.createElement("li");
let listItem2 = document.createElement("li");

listItem1.textContent = "It's free";
listItem2.textContent = "It's awesome";

unorderedList.appendChild(listItem1);
unorderedList.appendChild(listItem2);

h3.style.color = "blue";

button.addEventListener("click", () => alert("I was clicked!"));
