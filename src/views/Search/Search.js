import { connect } from 'react-redux';
import Search from './Search.jsx';

const mapStateToProps = state => {
    return {
        ...state,
    }
};


const mapDispatchToProps = dispatch => {
    return {
        handleClick: index => {
            
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Search);