const input = "turpentine and turtles";
const vowels = ["A", "E", "I", "O", "U"];
let resultArray = [];

input
  .toUpperCase()
  .split("")
  .forEach((e) => {
    if (vowels.includes(e)) {
      if (e === "E" || e === "U") {
        resultArray.push(e, e);
      } else {
        resultArray.push(e);
      }
    }
  });

console.log(resultArray.join(""));
