import { connect } from 'react-redux';
import RecommendList from './RecommendList.jsx';
import { asyncFetchRecommendList } from '../../../actions/home';


const mapStateToProps = state => {
    return {
        ...state.home,
    }
};


const mapDispatchToProps = dispatch => {
    return {
        fetchRecommendList: () => {
            dispatch(asyncFetchRecommendList());
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(RecommendList);