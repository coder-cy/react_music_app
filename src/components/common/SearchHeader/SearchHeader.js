import { connect } from 'react-redux';

import SearchHeader from './SearchHeader.jsx';

const mapStateToProps = state => {
    return {
        ...state,
    }
}


const mapDispatchToProps = dispatch => {
    return {
        // focusSearch: () => {
        //     dispatch(changeSearchStatus(FOCUS_SEARCH));
        // },
        // blurSearch: () => {
        //     dispatch(changeSearchStatus(NOT_SEARCH));
        // }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(SearchHeader);