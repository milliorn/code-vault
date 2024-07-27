/*
	In app.js, create a new Vue app using the code snippet provided above.

	In app.js, add an el property to the options object of our Vue app.
	The value of this property should target the HTML element with an ID of app.

	In app.js, add a data attribute to our options object with a value of an empty object, {}.

	Next, add the following data to the data object.
	Each of these pieces of data corresponds to a field in our ticketing app’s form.

	A firstName attribute with a value of an empty string, ''
	A lastName attribute with a value of an empty string, ''
	An email attribute with a value of an empty string, ''
	A ticketQuantity attribute with a value of 1
	A ticketType attribute with a value of 'general'
	A referrals attribute with a value of an empty array, []
	A specialRequests attribute with a value of an empty string, ''
	A purchaseAgreementSigned attribute with a value of false
*/
const app = new Vue({
	el: '#app',
	data: {
		firstName: '',
		lastName: '',
		email: '',
		ticketQuantity: 1,
		ticketType: 'general',
		referrals: [],
		specialRequests: '',
		purchaseAgreementSigned: false
	}
});
