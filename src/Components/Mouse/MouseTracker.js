import React, { Component } from 'react';
import Mouse from './Mouse';
import Po from './Po';

class MouseTracker extends Component {
    render() {
        return(
            <Mouse render={mouse => (
                <Po mouse={mouse} />
            )}/>
        );
    }
}

export default MouseTracker;
