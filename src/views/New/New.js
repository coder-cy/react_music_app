import { connect } from 'react-redux';
import New from './New.jsx';
import { asyncFetchNewSongList } from '../../actions/new';

const mapStateToProps = state => {
    return {
        ...state.newSong,
    }
};


const mapDispatchToProps = dispatch => {
    return {
        fetchNewSongList: () => {
            dispatch(asyncFetchNewSongList());
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(New);