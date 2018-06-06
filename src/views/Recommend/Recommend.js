import { connect } from 'react-redux';

import Recommend from './Recommend.jsx';

const mapStateToProps = state => {
    return {
        ...state.home,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        // fetchSliderImg: () => {
        //     dispatch(asyncFetchSliderImg());
        // }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);