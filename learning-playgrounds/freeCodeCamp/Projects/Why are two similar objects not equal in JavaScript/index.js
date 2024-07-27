const obj1 = {
  name: "Dillion"
}
const obj2 = {
  name: "Dillion"
}

console.log(obj1 === obj2)
// false

let arr1 = [ 1, 2, 3 ]
let arr2 = [ 1, 2, 3 ]

console.log(arr1 === arr2)
// false

let name = "Dillion"
let age = 60
let isRaining = true

function print() {
  console.log('hello')
}

print()

let name2 = "Dillion"

console.log(name === name2)

console.log(
  JSON.stringify(arr1)
  ===
  JSON.stringify(arr2)
)
// true

console.log(
  JSON.stringify(obj1)
  ===
  JSON.stringify(obj2)
)
// true