# Text, Textarea, and Select Bindings

In Vue Data, we learned that there are two main places to store dynamic data in Vue apps: data for known dynamic values and computed for dynamic values that are determined using other dynamic values.

In web development, it is very common to add forms to sites to allow users to modify these types of dynamic values. As a result, Vue has implemented a directive, called v-model, that automatically binds form fields to dynamic values on the Vue app. When a form field is bound to a value, whenever the value in that form field changes, the value on the Vue app will change to the same value as well. Similarly, if the data on the Vue app changes, the value in the form field will automatically change to reflect the new value to the user.

    <input type="text" v-model="username" />
        const app = new Vue({
        el: '#app',
        data: { username: 'Michael' }
    });

    In this example, we bound an <input> field to a piece of Vue data called username, like so:

    We added a piece of dynamic data to the Vue app called username
    We used v-model on an <input> field to bind the <input> to the piece of data with the provided name: username.
    Now, when this example site is loaded, the <input> will already be pre-filled with 'Michael', the starting value of username. Then, whenever the <input> is modified by the user, the username data value will automatically change to the value typed in by the user.

In this example, we bound the form field to a property on data. However, v-model also works with computed properties as well.

    v-model works on all HTML form field elements. So, simple form fields such as <textarea> elements and <select> elements can be bound to data and computed properties in the exact same way: adding v-model="propertyName" to the opening tag of the elements.

We will cover slightly more complex form elements in the following exercises.
