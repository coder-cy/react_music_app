import { combineReducers } from 'redux';
import home from './home';
import login from './login';
import newSong from './newSong';
import rank from './rank';

export default combineReducers({
    home,
    login,
    newSong,
    rank,
})