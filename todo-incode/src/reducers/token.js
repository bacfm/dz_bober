const initialState = "";

export const token = (state = initialState, action) => {
	switch(action.type) {
		case "ADD_TOKEN":
			return action.token; 
		default:
			return state;
	}
}
