import axios from 'axios';
import API from '../utils/API';
import Cheerio from 'cheerio';

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
// request.asyncGet(`/yy_kugou/singer/home/${this.props.match.params.id}.html`).then(res => res.text()).then(res => {
//     const $ = Cheerio.load(res);
//     const list = $('#song_container').children();
//     const dataArr = [];
//     list.each((index, item) => {
//         const link = $(item).find('a').find('input');
//         dataArr.push(link.val());
//     });
//     this.setState({
//         loaded: true,
//         singerSongs: dataArr,
//         singerimg: this.props.location.state.singerimg.replace(/\{size\}/g, '400'),
//         singername: this.props.location.state.singername
//     })
// })
export const asyncFetchArtistDetailData = (classId) => {
    return (dispatch,getState) => {
        axios.get(`/yy_kugou/singer/home/${classId}.html`).then(res => {
            console.log(res)
            


            // const list = $('#song_container').children();
            // console.log(list)
            // const dataArr = [];
            // list.each((index, item) => {
            //     const link = $(item).find('a').find('input');
            //     dataArr.push(link.val());
            // });
            // console.log(dataArr)
        });
    }
}
