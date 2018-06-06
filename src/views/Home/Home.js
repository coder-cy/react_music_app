import { connect } from 'react-redux';
import Home from './Home.jsx';

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


export default connect(mapStateToProps, mapDispatchToProps)(Home);