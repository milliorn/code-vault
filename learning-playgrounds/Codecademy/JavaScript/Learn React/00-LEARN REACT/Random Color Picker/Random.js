import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

/*
Give Random a constructor() method.
Give constructor() one parameter, named props.
Inside the body of constructor(), write the line super(props);.
Still inside the body of constructor(), on a new line, set this.state equal to this object:
Instead of x, y, and z, use three numbers between 0 and 255.

Math.random() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

In the render() method, inside of the <h1></h1>, add the text, Your color is this.state.color.

Inside of the <h1></h1>, instead of simply using this.state.color,
call the formatColor function and pass in this.state.color as an argument.

Select Random.js. Near the top of the file, create a new line after import ReactDOM from 'react-dom';.
On this new line, use import the Button component class.

Inside of Random‘s render method, after the <h1></h1>, add a <Button />.

Give Random a new method named handleClick.
Inside of .handleClick()‘s body, call this.setState().
As an argument, pass this.setState() an object with the following property:

You need to bind your new method.
Add a new line to your constructor() method. On this new line, bind handleClick().

In Random‘s render method, give <Button /> an attribute with a name of onClick.
Set onClick‘s value equal to the handleClick method.
*/

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

class Random extends React.Component {

    constructor(props) {
        super(props);
        const red = getRandomInt(255);
        const green = getRandomInt(255);
        const blue = getRandomInt(255);
        this.state = {
            color: [red, green, blue]
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.applyColor();
    }

    componentDidUpdate(_prevProps, _prevState) {
        this.applyColor();
    }

    formatColor(ary) {
        return 'rgb(' + ary.join(', ') + ')';
    }

    isLight() {
        const rgb = this.state.color;
        return rgb.reduce((a, b) => a + b) < 127 * 3;
    }

    applyColor() {
        const color = this.formatColor(this.state.color);
        document.body.style.background = color;
    }

    chooseColor() {
        const random = [];
        for (let i = 0; i < 3; i++) {
            random.push(getRandomInt(255));
        }
        return random;
    }

    handleClick() {
        this.setState({
            color: this.chooseColor()
        });
    }

    render() {
        return (
            <div>
                <h1 className={this.isLight() ? 'white' : 'black'}>
                    Your color is {this.formatColor(this.state.color)}
                </h1>
                <Button
                    light={this.isLight()}
                    onClick={this.handleClick}
                />
            </div>
        );
    }
}

ReactDOM.render(
    <Random />,
    document.getElementById('app')
);