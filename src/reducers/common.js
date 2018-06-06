import { NOT_SEARCH } from '../constant';

const initialState = {
    searchStatus: NOT_SEARCH
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_SEARCH_STATUS':
            return {
                ...state,
                searchStatus: action.searchStatus
            };
        default:
            return state;
    }
}