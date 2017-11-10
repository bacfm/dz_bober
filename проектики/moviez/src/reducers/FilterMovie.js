const initialState = '';

export const filterMovies = (state = initialState, action) => {
	if(action.type === 'FIND_MOVIE'){
		return action.title;
	}
	return state;
}


