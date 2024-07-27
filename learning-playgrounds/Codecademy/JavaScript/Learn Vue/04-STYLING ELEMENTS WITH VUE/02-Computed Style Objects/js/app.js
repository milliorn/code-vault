/*
In app.js, let’s start by adding a computed property called submitButtonStyles
with a value of the following function:
This function will check to see if the form is valid and will return the corresponding style objects
from last exercise accordingly.
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
        submitButtonStyles: {
            function() {
                if (this.formIsValid) {
                    return {
                        'background-color': '#4c7ef3',
                        cursor: 'pointer'
                    }
                } else {
                    return {
                        'background-color': 'gray',
                        cursor: 'default'
                    }
                }
            }
        },
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