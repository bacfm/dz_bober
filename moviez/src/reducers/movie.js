const initialState = [];


export function movies(state=initialState, action){
    const { type } = action;
    switch(type){
        case 'GET_DATA_SUCCESS':
        return [...state, action.data];
        default:
        return state;
    }
    return state;
}