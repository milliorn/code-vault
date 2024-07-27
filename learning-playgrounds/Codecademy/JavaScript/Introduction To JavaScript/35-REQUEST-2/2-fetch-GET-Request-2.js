/*
REQUESTS II

fetch() GET Requests II

We are going to reconstruct the boilerplate code necessary to create a GET request using the fetch() function step-by-step.
*/


fetch('https://api-to-call.com/endpoint').then(response => {
	if (response.ok) {
  	return response.json();
  }  
	throw new Error('Request failed!');
	}, networkError => {console.log(networkError.message)}).then(jsonResponse => { return jsonResponse;
});
