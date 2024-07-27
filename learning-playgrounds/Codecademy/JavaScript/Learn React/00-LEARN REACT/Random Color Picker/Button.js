import React from 'react';

/*
Select Button.js. Add the word export so that you are exporting the Button component class.

Select Button.js. In the render function, give the <button></button> an onClick attribute.
Set onClick‘s value equal to the passed-in prop.
*/

export class Button extends React.Component {
    render() {
        return (
            <button
                className={this.props.light ? 'light-button' : 'dark-button'}
                onClick={this.props.onClick}>
                Refresh
            </button>
        );
    }
}
