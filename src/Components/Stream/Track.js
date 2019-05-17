import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Track extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = track => () => {
        let key = track.id;
        this.setState({
            [key]: !this.state[key]
        });
        // console.log(this.state);
    }

    render() {
        const tracks = this.props.track;
        return (
            <div>
                {
                    tracks.map(track => {
                        return (
                            <div key={track.id}>{track.title}
                                <button style={{ width: '60px' }} onClick={this.handleClick(track)}>{this.state[track.id] ? 'Dislike' : 'Like'}</button>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

Track.propTypes = {
    track: PropTypes.array
}

export default Track;