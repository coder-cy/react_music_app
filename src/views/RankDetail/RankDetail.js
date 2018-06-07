import { connect } from 'react-redux';
import RankDetail from './RankDetail.jsx';
import { asyncFetchRankDetailData, clearData } from '../../actions/rank';

const mapStateToProps = state => {
    return {
        ...state.rank,
    }
};


const mapDispatchToProps = dispatch => {
    return {
        fetchRankDetailData: (rankId) => {
            dispatch(asyncFetchRankDetailData(rankId));
        },
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(RankDetail);