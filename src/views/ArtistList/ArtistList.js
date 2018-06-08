import { connect } from 'react-redux';
import ArtistList from './ArtistList.jsx';
import { asyncFetchArtistNameData } from '../../actions/artist';

const mapStateToProps = state => {
    return {
        ...state.artist,
    }
};


const mapDispatchToProps = dispatch => {
    return {
        fetchArtistNameData: classId => {
            dispatch(asyncFetchArtistNameData(classId));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ArtistList);