import axios from 'axios';
import API from '../utils/API';

export const asyncFetchNewSongList = () => {
    return (dispatch,getState) => {
        axios.get(`/kugou/${API.new_song}`).then(res => {
            console.log('data of newSongList:',res);
            dispatch({
                type: 'FETCH_NEW_SONG_LIST',
                newSongList: res.data.data
            });
        })
    }
}