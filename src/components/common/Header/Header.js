import { connect } from 'react-redux';

import Header from './Header.jsx';

const mapStateToProps = state => {
    return {
        ...state.common,
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


export default connect(mapStateToProps, mapDispatchToProps)(Header);