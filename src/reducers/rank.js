const initialState = {
    rankTitleList: [],
    rankDetailData: {info: {}, songs: {}},
}

export default (state = initialState, action) => { 
    switch(action.type) {
        case 'FETCH_RANK_TITLE_LIST':
            return {
                ...state,
                rankTitleList: action.rankTitleList
            };
        case 'FETCH_RANK_DETAIL_DATA':
            return {
                ...state,
                rankDetailData: action.rankDetailData
            };
        default:
            return state;
    }
}