import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = () => {
        console.log(`this is ${this}`);
    }

    // handleClick() {
    //     console.log(`this is ${this}`);
    // }

    render() {
        return (
            <button onClick={this.handleClick} type="button">{this.props.name}</button>
        )
    }
}

Button.propTypes = {
    name: PropTypes.string
};

export default Button;