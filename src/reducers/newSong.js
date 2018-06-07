const initialState = {
    newSongList: []
}

export default (state = initialState, action) => { 
    switch(action.type) {
        case 'FETCH_NEW_SONG_LIST':
            return {
                ...state,
                newSongList: action.newSongList
            };
        default:
            return state;
    }
}