import { connect } from 'react-redux';
import Nav from './Nav.jsx';

const mapStateToProps = state => {
    return {
        ...state,
    }
};


const mapDispatchToProps = dispatch => {
    return {
        
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Nav);