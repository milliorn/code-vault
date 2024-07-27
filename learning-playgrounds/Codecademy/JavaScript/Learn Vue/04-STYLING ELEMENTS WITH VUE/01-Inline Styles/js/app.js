/*
Start by adding a computed property called submitButtonColorto app.js with a value of the following function:
This function will check the computed property formIsValid and will return the current blue color, #4c7ef3,
if the form is valid or it will return gray if the form is not valid.

Next let’s create the computed property that will determine which cursor to use.
In app.js, add a computed property called submitButtonCursor with a value of the following function:
This function will return a pointer if the form is valid and will keep the cursor as the default cursor if it is not.
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
            get: function () {
                if (this.firstName && this.lastName) {
                    return this.firstName + ' ' + this.lastName;
                } else {
                    return this.firstName || this.lastName;
                }
            },
            set: function (newFullName) {
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
        ticketDescription: function () {
            let readableTicketType = 'General Admission';
            if (this.ticketType === 'vip') {
                readableTicketType = 'VIP';
            }

            let ticketPluralization = 'tickets';
            if (this.ticketQuantity === 1) {
                ticketPluralization = 'ticket';
            }

            return this.ticketQuantity + ' ' + readableTicketType + ' ' + ticketPluralization;
        },
        formIsValid: function () {
            return this.firstName && this.lastName && this.email && this.purchaseAgreementSigned;
        },
        submitButtonColor: function () {
            if (this.formIsValid) {
                return '#4c7ef3';
            } else {
                return 'gray';
            }
        },
        submitButtonCursor: function () {
            if (this.formIsValid) {
                return 'pointer';
            } else {
                return 'default';
            }
        }
    },
    watch: {
        specialRequests: function (newRequests, oldRequests) {
            if (newRequests.toLowerCase().includes('meet and greet') ||
                newRequests.toLowerCase().includes('meet-and-greet')) {
                this.ticketType = 'vip';
            }
        }
    },
    methods: {
        resetFields: function () {
            this.firstName = '';
            this.lastName = '';
            this.email = '';
            this.ticketQuantity = 1;
            this.ticketType = 'general';
            this.referrals = [];
            this.specialRequests = '';
            this.purchaseAgreementSigned = false;
        }
    }
});