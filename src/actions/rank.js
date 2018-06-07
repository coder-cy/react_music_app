import axios from 'axios';
import API from '../utils/API';

export const asyncFetchRankTitleList = () => {
    return (dispatch,getState) => {
        axios.get(`/kugou/${API.rank}`).then(res => {
            console.log('data of rankTitleList:',res);
            dispatch({
                type: 'FETCH_RANK_TITLE_LIST',
                rankTitleList: res.data.rank.list
            });
        })
    }
}

export const asyncFetchRankDetailData = rankId => {
    return (dispatch,getState) => {
        axios.get(`/kugou/${API.rankid}?rankid=${rankId}&page=1&json=true`).then(res => {
            console.log('data of rankDetailData:',res);
            dispatch({
                type: 'FETCH_RANK_DETAIL_DATA',
                rankDetailData: res.data
            });
        })
    }
}