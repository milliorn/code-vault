# Form Event Handlers

As you may have seen previously in your learning journey, every web app experience consists of a series of events and responses to those events. Everything that can happen in a web app, from a user clicking a button to a piece of information coming back from a database, is considered an event. As seen in MDN’s list of events, forms have two built-in events that we need to handle: submit events (when a submit button is pressed to submit the final form) and reset events (when a reset button is pressed to reset the form to its initial state).

As we saw briefly in Introduction to Vue, Vue uses the v-on directive to add event handlers. Event handlers will respond to the specified event by calling the specified method.

    We can use the v-on directive on <form> elements to add form event handling functionality, like so:

    <form v-on:reset="resetForm">
    ...
    <button type="reset">Reset</button>
    </form>
    const app = new Vue({
    el: '#app',
    methods: { resetForm: function() { ... } }
    });

    In this example, we added a reset event handler to our form. We specify the type of event to respond to after a colon, :, and then specify the method to call as the value of the directive. When a user clicks the “Reset” button, a reset event will be triggered (because the type of the button is reset), the <form> event handler will see this event appear, and the resetForm method will be called in response.

Note: A common shorthand for event handlers involves replacing v-on: with @, like so:

    <form @reset="resetForm">
    ...
    </form>

Both syntaxes are acceptable and used in Vue applications.
