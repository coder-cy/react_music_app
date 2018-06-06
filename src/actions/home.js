import axios from 'axios';
import API from '../utils/API';


export const foo = () => {
    return {
        type: 'FOO'
    }
}

export const asyncFetchSliderImg = () => {
    return (dispatch,getState) => {
        axios.get(`/kugou/${API.new_song}`).then(res => {
            console.log('data of bannerList:',res);
            dispatch({
                type: 'FETCH_SLIDER_LIST',
                bannerList: res.data.banner
            });
        })
    }
}

export const asyncFetchRecommendList = () => {
    return (dispatch,getState) => {
        axios.get(`/kugou/${API.song_play}`).then(res => {
            console.log('data of recommendList',res.data.plist.list.info);
            dispatch({
                type: 'FETCH_RECOMMEND_LIST',
                recommendList: res.data.plist.list.info
            });
        })
    }
}