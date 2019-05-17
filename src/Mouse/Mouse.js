import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Mouse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: '',
            y: '',
            init: true
        }
    }

    handleMouseMove = (event) => {
        this.setState({
            x: event.clientX,
            y: event.clientY,
            init: false
        });
    }

    render() {
        return (
            <div style={{width: '500px', height: '500px', background: '#4444', margin: '0 auto'}} onMouseMove={this.handleMouseMove}>
                {this.props.render(this.state)}
            </div>
        );
    }
}

Mouse.propTypes = {
    render: PropTypes.func.isRequired
}

export default Mouse;