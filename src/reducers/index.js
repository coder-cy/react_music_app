import { combineReducers } from 'redux';
import home from './home';
import login from './login';
import common from './common';

export default combineReducers({
    home,
    login,
    common,
})