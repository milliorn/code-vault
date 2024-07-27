# Array Checkbox Bindings

Another interesting form field example is checkboxes. Checkboxes are used in situations where users can select multiple options for a form field. Unlike radio buttons, previous selections won’t be unselected when new selections are added. Instead, users can select all of the relevant checkboxes they’d like.

As a result, the dynamic piece of data bound to these types of checkboxes must be an array. This array stores all of the values checked in the list of checkboxes.

    <legend>Which of the following features would you like to see added?</legend>

    <input type="checkbox" id="search-bar" value="search" v-model="requestedFeatures">
    <label for="search-bar">Search Bar</label>

    <input type="checkbox" id="ads" value="ads" v-model="requestedFeatures">
    <label for="ads">Ads</label>

    <input type="checkbox" id="new-content" value="content" v-model="requestedFeatures">
    <label for="new-content">New Content</label>
    const app = new Vue({
    el: '#app',
    data: { requestedFeatures: [] }
    });

    In this example, we have a set of checkbox fields where users can select all of the features they want to see added to the site. Each checkbox <input> field has the same v-model added to it: requestedFeatures. All of the values of the checked <input> elements will be added to the requestedFeatures array on data.

    For example, if the “Search Bar” and “New Content” checkboxes were selected by the user, the value of requestedFeatures would be ['search', 'content'].
