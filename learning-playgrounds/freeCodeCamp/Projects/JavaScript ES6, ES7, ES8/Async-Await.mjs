import fetch from "node-fetch"

const apiURL = 'https://catfact.ninja/fact';

const resolvedData = () => {
  new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved')
    }, 1000)
  })
}

async function getData() {
  const result = resolvedData()
  console.log(result)
}

getData();
/*
async function getData() {
  const response = await fetch(apiURL)
  const json = await response.json()
  console.log(json.fact)
}

function getData() {
  fetch(apiURL)
    .then((res) => res.json())
    .then((json) => {
      console.log(json.fact)
    }).catch((error) => {
      console.log(error)
    })
}
*/
