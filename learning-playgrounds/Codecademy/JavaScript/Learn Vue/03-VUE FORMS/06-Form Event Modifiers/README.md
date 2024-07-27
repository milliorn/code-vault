# Form Event Modifiers

If you have prior front-end development experience, you might have some familiarity with common event-handling boilerplate. If not, don’t fret — Vue has you covered!

In order to ensure a great web experience, browsers set up default actions to perform in response to events. That way even if a web app doesn’t know how to handle an event, the browser will still respond to it. You saw this in the previous exercise when your app refreshed the page in response to a form submit event.

Event objects have built-in methods to modify this behavior, such as Event.preventDefault() (which stops the browser from performing its default event-handling behavior) and Event.stopPropagation() (which stops the event from continuing to be handled beyond the current handler).

Vue gives developers access to these methods in the form of modifiers. Modifiers are properties that can be added to directives to change their behavior. Vue includes modifiers for many common front-end operations, such as event handling.

    <form v-on:submit.prevent="submitForm">
    ...
    </form>

In this example, we added the prevent modifier to a form submit event handler directive. This will automatically call Event.preventDefault() whenever our event handler is triggered — in the case of form submit events, this will prevent the page from reloading.

Similarly, if we had used the stop modifier, it would call Event.stopPropagation(). You can find a list of available modifiers in the Vue documentation.
