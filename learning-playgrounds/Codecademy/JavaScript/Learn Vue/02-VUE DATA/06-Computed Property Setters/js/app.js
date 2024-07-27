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

	In app.js, add a computed property to the Vue app’s options object.
	Set the value of this property to an empty object, {}.

	1 — Add a computed property called fullName with a value of the following function:
	2 — Add another computed property called ticketDescription with a value of the following function:

	Make the value of fullName in computed an object.
	Add a key called get to that object and make the value equal to the current fullName function.

	Add a key called set to fullName‘s object. Make the value of this property the following function:
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
	},
	computed: {
		fullName: {
			get: function() {
				if (this.firstName && this.lastName) {
					return this.firstName + ' ' + this.lastName;
				} else {
					return this.firstName || this.lastName;
				}
			},
			set: function(newFullName) {
				const names = newFullName.split(' ');

				if (names.length === 2) {
					this.firstName = names[0];
					this.lastName = names[1];
				}

				if (names.length <= 1) {
					this.firstName = names[0] || '';
					this.lastName = '';
				}
					}
		},
		ticketDescription: {
			function() {
				let readableTicketType = 'General Admission';

				if (this.ticketType === 'vip') {
					readableTicketType = 'VIP';
				}

				let ticketPluralization = 'tickets';

				if (this.ticketQuantity === 1) {
					ticketPluralization = 'ticket';
				}

				return this.ticketQuantity + ' ' + readableTicketType + ' ' + ticketPluralization;
			}
		}
	}
});
