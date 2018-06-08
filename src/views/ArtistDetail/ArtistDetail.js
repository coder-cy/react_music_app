import { connect } from 'react-redux';
import ArtistDetail from './ArtistDetail.jsx';
import { asyncFetchArtistDetailData } from '../../actions/artist';

const mapStateToProps = state => {
    return {
        ...state.artist,
    }
};


const mapDispatchToProps = dispatch => {
    return {
        fetchArtistDetailData: singerId => {
            dispatch(asyncFetchArtistDetailData(singerId));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ArtistDetail);