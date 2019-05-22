import { connect } from 'react-redux';
import Stream from './Stream';
import * as actions from '../../actions';


function mapStateToProps(state) {
    return {
        tracks: state.track,
        count: state.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increment: function(count) { dispatch(actions.increment(count)) },
        decrement: function(count) { dispatch(actions.decrement(count)) },
        reset: function() { dispatch(actions.reset()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stream);