import { connect } from 'react-redux';
import Stream from './Stream';
import * as actions from '../../actions';


function mapStateToProps(state) {
    return {
        tracks: state.track
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increment: function(id) { dispatch(actions.increment(id)) },
        decrement: function(id) { dispatch(actions.decrement(id)) },
        reset: function() { dispatch(actions.reset()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stream);