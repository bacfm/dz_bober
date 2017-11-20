const initialState = [];
const todos = (state=initialState, action) => {
    const { type } = action;
    switch(type){
        case 'GET_DATA_SUCCESS':
            return state = action.data;
            break;
        default:
            return state;
    }
}

export default todos;