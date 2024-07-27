/*
REQUESTS II

fetch() POST Requests II

We are going to reconstruct the code from the previous exercise step-by-step until we have written a complete POST request using fetch() and .then().
*/

//  boilerplate

fetch('https://api-to-call.com/endpoint', {
  method: 'POST',
  body: JSON.stringify({id: '200'})
}).then(response => {
  if(response.ok) {
    return response.json();
  }
	throw new Error('Request failed!')
}, networkError => {
  console.log(networkError.message)
}).then(jsonResponse => { 
  return jsonResponse
});
