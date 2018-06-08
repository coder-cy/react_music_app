import { connect } from 'react-redux';
import Artist from './Artist.jsx';
import { asyncFetchArtistClassList } from '../../actions/artist';

const mapStateToProps = state => {
    return {
        ...state.artist,
    }
};


const mapDispatchToProps = dispatch => {
    return {
        fetchArtistClassList: () => {
            dispatch(asyncFetchArtistClassList());
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Artist);