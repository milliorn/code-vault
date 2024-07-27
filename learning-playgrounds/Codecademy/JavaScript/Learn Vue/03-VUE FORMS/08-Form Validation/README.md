# Form Validation

There is one last piece of functionality we must cover to round out your Vue form knowledge — validation.

Form validation is the process in which we ensure all required information has been provided by the user and provided in the proper format. We don’t want a user to forget an important piece of information, like their last name, and never be informed about it!

There are many ways to implement form validation in Vue — we will cover one of the more common methods.

    This method makes heavy use of the disabled <button> property. In brief, if disabled is present (or set to true) on a <button> element, that <button> will not do anything when pressed. Whereas if disabled is not present (or set to false), the button will work as expected. You can find more information about the disabled property in the MDN <button> documentation.

    <button type="submit" v-bind:disabled="!formIsValid">Submit</button>
    const app = new Vue({
    el: '#app',
    computed: {
        formIsValid: function() { ... }
    }
    });

In this example:

We use the v-bind directive to set the value of the disabled property on a “Submit” button to the value of a computed property called formIsValid

formIsValid will contain some logic that checks the values stored on the Vue app and returns a boolean representing whether or not the form is valid

If the form is valid, formIsValid will return true and the disabled property will not be present on the “Submit” button, keeping the button enabled

If the form is not valid, formIsValid will return false and the button will be disabled

This solution may seem somewhat complex. It is important to note that this is not a technique we would expect you to come up with on your own at this stage in your learning journey. However, it is incredibly important to know how to implement form validation, so we wanted to introduce it to you at this stage. Take some time reviewing this code and memorizing it so that you can feel confident implementing validation as you build Vue forms in the future.
