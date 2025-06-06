# Web Navigator

<https://www.codecademy.com/paths/back-end-engineer-career-path/tracks/fscp-linear-data-structures/modules/fecp-stacks/projects/learn-stacks-javascript-web-navigator>

This project, Web Navigator, simulates the navigational operations of a web browser such as :

opening a new web page,
navigating back a page and
going forward a page. We will use the Stack class to maintain the history of visited pages with a backPages stack and a nextPages stack.Image of stacks
When we open a new page, we push the previous page on the backPages stack. When we revisit an old page and then visit a new page from there, we clear any content in the nextPages stack.

When we revisit a back page, we push the current page on the nextPages stack. Like the back button and the next button on a web browser, the back page and next page operations can be enabled or disabled depending on the state of the two stacks. For example, if the backPages stack is empty, the back operation is disabled and will be enabled only when the stack has content.

User input is required to:

enter a new page to be visited,
navigate backward or forward a page, and
to quit the program.
The option to navigate forward or backward is conditional depending on user input and the state of the stacks. We will explain this in more detail in the relevant tasks.

At every operation other than quitting, we display information about the current page and the top element of the two stacks
