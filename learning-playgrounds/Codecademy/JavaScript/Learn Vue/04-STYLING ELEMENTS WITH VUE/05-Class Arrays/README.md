# Class Arrays

As was the case when we were applying style objects, sometimes we need to apply multiple class objects to a single element. To accommodate this, v-bind:class can take an array as its value.

This array can take class objects as its contents and will apply the classes to the element in the order of the class objects in the array. However, this array can also take one other type of element.

While class objects are good for conditionally adding classes to elements, sometimes we need to just add a class to an element regardless of conditions. When this is the case, you can add the class name to the array and it will always be applied to the element. These class names must be stored as properties on your Vue app.

Let’s clarify this with an example:

    <span v-bind:class="[{ unread: hasNotifications }, menuItemClass]">Notifications</span>
    const app = new Vue({
    data: {
        notifications: [ ... ],
        menuItemClass: 'menu-item'
    },
    computed: {
        hasNotifications: function() {
        return notifications.length > 0;
        }
    }
    }
    .menu-item {
    font-size: 12px;
    }

    .unread {
    background-color: blue;
    }

In this code, we have modified our previous example by changing the value of v-bind:class to be an array. We then added a Vue app property to the end of the array that will add the menu-item class to the element. The object at the beginning of the array will still conditionally add the unread class based on whether there are unread notifications. However, we now always add the class stored at menuItemClass, menu-item, to our “Notifications” element.

Using an array with v-bind:class is useful for adding non-conditional classes, like the menu-item class above, in addition to our conditional classes. We can also use this array to add multiple class objects like we did with our inline style objects earlier in the lesson.
