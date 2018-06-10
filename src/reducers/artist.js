const initialState = {
    artistClassList: [],
    artistNameData: {singers: {list: {info: []}}},
    artistDetailList: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_ARTIST_CLASS_LIST': 
            return {
                ...state,
                artistClassList: action.artistClassList
            };
        case 'FETCH_ARTIST_NAME_DATA':
            return {
                ...state,
                artistNameData: action.artistNameData
            }
        case 'FETCH_ARTIST_DETAIL_LIST':
            return {
                ...state,
                artistDetailList: action.artistDetailList
            }
        default:
            return state;
    }
}