import React from 'react';
import ReactDOM from 'react-dom';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: 'swordfish',
            authorized: false
        };
        this.authorize = this.authorize.bind(this);
    }

    authorize(e) {
        const password = e.target.querySelector(
            'input[type="password"]').value;
        const auth = password == this.state.password;
        this.setState({
            authorized: auth
        });
    }

    /*
    Make the <h1></h1> display Contact only if this.state.authorized is true.
    If this.state.authorized is false, then the <h1></h1> should display Enter the Password.

    In the .render() method, before the return statement, declare a new variable named login.
    Set login equal to a JSX <form></form> element.
    This <form></form> is going to have multiple children, so wrap it in parentheses!
    Give the <form></form> an attribute of action="#".

    In between the <form></form> tags, write two <input /> tags.
    Give the first <input /> two attributes: type="password" and placeholder="Password".
    Give the second <input /> one attribute: type="submit".

    After your login variable, declare another variable named contactInfo.
    Set it equal to empty parentheses.
    Cut the <ul></ul> out of the return statement, and paste it in between those parentheses!

    You need authorize to get called whenever a user hits “Submit!”
    Give the <form></form> an onSubmit attribute.
    Set the attribute’s value equal to the authorize function.
    */
    render() {
        const login = (
            <form action="#" onSubmit={this.authorize}>
                <input
                    type='password'
                    placeholder='Password'
                />
                <input type='submit'
                />
            </form>
        );

        const contactInfo = (
            <ul>
                <li>
                    client@example.com
            </li>
                <li>
                    555.555.5555
            </li>
            </ul>
        );

        /*
        In the render function’s return statement, make a new line right below the <h1></h1>.
        On this new line, use a ternary operator.
        If this.state.authorized is true, make the ternary return contactInfo.
        Otherwise, make the ternary return login.
        */
        return (
            <div id="authorization">
                <h1>{this.state.authorized ? 'Contact' : 'Enter the Password'}</h1>
                <h1>{this.state.authorized ? contactInfo : login}</h1>
            </div>
        );
    }
}

ReactDOM.render(
    <Contact />,
    document.getElementById('app')
);