import { connect } from 'react-redux';
import ArtistDetail from './ArtistDetail.jsx';
import { asyncFetchArtistDetailList } from '../../actions/artist';

const mapStateToProps = state => {
    return {
        ...state.artist,
    }
};


const mapDispatchToProps = dispatch => {
    return {
        fetchArtistDetailList: singerId => {
            dispatch(asyncFetchArtistDetailList(singerId));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ArtistDetail);