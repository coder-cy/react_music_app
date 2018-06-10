import axios from 'axios';
import API from '../utils/API';
import Cheerio from 'cheerio';
import 'babel-polyfill';

export const asyncFetchArtistClassList = () => {
    return (dispatch,getState) => {
        axios.get(`/kugou/${API.singer_category}`).then(res => {
            console.log('data of artistClassList:',res);
            dispatch({
                type: 'FETCH_ARTIST_CLASS_LIST',
                artistClassList: res.data.list
            });
        })
    }
}

export const asyncFetchArtistNameData = (classId) => {
    return (dispatch,getState) => {
        axios.get(`/kugou/${API.singer_list}/${classId}?json=true`).then(res => {
            console.log('data of artistNameData:',res);
            dispatch({
                type: 'FETCH_ARTIST_NAME_DATA',
                artistNameData: res.data
            });
        })
    }
}

export const asyncFetchArtistDetailList = (classId) => {
    return (dispatch,getState) => {
        fetch(`/yy_kugou/singer/home/${classId}.html`).then(res => res.text()).then(res => {
            const $ = Cheerio.load(res);
            const list = $('#song_container').children();
            const dataArr = [];
            list.each((index, item) => {
                const link = $(item).find('a').find('input');
                let data = link.val();
                data = data.slice(0, data.indexOf('|'));
                dataArr.push(data);
            });
            console.log('data of artistDetailList:', dataArr);
            dispatch({
                type: 'FETCH_ARTIST_DETAIL_LIST',
                artistDetailList: dataArr
            });
        });
    }
}
