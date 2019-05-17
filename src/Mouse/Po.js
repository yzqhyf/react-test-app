import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Po extends Component {
    render() {
        const mouse = this.props.mouse;
        const position = mouse.init ? (<p>this is no current position</p>) : (<p>{mouse.x}, {mouse.y}</p>);
        return (
            <div style={{position: 'absolute', left: mouse.x + 25, top: mouse.y + 25}}>
                {position}
            </div>
        );
    }
}

Po.propTypes = {
    mouse: PropTypes.object.isRequired
}

export default Po;
