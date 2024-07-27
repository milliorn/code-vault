# Boolean Checkbox Bindings

You may not always use a list of checkboxes. Sometimes you may only need a single checkbox to indicate whether a user has or has not checked a single option. In this case, we need to change the type of Vue data bound to the checkbox.

As seen in the previous example, if you are using a list of checkboxes with values, they need to be bound to an array to store all of the checked values. A single checkbox, however, can be represented by a boolean value. If the checkbox is checked, the value is true — if the value is unchecked, the value is false.

    <legend>Would you recommend this site to a friend?</legend>
        <input type="checkbox" v-model="wouldRecommend" />
        const app = new Vue({
            el: '#app',
            data: { wouldRecommend: false }
    });

In this example, we’ve add v-model to a single checkbox. If the user would recommend this site to their friends, they will check the box and the value of wouldRecommend will be set to true. If they uncheck the box or leave it unchecked, the value of wouldRecommend will be false.
