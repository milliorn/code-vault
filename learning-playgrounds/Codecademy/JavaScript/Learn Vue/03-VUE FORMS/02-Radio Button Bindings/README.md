# Radio Button Bindings

An interesting example of a slightly more complex form field is radio buttons. Radio buttons are a series of buttons where the user can only select one. When a different button is selected, the previously-selected button becomes unselected.

    In HTML, each radio button is its own <input> field. However, they all correspond to the same piece of data in the Vue app. As a result, each <input> field will need its own v-model directive. However, the value of v-model for each <input> will be the same: the name of the property they all correspond to.

    <legend>How was your experience?</legend>

    <input type="radio" id="goodReview" value="good" v-model="experienceReview" />
    <label for="goodReview">Good</label>

    <input type="radio" id="neutralReview" value="neutral" v-model="experienceReview" />
    <label for="neutralReview">Neutral</label>

    <input type="radio" id="badReview" value="bad" v-model="experienceReview" />
    <label for="badReview">Bad</label>
    const app = new Vue({
    el: '#app',
    data: { experienceReview: '' }
    });

    In this example, we have three radio button <input> elements all bound to the same piece of data using v-model: experienceReview.

    When one of the three buttons is selected, it’s value becomes the value of experienceReview. For example, if the “Good” radio button is selected, experienceReview will become the value of that <input>: "good".

    Note: The <legend> and <label> elements and the id properties on the <input>s used in this example are used for site accessiblity. These are not Vue features and, thus, are outside the scope of this course. Please take our lesson on HTML Forms if you’d like more information on this topic.
