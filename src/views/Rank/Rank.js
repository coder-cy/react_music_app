import { connect } from 'react-redux';
import Rank from './Rank.jsx';
import { asyncFetchRankTitleList } from '../../actions/rank';

const mapStateToProps = state => {
    return {
        ...state.rank,
    }
};


const mapDispatchToProps = dispatch => {
    return {
        fetchRankTitleList: () => {
            dispatch(asyncFetchRankTitleList());
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Rank);