const initialState = {
    bar: 10
}

export default (state = initialState, action) => { 
    switch(action.type) {
        case 'BAR':
            return {
                ...state,
                bar: 20
            };
        default:
            return state;
    }
}