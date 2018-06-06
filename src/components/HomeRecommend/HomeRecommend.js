import { connect } from 'react-redux';

import HomeRecommend from './HomeRecommend.jsx';
import { asyncFetchSliderImg } from '../../actions/home';

const mapStateToProps = state => {
    return {
        ...state.home,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchSliderImg: () => {
            dispatch(asyncFetchSliderImg());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeRecommend);