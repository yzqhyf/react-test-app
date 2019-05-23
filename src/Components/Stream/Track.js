import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Track extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        // this.handleClick = this.handleClick.bind(this);
        // this.handleLikeClick = this.handleLikeClick.bind(this);
        // this.handleDislikeClick = this.handleDislikeClick.bind(this);
        this.increment = this.props.increment.bind(this);
        this.decrement = this.props.decrement.bind(this);
    }

    // handleClick = track => () => {
    //     let key = track.id;
    //     this.setState({
    //         [key]: !this.state[key]
    //     });
    //     this.increment(this.props.count);
    //     // console.log(this.state);
    // }

    handleLikeClick = track => () => {
        this.increment(this.props.tracks[track.id].like);
    }

    handleDislikeClick = track => () => {
        this.decrement(this.props.tracks[track.id].dislike);
    }

    render() {
        const tracks = this.props.tracks;
        return (
            <div>
                {
                    tracks.map(track => {
                        return (
                            <div key={track.id}>{track.title}
                                {/* <button 
                                    style={{ width: '60px' }} 
                                    onClick={this.handleClick(track)}>
                                    {this.state[track.id] ? 'Dislike' : 'Like'}
                                </button> */}
                                <label onClick={this.handleLikeClick(track)}>Like &nbsp; {track.like} &nbsp;</label>
                                <label onClick={this.handleDislikeClick(track)}>Dislike &nbsp; {track.dislike} &nbsp;</label>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

Track.propTypes = {
    tracks: PropTypes.array,
    increment: PropTypes.func,
    decrement: PropTypes.func,
    count: PropTypes.number
}

export default Track;