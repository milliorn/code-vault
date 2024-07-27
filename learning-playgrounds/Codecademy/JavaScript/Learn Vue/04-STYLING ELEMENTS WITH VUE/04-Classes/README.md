# Classes

As we mentioned earlier, you will use inline styles more often later in your Vue journey when you learn how to use components.

Currently, our Vue apps all live in one file. Filling that file with lots of style rules is likely going to produce difficult to read code. In this case, it is best that we still use CSS classes to keep most of our style information in our CSS files.

Let’s check out how to dynamically add CSS classes instead of inline styles.

    <span v-bind:class="{ unread: hasNotifications }">Notifications</span>
    .unread {
    background-color: blue;
    }
    const app = new Vue({
    data: { notifications: [ ... ] },
    computed: {
        hasNotifications: function() {
        return notifications.length > 0;
        }
    }
    }

    In this example, we are using the v-bind:class directive to dynamically add a class called unread to a “Notifications” <span> element if the computed property hasNotifications returns true.

v-bind:class takes an object as its value — the keys of this object are class names and the values are Vue app properties that return a truthy or falsy value. If the value is truthy, the class will be added to the element — otherwise it will not be added.

In this example, if there are notifications in the notifications array, the unread class will be added to the “Notifications” element causing the element to be styled blue.

Similar to before with v-bind:style, you can also set the value of v-bind:class to a Vue app property that returns a class object instead of writing the object out in your HTML file.
