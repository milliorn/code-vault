/*
REQUESTS I

XHR POST Requests I

Reminder: If you haven’t already signed up for an API Key from Rebrandly, please read this Rebrandly sign up guide.

Codecademy Articles: Rebrandly URL Shortener API .

Great! By this point you’ve signed up for an API key, and you know the essence of making a GET request. We will be making a POST request using the Rebrandly API.

The major difference between a GET request and POST request is that a POST request requires additional information to be sent through the request. This additional information is sent in the body of the post request.

We’ll walk through the code from the diagram and construct our own POST request in the next lesson.
*/


/*
XHR POST Requests II

We are going to reconstruct the code from the previous exercise step-by-step until we have written a complete AJAX POST request.
*/


//	boilerplate code for an AJAX POST
const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';
const data = JSON.stringify({id: '200'});

xhr.responseType = 'json';

xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response;
  }
};

xhr.open('POST', url);

xhr.send(data);
