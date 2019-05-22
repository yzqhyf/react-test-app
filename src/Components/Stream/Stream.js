import React, { Component } from 'react';
import Track from './Track';
import PropTypes from 'prop-types';

// const mapStateToProps = state => {
//     return { tracks: state.track }
// }

class Stream extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { increment, decrement, reset } = this.props;
        return (
            <div>
                <Track track={this.props.tracks} increment={increment} decrement={decrement} reset={reset} />
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
    tracks: PropTypes.array,
    increment: PropTypes.func,
    decrement: PropTypes.func,
    reset: PropTypes.func
}

export default Stream;
// export default connect(mapStateToProps)(Stream);
