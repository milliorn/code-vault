/*
REQUESTS II

async POST Requests II

Now we’re going to piece together a POST request using async and await.

Feel free to refer to the async/await diagram below at any point while completing this exercise:
*/

//  Boilerplate
const getData = async () => {
  try {
    const response = await fetch('https://api-to-call.com/endpoint', {
      method: 'POST',
      body: JSON.stringify({id: 200})
    })
    
    if(response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Request failed!')
  } catch (error) {
    console.log(error);
  }
};
