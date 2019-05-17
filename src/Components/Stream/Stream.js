import React, { Component } from 'react';
import Track from './Track';

const tracks = [
    {
        id: '1',
        title: 'Track A'
    },
    {
        id: '2',
        title: 'Track B'
    }
];

class Stream extends Component {
    render() {
        return (
            <div>
                <Track track={tracks} />
            </div>
        );
    }
}

export default Stream;