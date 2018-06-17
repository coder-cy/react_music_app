import { connect } from 'react-redux';
import Play from './Play.jsx';
import { asyncFetchNewSongList } from '../../actions/new';

const mapStateToProps = state => {
    return {
        // ...state.newSong,
    }
};


const mapDispatchToProps = dispatch => {
    return {
        // fetchNewSongList: () => {
        //     dispatch(asyncFetchNewSongList());
        // }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Play);