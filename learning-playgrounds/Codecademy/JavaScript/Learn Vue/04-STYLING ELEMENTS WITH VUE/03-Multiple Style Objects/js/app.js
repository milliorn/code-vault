/*
In app.js, add a computed property called touchedEmailStyles with a value of the following function:
This function will return a style object with a light gray border color if the “Email”
field hasn’t been typed in yet and will return a darker gray border color if it has been.
We’ve also made the size of the border slightly larger with border-width in both to
indicate this is a required field.

In app.js, add a computed property called invalidEmailStyles and make the value the following function:

This function will return a style object with a light red background and a dark red border if
the “Email” field has been filled in with an invalid email value.
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
        invalidEmailStyles: {
            function() {
                if (this.email && !this.emailIsValid) {
                    return {
                        'background-color': '#ffeded',
                        'border-color': '#da5252'
                    }
                }
            }
        },
        touchedEmailStyles: {
            function() {
                if (this.email) {
                    return {
                        'border-color': '#bdbcbc',
                        'border-width': '2px'
                    }
                } else {
                    return {
                        'border-color': '#e0e0e0',
                        'border-width': '2px'
                    }
                }
            }
        },
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