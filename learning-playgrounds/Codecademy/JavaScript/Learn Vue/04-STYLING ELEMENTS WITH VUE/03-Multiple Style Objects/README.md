# Multiple Style Objects

Another powerful aspect of v-bind:style is that it can also take an array of style objects as a value.

    const app = new Vue({
        data: {
            newsHeaderStyles: {
            'font-weight': 'bold',
            color: 'grey'
            },
            breakingNewsStyles: {
            color: 'red'
            }
        }
    });

    <h2 v-bind:style="[newsHeaderStyles, breakingNewsStyles]">Breaking News</h2>

In this example, we’ve added another Vue app property, newsHeaderStyles. This is a style object that will presumably be used to style all news item headers. Then, using an array with v-bind:style, we add both of these style objects to our Breaking News element.

You may notice that both of these style objects contain a color value. When this happens, the style object added later in the array gets priority. So, Breaking News will be bold and red. The grey color rule will be overridden and not used.
