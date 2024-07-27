# Computed Style Objects

A common pattern for adding dynamic inline style objects is to add a dynamic Vue app property that generates the style object. For example, we could refactor the previous example as follows:

    <h2 v-bind:style="breakingNewsStyles">Breaking News</h2>
        const app = new Vue({
        data: {
            breakingNewsStyles: {
            color: 'red',
            'font-size': '32px'
            }
        }
    });

In this example, we store the style object, breakingNewsStyles, as a Vue app property and then make that object the value of v-bind:style. Using this pattern, we can make style objects for specific, reusable use cases.

This pattern also allows us to consolidate similar style-computing logic to a single computed property instead of computing styles on a rule-by-rule basis. Instead of creating a computed property for every rule that we want to apply to an element if it passes a certain condition, we can instead create a single computed property that checks the condition and then returns an object with all of the relevant style rules.
