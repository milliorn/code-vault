# Inline Styles

We will start this lesson by demonstrating how to dynamically add inline styles to HTML elements in your Vue application.

As you might recall from early on in learning CSS, inline styles are CSS style rules added directly to HTML elements. You apply inline styles by using the style attribute on HTML elements, like so:

    <h2 style="color:red">Breaking News</h2>
    In the past, we have advocated against the use of inline styles, since they make CSS harder to debug and make HTML harder to read. However, front-end frameworks actually make inline styling a powerful tool due to their ability to contain CSS to small, reusable pieces of front-end code. We will use them extensively later on in your Vue journey.

Here is the syntax for adding dynamic inline styles using Vue:

    <h2 v-bind:style="{ color: breakingNewsColor, 'font-size': breakingNewsFontSize }">Breaking News</h2>
        const app = new Vue({
        data: {
                breakingNewsColor: 'red',
                breakingNewsFontSize: '32px'
        }
    });

In this example, we use the v-bind:style directive to set the value of two inline styles to two Vue app properties. The value of the v-bind:style directive is an object where the keys are CSS properties and the values are dynamic properties on the Vue app.

    In this case, we set the color property on an <h2> element to the value of breakingNewsColor on the Vue app, 'red', and the font-size property to breakingNewsFontSize, '32px'.

Note in the example that if we want to set a value for a hyphenated CSS property, such as font-size, we need to put the property name in quotes in order to construct a valid JavaScript object.

This example only used values stored in data, however computed properties can be used for v-bind:style and all of the other directives covered in this lesson in the same way.

While dynamic inline styles are only used to make our HTML slightly more readable in this example, we will have more impressive uses for inline styling in the next exercise.
