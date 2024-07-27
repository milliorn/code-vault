# Instance Methods

Throughout this lesson, we have covered many options object properties that allow us to store and generate dynamic values to use in our template. But where do we store any methods we need to make our app work? As you might guess, there is an options object property called methods.

The methods property is where Vue apps store their instance methods. These methods can be used in many situations, such as helper functions used in other methods or event handlers (functions that are called in response to specific user interactions).

    const app = new Vue({
        el: "#app",
        data: {
            hoursStudied: 300
        },
        methods: {
            resetProgress: function () {
                this.hoursStudied = 0;
            }
        }
    });

    <button v-on:click="resetProgress">Reset Progress</button>

In this example, we added an instance method called resetProgress to our Vue app using methods. This method sets the value of hoursStudied to 0.

    We then added this method as an event handler to a <button> so that whenever the button is clicked, the method will be called. Don’t worry about the v-on:click code for this lesson — we will cover it in Vue Forms.

The value of methods is an object where the keys of the object are the names of the methods and the values are the corresponding instance methods.
