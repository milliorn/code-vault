const info = {
  first: "Dave",
  last: "Jon",
  city: "Austin",
};

const { first: f, last: l } = info;

console.log(`${f} ${l}`);

let [fn, mn, ln] = ["a", "b", "c"];
console.log(fn);
