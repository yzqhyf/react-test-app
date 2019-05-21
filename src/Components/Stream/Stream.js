import React, { Component } from 'react';
import Track from './Track';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// const tracks = [
//     {
//         id: '1',
//         title: 'Track A'
//     },
//     {
//         id: '2',
//         title: 'Track B'
//     }
// ];

const mapStateToProps = state => {
    return { tracks: state.track }
}

class Stream extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Track track={this.props.tracks} />
            </div>
        );
    }
}

// function mapStateToProps(state) {
//     return {
//         tracks: state.tracks
//     }
// }

Stream.propTypes = {
    tracks: PropTypes.array
}

export default connect(mapStateToProps)(Stream);